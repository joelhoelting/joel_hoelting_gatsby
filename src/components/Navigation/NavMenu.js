import React from 'react';
import Link from 'gatsby-link';

const NavMenu = (props) => {
  return (
    <div id="navMenu">
      <ul>
        <li className="link"><Link onClick={props.toggleNav} to="/">HOME</Link></li>
        <li className="link"><Link onClick={props.toggleNav} to="/blog">BLOG</Link></li>
        <li className="link"><Link onClick={props.toggleNav} to="/portfolio">PORTFOLIO</Link></li>
        <li className="link"><Link onClick={props.toggleNav} to="/about">ABOUT ME</Link></li>
      </ul>
    </div>
  );
};

export default NavMenu;
