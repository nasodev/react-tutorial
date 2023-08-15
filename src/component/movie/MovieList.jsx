import { useEffect, useState } from "react";
import { Link } from "react-router-dom"


export default function MovieList() {
    const [loading,setLoading] = useState(true);
    const [movies,setMovies] = useState([]);

    // useEffect(()=>{
    //     fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
    //     .then((response) => response.json())
    //     .then((json) => {
    //         setMovies(json.data.movies);
    //         setLoading(false);
    //     });
    // },[]);

    // const getMovies = async() => {
    //     const json = await (await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')).json();
    //     setMovies(json.data.movies);
    //     setLoading(false);
    // }

    const getMovies = async() => {
        const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year');
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    }

    useEffect(()=>{
        getMovies();
    },[]);

    const printMovie = () => (
        <div>
            {movies.map((movie)=> (<div key={movie.id}>
                    <img 
                        src={movie.small_cover_image}
                    />
                    <h2><Link to={`/movie/${movie.id}`}>{movie.title}</Link></h2> 
                    <p>{movie.summary}</p>
                    <ul>
                        {movie.genres.map((g) => {
                            <li key={g}>{g}</li>
                        })}
                    </ul>
                </div>))}
        </div>
    );
    

    return <div>
        {loading ? <h1>loading...</h1> : printMovie()}
    </div>
}