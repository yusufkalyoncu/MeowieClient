import { createContext} from "react";
import {useNavigate} from 'react-router-dom';
import {toaster} from '../components/toastify/toastConstans'
const UserContext = createContext()

export default UserContext

export const UserProvider = ({children}) => {
    const navigate = useNavigate()

    let registerUser = async (data) =>{
        try {
            let request = fetch('https://localhost:7208/api/Users',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'name' : data.name,
                    'username' : data.username,
                    'email' : data.email,
                    'password' : data.password,
                    'passwordConfirm' : data.confirmPassword
                })
            })
            let response = await request
            if(response.ok){
                toaster.success("User Created Succesfully")
                navigate('/login')
            }
            else{
                let result = await response.json()
                return result
            } 
        } catch (error) {
            toaster.error(error.message)
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

