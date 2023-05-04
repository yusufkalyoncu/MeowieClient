import { createContext} from "react";
import {toaster} from '../components/toastify/toastConstans'
import UrlService from "../UrlService";
import jwt_decode from "jwt-decode"; 

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

    
    let rateMovie = async (comment, rate, movieId) =>{
        try {
            const localToken = JSON.parse(localStorage.getItem('authTokens'))
            if(localToken){
                var token = localToken['accessToken']
                var user = jwt_decode(localToken['accessToken'])['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']
                let request = fetch('https://localhost:7208/api/Movies/rate',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': 'Bearer ' + token
                    },
                    body: JSON.stringify({
                        'comment' : comment,
                        'rate' : rate,
                        'movieId' : movieId,
                        'username' : user
                    })
                })  
                let response = await request
                if(response.ok){
                    let result = await response.json()
                    toaster.success(result.message)
                }
                else{
                    toaster.error(response.status)
                }
            }
            else{
                toaster.warning("Please first login")
            }

        } catch (error) {
            toaster.error(error.status)
        }
    }

    let contextData = {
        getRandomMovies:getRandomMovies,
        rateMovie:rateMovie,
    }
    
    return(
        <MovieContext.Provider value={contextData}>
            {children}
        </MovieContext.Provider>
    );

}

