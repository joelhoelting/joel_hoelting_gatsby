import React, { Component } from 'react';
import Radium from 'radium';
import NavMenu from './NavMenu';

class NavButton extends Component {
  constructor() {
    super();

    this.state = {
      hideButton: false,
      scrollPosition: 0
    };
    this
  }

  handleClick = () => {
    // Toggle navActive State
    this.props.toggleNav();
    // Remove Hover State in Radium (BugFix)
    this.setState({ _radiumStyleState: { 'componentKey': { ':hover': false }}});
  }

  componentDidMount() {
    let originalThis = this;
    window.addEventListener('scroll', this.checkScroll.bind(originalThis))
  }

  checkScroll() {
    console.log(window.scrollY)
    if (window.scrollY > this.state.scrollPosition) {
      this.setState({hideButton: true, scrollPosition: window.scrollY})
    } else {
      this.setState({hideButton: false, scrollPosition: window.scrollY})
    }
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
        /* makes it horizontally centered */
        transform: 'translateX(-50%)',
        transition: 'all 100ms linear',
        zIndex: 1,
      },
      show: {
        top: 0
      },
      hide: {
        top: -75
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

    const { base, show, hide, active, inactive } = styles;
    const { toggleNav } = this.props;

    return (
      <div
        style={[base, this.state.hideButton ? hide : show, this.props.navActive ? active : inactive]}
        onClick={this.handleClick}>
        {this.props.navActive ? <NavMenu toggleNav={toggleNav}/> : 'navigation'}
      </div>
    );
  }
}

export default Radium(NavButton);
