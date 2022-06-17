import React from "react";
import Row from "./Row";
import Banner from "./Banner";
import Navbar from "./Navbar";
import requests from "../requests";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Row
        title="Netflix originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isveryLarge={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romantic movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documenetaries" fetchUrl={requests.fetchDocumantaries} />
    </div>
  );
}

export default Home;
