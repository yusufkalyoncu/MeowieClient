import { createContext} from "react";
import {useNavigate} from 'react-router-dom';
import {toaster} from '../components/toastify/toastConstans'
import UrlService from "../UrlService";

const MovieContext = createContext()

export default MovieContext

export const MovieProvider = ({children}) => {

    let getRandomMovies = async (count) => {
        try {

            let request = fetch(UrlService.movie.RandomMoviesURL(count),{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            let response = await request
            if(response.ok){
                let result = await response.json()
                console.log(result.movies)
                return result.movies
            }
            else{
                let result = await response.json()
                toaster.error(result.message)
            }            
        } catch (error) {
            toaster.error(error.message)
        }
    }

    let contextData = {
        getRandomMovies:getRandomMovies
    }
    
    return(
        <MovieContext.Provider value={contextData}>
            {children}
        </MovieContext.Provider>
    );

}

