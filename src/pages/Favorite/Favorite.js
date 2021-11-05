/* eslint-disable max-len */
import React from 'react';
import './Favorite.css';
import FavoriteItem from './FavoriteItem';
import { useGlobalContext } from '../../context';

const Favorite = () => {
  const { favItems } = useGlobalContext();
  const favMoviesList = favItems.map((movie) => <FavoriteItem key={movie.id} title={movie.title} rating={movie.rating} backdrop={movie.backdrop} />);

  return (
    <div className="favorites">
      <div className="favorites__photoContainer">
        <div className="favorites__title">
          <h2>MY</h2>
          <h1>FAVORITES</h1>
        </div>
        <div className="favorites__favList">
          {favMoviesList}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
