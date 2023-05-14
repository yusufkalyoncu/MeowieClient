import { createContext, useContext} from "react";
import {useNavigate} from 'react-router-dom';
import {toaster} from '../components/toastify/toastConstans'
import UrlService from "../UrlService";
import UserContext from "./UserContext";

const MovieListContext = createContext()

export default MovieListContext

export const MovieListProvider = ({children}) => {

    const {getUsernameAndToken} = useContext(UserContext)

    const getUserMovieLists = async (user) =>{
        try {
            if(!user){
                user = getUsernameAndToken()
                if(user){
                    user = user.username
                }
            }
            if(user){
                let request = fetch(UrlService.movieList.GetAllUserMovieList(user),{
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                let response = await request
                if(response.ok){
                    let result = await response.json()
                    return result.movieLists
                }
                else{
                    let result = await response.json()
                    toaster.error(result.message)
                }         
            }   
        } catch (error) {
            toaster.error(error.message)
        }
    }

    const addMovieToList = async (movieId, movieListId) =>{
        try {
            const usernameAndToken = getUsernameAndToken()

            if(usernameAndToken){
                let request = fetch(UrlService.movieList.AddMovieToList(movieId, movieListId),{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': 'Bearer ' + usernameAndToken.token
                    },
                })  
                let response = await request
                if(response.ok){
                    let result = await response.json()
                    if(result.success){
                        toaster.success(result.message)
                    }
                    else{
                        toaster.error(result.message)
                    }
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
        getUserMovieLists:getUserMovieLists,
        addMovieToList:addMovieToList
    }
    
    return(
        <MovieListContext.Provider value={contextData}>
            {children}
        </MovieListContext.Provider>
    );

}

