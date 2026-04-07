import React, { useState } from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  const [trailerUrl, setTrailerUrl] = useState("");
  const [activeRow, setActiveRow] = useState(null);

  return (
    <div className="App">
      <Nav />
      <Banner />

      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
        trailerUrl={trailerUrl}
        setTrailerUrl={setTrailerUrl}
        activeRow={activeRow}
        setActiveRow={setActiveRow}
      />

      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        trailerUrl={trailerUrl}
        setTrailerUrl={setTrailerUrl}
        activeRow={activeRow}
        setActiveRow={setActiveRow}
      />

      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        trailerUrl={trailerUrl}
        setTrailerUrl={setTrailerUrl}
        activeRow={activeRow}
        setActiveRow={setActiveRow}
      />

      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        trailerUrl={trailerUrl}
        setTrailerUrl={setTrailerUrl}
        activeRow={activeRow}
        setActiveRow={setActiveRow}
      />

      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        trailerUrl={trailerUrl}
        setTrailerUrl={setTrailerUrl}
        activeRow={activeRow}
        setActiveRow={setActiveRow}
      />

      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        trailerUrl={trailerUrl}
        setTrailerUrl={setTrailerUrl}
        activeRow={activeRow}
        setActiveRow={setActiveRow}
      />

      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        trailerUrl={trailerUrl}
        setTrailerUrl={setTrailerUrl}
        activeRow={activeRow}
        setActiveRow={setActiveRow}
      />

      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        trailerUrl={trailerUrl}
        setTrailerUrl={setTrailerUrl}
        activeRow={activeRow}
        setActiveRow={setActiveRow}
      />
    </div>
  );
}

export default App;