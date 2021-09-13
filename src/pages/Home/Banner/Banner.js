import React from 'react';
import './Banner.css';
import { CgMouse } from 'react-icons/cg';
import { Link } from 'react-scroll';
import BannerLeft from './BannerLeft';
import BannerRight from './BannerRight';

const Banner = () => (
  <div className="banner">
    <BannerLeft />
    <BannerRight />
    <Link className="banner__mouseIcon" to="tv" duration={250} smooth>
      <CgMouse />
    </Link>
  </div>
);

export default Banner;
