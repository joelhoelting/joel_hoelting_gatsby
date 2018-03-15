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
        borderBottomLeftRadius: '5em',
        borderBottomRightRadius: '5em',
        cursor: 'pointer',
        color: '#fff',
        fontFamily: 'Code Bold',
        height: '4em',
        width: '8em',
        left: '50%',
        paddingTop: '.5em',
        position: 'fixed',
        textAlign: 'center',
        top: 0,
        /* makes it horizontally centered */
        transform: 'translateX(-50%)',
        transition: 'all 100ms linear',
        zIndex: 1,
      },
      inactive: {
        borderRadius: '0 0 5em 5em',
        '@media (min-width: 700px)': {
          ':hover': {
            width: '10em',
            height: '5em',
            paddingTop: '1em',
            borderRadius: '0 0 6em 6em'
          }
        },
      },
      active: {
        width: '100vw',
        height: '100vh'
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
