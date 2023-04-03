import axios from "axios";
import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode"; 
const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) =>{
    
    let [authTokens, setAuthTokens] = useState(null)
    let [user, setUser] = useState(null)

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
            setUser(jwt_decode(result.token.accessToken))
            console.log(user)
        }
    }

    let loginUser2 = async (e) =>{
        e.preventDefault()
        axios.post('https://localhost:7208/api/Auth/Login',{
            'usernameOrEmail' : e.target.usernameOrEmail.value,
            'password' : e.target.password.value
        }).then(response => console.log("axios res : ",response))
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
