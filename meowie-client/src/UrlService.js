let baseURL = `https://localhost:7208/api/`

const UrlService = {
    movie : {
        RandomMoviesURL : (count) =>`${baseURL}Movies/random?Count=${count}`,
            MoviesURL : (count, page=0, shuffle=false, ...genres) => {
            let genresUrl = ""
            if(genres) {
            genres.map((genre)=>genresUrl+=`&Genres=${genre}`)
            }
            return `${baseURL}Movies?Page=${page}&Count=${count}${genresUrl}`
        },
        MovieById : (movieId) => `${baseURL}Movies/${movieId}`,
        SearchMovie : (count, page=0, shuffle=false, searchKeyword) => `${baseURL}Movies/search?Page=${page}&Count=${count}&Shuffle=${shuffle}&SearchKeyword=${searchKeyword}`
    },
    comment : {
        GetUserCommentByMovieId : (username, movieId) => `${baseURL}Comments/single-comment?Username=${username}&MovieId=${movieId}`
    },
    image : {
        GetProfileImage : (imagename) => `${baseURL}Images/${imagename}`
    },
    movieList : {
        GetAllUserMovieList : (ownerUser, likerUser) =>{
            if(likerUser){
                return `${baseURL}MovieLists/user-movielist?ListOwnerUsername=${ownerUser}&LoggedUsername=${likerUser}`
            }
            return `${baseURL}MovieLists/user-movielist?ListOwnerUsername=${ownerUser}`
        },
        AddMovieToList : (movieId, movieListId) => `${baseURL}MovieLists/add-movie?MovieId=${movieId}&MovieListId=${movieListId}`,
        GetMovieListDetail : (movieListId) => `${baseURL}MovieLists/${movieListId}`,
        LikeMovieList : (movieListId, username) => `${baseURL}MovieLists/like?MovieListId=${movieListId}&Username=${username}`,
        
    }
}


export const Genres = {
    Action : 'Action',
    Comedy : 'Comedy',
    Drama : 'Drama',
    Romance : 'Romance',
    SciFi : 'Sci-Fi',
    Thriller : 'Thriller',
    Horror : 'Horror',
    Adventure : 'Adventure',
}
export default UrlService
