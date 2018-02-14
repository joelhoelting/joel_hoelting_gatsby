import React from 'react';
import Link from 'gatsby-link';

const Navigation = () => (
  <div
    style={{
      height: '100%',
      width: '100%',
      position: 'fixed',
      zIndex: 1,
      left: 0,
      top: 0,
    }}
  >
    <ul
      style={{
        height: '90%',
        listStyleType: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}
    >
      <li style={{margin: '20px 0', fontSize: '4rem'}}><Link to="/blog">Blog</Link></li>
      <li style={{margin: '20px 0', fontSize: '4rem'}}><Link to="/portfolio">Portfolio</Link></li>
      <li style={{margin: '20px 0', fontSize: '4rem'}}><Link to="/about">Resume</Link></li>
    </ul>
  </div>
);

export default Navigation;
