import React, { useEffect, useState } from "react";
import instance from "../axios";
import requests from "../requests";
import "../banner.css";

function Banner() {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    async function fetchmovie() {
      const request = await instance.get(requests.fetchNetflixOriginals);
      setmovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchmovie();
  }, []);
  console.log(movie);
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(" https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">{movie.name || movie.original_name} </h1>
        <div className="banner_buttons">
          <button className="banner_button"> My list</button>
          <button className="banner_button"> Play Next</button>
        </div>
        <h1 className="banner_description"> {movie.overview}</h1>
      </div>
      <div className="banner--faded"></div>
    </header>
  );
}

export default Banner;
