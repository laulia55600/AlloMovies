import * as axios from 'axios';

const apiMovie = axios.create({
    baseURL: 'https://api.themoviedb.org/4'
})

apiMovie.interceptors.request.use( req => {
    req.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmU5ZTQwZDVjY2U2NTcwYjA4ZjdjZjg0YzdiNDEwYSIsInN1YiI6IjYwYzQ2ZjliYzM1MTRjMDA1Njc1MTJjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yzhRdGoyRRkFMlrNRf5akNRle0zymBV-mWUeqGcfJ6k'
    return req;
})

export default apiMovie;