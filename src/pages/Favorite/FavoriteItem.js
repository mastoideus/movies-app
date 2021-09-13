import React from 'react';
import './FavoriteItem.css';
import { imageURL } from '../../requests';

const FavoriteItem = ({ backdrop, title }) => (
  <div
    className="favoriteItem"
    style={{
      backgroundImage: `url(${imageURL}${'/w300'}${backdrop})`, backgroundPosition: 'center center', backgroundSize: 'cover', objectFit: 'contain',
    }}
  >
    <div className="favoriteItem__favContainer">

      <h3>{title}</h3>

    </div>
  </div>
);

export default FavoriteItem;
