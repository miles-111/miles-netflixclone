import React, { useState, useEffect } from 'react'
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';
import requests from './requests';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const handleClick = async (movie) => {
  if (trailerUrl) {
    setTrailerUrl("");
  } else {
    try {
      const request = await axios.get(
        requests.fetchMovieVideos(movie.id)
      );

      const videos = request.data.results;

      const trailer = videos.find(
        (vid) => vid.type === "Trailer" && vid.site === "YouTube"
      );

      if (trailer) {
        setTrailerUrl(trailer.key);
      } else {
        setTrailerUrl("");
      }
    } catch (error) {
      console.log(error);
    }
  }
};

  useEffect(() => {
    console.log("fetchUrl:", fetchUrl);

    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map(movie => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>

      {trailerUrl && <YouTube videoId={trailerUrl} />}
    </div>
  )
}

export default Row