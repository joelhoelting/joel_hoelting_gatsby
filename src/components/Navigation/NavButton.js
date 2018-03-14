import React, { Component } from 'react';
import Radium from 'radium';
import NavMenu from './NavMenu';

class NavButton extends Component {

  handleClick = () => {
    // Toggle navActive State
    this.props.toggleNav();
    // Remove Hover State in Radium (BugFix)
    this.setState({ _radiumStyleState: { 'componentKey': { ':hover': false }}});
  }

  render() {
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
        transition: 'all 100ms linear',
        width: '12em',
        zIndex: 1,
      },
      inactive: {
        '@media (min-width: 700px)': {
          ':hover': {
            width: '15em',
            height: '2.5em',
            paddingTop: '5px',
            borderRadius: '0 0 .5em .5em',
          }
        },
      },
      active: {
        width: '100vw',
        height: '100vh',
        borderRadius: 0
      }
    };

    const { base, active, inactive } = styles;
    const { toggleNav } = this.props;

    return (
      <div
        style={[base, this.props.navActive ? active : inactive]}
        onClick={this.handleClick}>
        {this.props.navActive ? <NavMenu toggleNav={toggleNav}/> : 'navigation'}
      </div>
    );
  }
}

export default Radium(NavButton);
