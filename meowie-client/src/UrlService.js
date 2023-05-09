let baseURL = `https://localhost:7208/api/`

const UrlService = {
    movie : {
        RandomMoviesURL : (count) =>`${baseURL}Movies/random?Count=${count}`,
            MoviesURL : (count, page=0, shuffle=false, ...genres) => {
            let genresUrl = ""
            if(genres) {
            genres.map((genre)=>genresUrl+=`&Genres=${genre}`)
            }
            console.log(`${baseURL}Movies?Page=${page}&Count=${count}${genresUrl}&Shuffle=${shuffle}`)
            return `${baseURL}Movies?Page=${page}&Count=${count}${genresUrl}`
        },
        MovieById : (movieId) => `${baseURL}Movies/${movieId}`
    },
    comment : {
        GetUserCommentByMovieId : (username, movieId) => `${baseURL}Comments/single-comment?Username=${username}&MovieId=${movieId}`
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
