import React, { useState, useEffect, useCallback } from 'react';
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';
import requests from './requests';

const base_url = "https://image.tmdb.org/t/p/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const handleClick = useCallback(async (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
      return;
    }

    try {
      const request = await axios.get(requests.fetchMovieVideos(movie.id));
      const videos = request.data.results;

      const trailer = videos.find(
        (vid) => vid.type === "Trailer" && vid.site === "YouTube"
      );

      setTrailerUrl(trailer ? trailer.key : "");
    } catch (error) {
      console.log(error);
    }
  }, [trailerUrl]);

  useEffect(() => {
    if (!fetchUrl) return;

    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results || []);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies?.map(movie => {
          const imagePath = isLargeRow ? movie.poster_path : movie.backdrop_path;
          const imageSize = isLargeRow ? "w500" : "w780";

          if (!imagePath) return null;

          return (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`row__poster ${isLargeRow ? "row__posterLarge" : ""}`}
              src={`${base_url}${imageSize}${imagePath}`}
              alt={movie?.name || movie?.title || "Movie"}
              loading="lazy"
            />
          );
        })}
      </div>

      {trailerUrl && (
        <YouTube
          videoId={trailerUrl}
          opts={{
            width: "100%",
            playerVars: { autoplay: 1 },
          }}
        />
      )}
    </div>
  );
}

export default Row;