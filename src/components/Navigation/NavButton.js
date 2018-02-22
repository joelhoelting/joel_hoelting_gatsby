import React from 'react';

import './Navigation.scss';
import NavMenu from './NavMenu';


const NavButton = (props) => {

  function renderNavMenu(){
    if (props.navActive) {
      return (
        <NavMenu toggleNav={props.toggleNav}/>
      );
    } else {
      return (
        'navigation'
      );
    }
  }

  return (
    <div id="navButton" onClick={props.toggleNav} className={props.navActive ? 'active' : 'inactive'}>
       {renderNavMenu()}
    </div>
  );

};

export default NavButton;
