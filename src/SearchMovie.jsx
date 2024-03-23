import React from "react";
import MovieCard from './MovieCard';


export default function SearchMovies(){
    const[query, setQuery] = React.useState('')
    const [movies, setMovies] = React.useState([])


    const searchMovies = async (e) => {
        e.preventDefault();
        
        const url = `https://api.themoviedb.org/3/search/movie?api_key=e500455d201519d4f48e68c11acba72b&language=en-US&query=${query}&page=1&include_adult=false`;        
        try {
            const res = await fetch(url);
            const data  = await res.json();
            console.log(data.results);
            setMovies(data.results)
        }catch(err){
            console.error(err);
        }
    }

    return (
        <>
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query"
                placeholder="i.e. Jurassic Park"
                value ={query} onChange={(e)=> setQuery(e.target.value)}/>
            <button className="button" type="submit">Search</button>
        </form>
        <div className="card-list">
            {movies.filter(movie => movie.poster_path).map(movie =>
                <MovieCard movie = {movie} key={movie.id} />
                )}

        </div>
        </>
    )
}
