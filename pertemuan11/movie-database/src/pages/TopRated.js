import {useEffect,useState} from "react";
import Axios from "axios"
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";

function TopRated(){
    //SIMPAN API KEY KE URL VARIABLE
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

    // membuat state movies
    const [movies, setMovies] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        async function getTopRatedMovies(){
            const responses = await Axios(URL);
            console.log(responses)
            // simpan data ke state movie
            setMovies(responses.data.results);
        }
        getTopRatedMovies();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    console.log(movies)

    return (
        <>
            <Hero />
            <Movies movies={movies}/>
        </>
    );
}


export default TopRated;