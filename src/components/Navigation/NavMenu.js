import React from 'react';
import Link from 'gatsby-link';

import './NavMenu.scss';

const NavMenu = (props) => {
  return (
    <div>
      <ul>
        <li className="link"><Link onClick={props.toggleNav} to="/">Home</Link></li>
        <li className="link"><Link onClick={props.toggleNav} to="/blog">Blog</Link></li>
        <li className="link"><Link onClick={props.toggleNav} to="/portfolio">Portfolio</Link></li>
        <li className="link"><Link onClick={props.toggleNav} to="/resume">Resume</Link></li>
      </ul>
    </div>
  );
};

export default NavMenu;
