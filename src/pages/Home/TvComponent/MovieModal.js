
import React from 'react';
import './MovieModal.css';
import { MdStars } from 'react-icons/md';
import { imageURL } from '../../../requests';

const MovieModal = ({ showMovieModal, onCloseMovieModal, movie }) => (
  <div className={`movieModal ${showMovieModal && 'movieModalOpen'}`} onClick={onCloseMovieModal}>
    <div className="movieModal__left">
      <h1>{movie.title}</h1>
      <div className="imageDiv">
        <img src={`${imageURL}${'/w200'}${movie.poster_path}`} alt="" />
      </div>
      <span className="movieModal__vote">
        <MdStars style={{ color: 'black' }} />
        {movie.vote_average}
      </span>
    </div>
    <div className="movieModal__right">
      <h2>OVERVIEW</h2>
      <p>{movie.overview}</p>
      <h4>
        Release Date:
        {movie.release_date}
      </h4>
    </div>

  </div>
);

export default MovieModal;
