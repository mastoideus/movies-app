import React, { useState, useEffect } from 'react';
import './BannerRight.css';
import requests, { imageURL } from '../../../requests';
import axios from '../../../axios';

const BannerRight = () => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(requests.fetchTVMovies);

      setTopMovies(response.data.results);
    };

    fetchData();
  }, []);

  return (
    <div className="bannerRight">
      <div className="bannerRight__titleR">
        <h2>TOP</h2>
        <h1>RATED</h1>
      </div>
      <div className="bannerRight__movieContainer">
        {topMovies.map((movie) => (
          <div key={movie.id} className="bannerRight__imgContainer">
            <img src={`${imageURL}${'/w200'}${movie.poster_path}`} alt="" />
          </div>
        ))}
      </div>
    </div>

  );
};

export default BannerRight;
