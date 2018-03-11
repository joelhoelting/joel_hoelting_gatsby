import React from 'react';

import './Navigation.scss';
import NavMenu from './NavMenu';


const NavButton = (props) => {

  return (
    <div id="navButton" onClick={props.toggleNav} className={props.navActive ? 'active' : 'inactive'}>
       {props.navActive ? <NavMenu toggleNav={props.toggleNav}/> : 'navigation'}
    </div>
  );

};

export default NavButton;
