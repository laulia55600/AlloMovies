import * as axios from 'axios';


const apiMovie = axios.create({
    baseURL: 'https://api.themoviedb.org/4'
})

apiMovie.interceptors.request.use( req => {
    req.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmU5ZTQwZDVjY2U2NTcwYjA4ZjdjZjg0YzdiNDEwYSIsInN1YiI6IjYwYzQ2ZjliYzM1MTRjMDA1Njc1MTJjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yzhRdGoyRRkFMlrNRf5akNRle0zymBV-mWUeqGcfJ6k'
    return req;
})

export default apiMovie;

export const apiMovieMap = (m) => ({
    img: 'https://image.tmdb.org/t/p/w500' + m.poster_path,
          title: m.title,
          details: `${ m.release_date } | ${ m.vote_average }/10 (${ m.vote_count })`,
          description: m.overview
  });