import React, { useState, useEffect } from "react";
import instance from "../axios";
import "../row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, fetchUrl, isveryLarge }) {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [movies, setmovies] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const [movieTitle, setMovieTitle] = useState("");
  // const [TrailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchdata() {
      const request = await instance.get(fetchUrl);
      setmovies(request.data.results);
      return request;
    }
    fetchdata();
  }, [fetchUrl]);

  // const opts = {
  //   height: "390",
  //   width: "640",
  //   playerVars: {
  //     // https://developers.google.com/youtube/player_parameters
  //     autoplay: 1,
  //   },
  // };

  // const handleClick = (movie) => {
  //   if (TrailerUrl) {
  //     setTrailerUrl("");
  //   } else {
  //     movieTrailer(movie.name || "")
  //       .then((url) => {
  //         const urlParams = new URLSearchParams(new URL(url).searchParams);
  //         setTrailerUrl(urlParams.get("v"));
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  // };

  // const handleMouseOver = (movie) => {
  //   setIsShown(true);
  //   setMovieTitle(movie);
  // };

  return (
    <div className="row">
      <h2 className="heading">{title}</h2>
      <div className="movies_poster">
        {movies.map((movie) => (
          <img
            key={movie.id}
            // onMouseOver={handleMouseOver(movie.name)}
            // onMouseLeave={() => setIsShown(false)}
            className={`poster ${isveryLarge && "large_poster"}`}
            src={`${base_url}${
              isveryLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.title}
          />
        ))}
        {/* {isShown && <div className="poster_title">{movieTitle}</div>} */}
      </div>
      {/* {TrailerUrl && <Youtube videoId={TrailerUrl} opts={opts} />} */}
    </div>
  );
}

export default Row;
