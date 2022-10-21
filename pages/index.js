import { useEffect, useState } from "react"
import MyHead from "../components/Head"

const API_KEY = '10923b261ba94d897ac6b81148314a3f';

export default function Home() {
    const [movies, setMovies] = useState([])
    useEffect(()=> {
        (async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
            const { results }  = await response.json();
            setMovies(results);
        })();
    },[]);

    return (
        <div>
            <MyHead title="Home"/>
            <h1>Home Page</h1>
            {movies.map(movies => (
                <div key = {movies.id}>
                    <h1>{movies.title}</h1>
                </div>
                )
            )}
        </div>
    ) 
}