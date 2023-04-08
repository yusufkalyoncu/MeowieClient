import { createContext} from "react";
import {useNavigate} from 'react-router-dom';
import {toaster} from '../components/toastify/toastConstans'

const MovieContext = createContext()

export default MovieContext

export const MovieProvider = ({children}) => {

    

    let contextData = {

    }
    
    return(
        <MovieContext.Provider value={contextData}>
            {children}
        </MovieContext.Provider>
    );

}

