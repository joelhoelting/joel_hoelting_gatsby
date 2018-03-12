import React from 'react';
import Radium from 'radium';
import NavMenu from './NavMenu';


const NavButton = (props) => {

  const styles = {
    base: {
      background: '#24255d',
      borderRadius: '0 0 1em 1em',
      cursor: 'pointer',
      color: '#fff',
      fontFamily: 'Code Bold',
      height: '1.5em',
      left: '50%',
      position: 'fixed',
      textAlign: 'center',
      top: 0,
      /* makes it horizontally centered */
      transform: 'translateX(-50%)',
      transition: 'all 200ms linear',
      width: '12em',
      zIndex: 1,
    },
    inactive: {
      '@media (min-width: 700px)': {
        ':hover': {
          width: '15em',
          height: '2.5em',
          paddingTop: '5px',
          borderRadius: '0 0 .4em .4em',
        }
      },
    },
    active: {
      width: '100vw',
      height: '100vh',
      borderRadius: 0
    }
  };

  const { base, active, inactive} = styles;
  const { toggleNav } = props;

  return (
    <div
      style={[base, props.navActive ? active : inactive]}
      onClick={toggleNav}>
      {props.navActive ? <NavMenu toggleNav={toggleNav}/> : 'navigation'}
    </div>
  );

};

export default Radium(NavButton);
