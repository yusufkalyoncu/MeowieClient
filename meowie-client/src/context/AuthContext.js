import axios from "axios";
import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode"; 
import {useNavigate} from 'react-router-dom';

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) =>{
    const navigate = useNavigate()
    const localToken = JSON.parse(localStorage.getItem('authTokens'))

    let [authTokens, setAuthTokens] = useState(()=> localToken ? localToken : null)
    let [user, setUser] = useState(()=>localToken ? jwt_decode(localToken['accessToken'])['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'] : null)
    
    let loginUser = async (e) =>{
        e.preventDefault();
        let request = fetch('https://localhost:7208/api/Auth/Login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'usernameOrEmail' : e.target.usernameOrEmail.value, 'password' : e.target.password.value})
        })
        let response = await request
        if(response.status === 200){
            let result = await response.json()
            setAuthTokens(result.token)
            setUser((jwt_decode(result.token.accessToken))["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"])
            localStorage.setItem("authTokens",JSON.stringify(result.token))
            navigate('/')
        }
    }

    let contextData ={
        user:user,
        loginUser:loginUser
    }

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
}
