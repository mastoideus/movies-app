

const requests={
    fetchTrending:`/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
    fetchTopRated:`/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
    fetchTVMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
}


export const imageURL='https://image.tmdb.org/t/p'


export default requests