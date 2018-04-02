import React from 'react';
import Radium, {Style} from 'radium';
import Link from 'gatsby-link';

import styles from './NavMenu.module.scss';

const NavMenu = (props) => {

  function createLinks() {
    const links = [
      { title: 'HOME', path: '/' },
      { title: 'BLOG', path: '/blog' },
      { title: 'PORTFOLIO', path: '/portfolio' },
      { title: 'ABOUT ME', path: '/about' },
    ];

    var opacity = Radium.keyframes({
      '0%': {opacity: 0},
      '50%': {opacity: 0},
      '100%': {opacity: 1},
    });


    const listItemAnimations = [
      {
        animation: 'x 500ms linear forwards',
        animationName: opacity
      },
      {
        animation: 'x 500ms 100ms linear forwards',
        animationName: opacity
      },
      {
        animation: 'x 500ms 200ms linear forwards',
        animationName: opacity
      },
      {
        animation: 'x 500ms 300ms linear forwards',
        animationName: opacity
      }
    ];

    const renderedLinks = links.map((link, i) => <li key={i} style={listItemAnimations[i]}><Link className={styles.link} onClick={props.toggleNav} to={link.path}>{link.title}</Link></li>);
    return renderedLinks;
  }

  return (
    <div className="navMenu">
      <Style
        scopeSelector=".navMenu"
        rules={{
          height: '95%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          ul: {
            listStyleType: 'none',
            marginLeft: 0,
          },
          li: {
            fontSize: '4rem',
            opacity: 0,
            textShadow: '2px 2px #000',
            margin: 0,
            padding: 0
          }
        }}
      />
      <ul>
        {createLinks()}
      </ul>
    </div>
  );
};

export default Radium(NavMenu);
