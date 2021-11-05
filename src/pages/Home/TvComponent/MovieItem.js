/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import './MovieItem.css';
import { MdStars } from 'react-icons/md';
import { GoBookmark } from 'react-icons/go';
import { imageURL } from '../../../requests';
import { useGlobalContext } from '../../../context';

const MovieItem = ({
  backdrop, title, rating, poster, id, release, onOpenMovieModal,
}) => {
  const [favColor, setFavColor] = useState(false);
  const { favMovieAdd, favMovieRemove } = useGlobalContext();

  const onAddOrRemoveFav = () => {
    setFavColor((prevState) => !prevState);
    if (!favColor) {
      favMovieAdd({
        id, title, rating, release, poster, backdrop,
      });
    } else {
      favMovieRemove(id);
    }
  };

  return (
    <div className="movieItem">
      <div className={`movieItem__fav ${favColor && 'color'}`} onClick={onAddOrRemoveFav}>
        <GoBookmark />
      </div>
      <div className="movieItem__imgContainer" onClick={() => onOpenMovieModal(id)}>

        <img src={`${imageURL}${'/w200'}${poster}`} alt="" />
      </div>
      <div className="movieItem__movieInfo">
        <h5>{title}</h5>
        <small>{release}</small>
      </div>
      <div className="movieItem__rating">
        <MdStars style={{ fontSize: '30px' }} />
        <p style={{ color: 'grey' }}>{rating}</p>
      </div>

    </div>
  );
};

export default MovieItem;
