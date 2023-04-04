import { createContext} from "react";
import {useNavigate} from 'react-router-dom';

const UserContext = createContext()

export default UserContext

export const UserProvider = ({children}) => {
    const navigate = useNavigate()

    let registerUser = async (e) =>{
        e.preventDefault();
        let request = fetch('https://localhost:7208/api/Users',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'name' : e.target.name.value,
                'username' : e.target.username.value,
                'email' : e.target.email.value,
                'password' : e.target.password.value,
                'passwordConfirm' : e.target.passwordConfirm.value

            })
        })
        let response = await request
        if(response.status === 200){
            navigate('/login')
        }
    }

    let contextData = {
        registerUser:registerUser
    }
    
    return(
        <UserContext.Provider value={contextData}>
            {children}
        </UserContext.Provider>
    );

}

