import { createContext} from "react";
import {useNavigate} from 'react-router-dom';
import {toaster} from '../components/toastify/toastConstans'
import UrlService from "../UrlService";

const CommentContext = createContext()

export default CommentContext

export const CommentProvider = ({children}) => {

    let getSingleComment = async (username, movieId) =>{
        try {
            let request = fetch(UrlService.comment.GetUserCommentByMovieId(username, movieId),{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            let response = await request
            if(response.ok){
                let result = await response.json()
                console.log(result)
            }

        } catch (error) {
            toaster.error(error.message)
        }
    }

    let contextData = {
        getSingleComment:getSingleComment,
    }
    
    return(
        <CommentContext.Provider value={contextData}>
            {children}
        </CommentContext.Provider>
    );

}

