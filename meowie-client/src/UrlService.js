let baseURL = `https://localhost:7208/api/`

const UrlService = {
    movie : {
        RandomMoviesURL : (count) =>`${baseURL}Movies/random?Count=${count}`,
        GenreMoviesURL : (count, ...genres) => {
            let genresUrl = ""
            genres.map((genre)=>genresUrl+=`Genres=${genre}&`)
            genresUrl += `Count=${count}`
            return `${baseURL}Movies/genre?${genresUrl}`
        }
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
