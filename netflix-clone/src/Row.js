import React, { useState, useEffect } from 'react'
import axios from './axios';

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    // a snipper of code which runs based on a specific condition
    useEffect(() => {
        // if[], run once when the row loads,
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.log(movies);

    return (
    <div className="row">
        <h2/>{title}<h2/>

        <div className="row__posters">
            {/* several row__posters*/}

            {movies.map(movie => (
                <img src={movie.poster_path} alt={movie.name}/>
            ))}
        </div>
        {/* container -> posters */}
    </div>
  )
}

export default Row