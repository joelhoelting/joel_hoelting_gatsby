import React from 'react';
import './NavButton.scss';

import NavMenu from './NavMenu';

const NavButton = (props) => {

  function renderNavMenu(){
    if (props.navActive) {
      return (
        <NavMenu toggleNav={props.toggleNav}/>
      );
    } else {
      return (
        'menu'
      );
    }
  }

  return (
    <div onClick={props.toggleNav} className={props.navActive ? 'navMenu' : 'navButton'}>
       {renderNavMenu()}
    </div>
  );

};

export default NavButton;
