import React, { useState } from 'react';
import './Navigation.css';
import { FaSearch } from 'react-icons/fa';
import movieLogo from '../../assets/images/movieLogo.png';
import HambModal from './HambModal';
import { useGlobalContext } from '../../context';

const Navigation = () => {
  const [hambModal, setHambModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const { onTransportData } = useGlobalContext();

  const openHambModalHandler = () => {
    setHambModal(true);
  };
  const closeHambModalHandler = () => {
    setHambModal(false);
  };

  const searchTermHandler = (e) => {
    setSearchTerm(e.target.value);

    onTransportData(e.target.value);
  };

  return (

    <>
      <HambModal hambModal={hambModal} onCloseHambModal={closeHambModalHandler} />
      <div className="navigation">
        <h1 className="navigation__logo">
          M
          <img style={{ width: '60px', margin: '-10px -10px' }} src={movieLogo} alt="" />
          VIE
          <span>DATABASE</span>
        </h1>
        <div className="navigation__searchBar">
          <FaSearch style={{ fontSize: '20px' }} />
          <input value={searchTerm} type="text" placeholder="Search by Title" onChange={searchTermHandler} />
        </div>

        <div role="button" className="navigation__hamburger" onClick={openHambModalHandler}>
          <span />
          <span />
          <span />
          <span />
        </div>

      </div>
    </>

  );
};

export default Navigation;
