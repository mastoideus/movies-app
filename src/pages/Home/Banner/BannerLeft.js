import React, { useState, useEffect } from 'react';
import './BannerLeft.css';
import axios from '../../../axios';
import requests, { imageURL } from '../../../requests';
import Spinner from '../../../sharedComponents/Spinner';

const BannerLeft = () => {
  const [bannerMovies, setBannerMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await axios.get(requests.fetchTrending);

      setBannerMovies(response.data.results);
    };
    fetchData();
    setIsLoading(false);
  }, []);

  return (
    <div className="bannerLeft">
      <div className="bannerLeft__title">
        <h2>NEW</h2>
        <h1>RELEASES</h1>
      </div>
      <div className="bannerLeft__movieRow">
        {isLoading ? <Spinner /> : bannerMovies.map((movie) => (
          <div key={movie.id} className="bannerLeft__imgContainer">
            <img src={`${imageURL}${'/w200'}${movie.poster_path}`} alt="" />
          </div>
        )) }
      </div>

    </div>
  );
};

export default BannerLeft;
