// React, Gatsby Core
import React, { Component } from 'react';
import Link from 'gatsby-link';
// Styling
import CSSTransitionGroup from 'react-addons-css-transition-group';
import Radium, { Style } from 'radium';
import './Navigation.scss';

const NavMenu = (props) => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        background: '#24255d',
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
        <Style
          scopeSelector=".link"
          rules={{
            margin: '20px 0',
            fontSize: '5rem',
            fontFamily: 'Code Bold',
            textShadow: '2px 2px #000',
            a: {
              color:'#C60500'
            }
          }}
        />
        <li className="link"><Link onClick={props.toggleNav} to="/">Home</Link></li>
        <li className="link"><Link onClick={props.toggleNav} to="/blog">Blog</Link></li>
        <li className="link"><Link onClick={props.toggleNav} to="/portfolio">Portfolio</Link></li>
        <li className="link"><Link onClick={props.toggleNav} to="/resume">Resume</Link></li>
      </ul>
    </div>
  );
};

class Navigation extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    const state = !this.state.isOpen;
    this.setState({
      isOpen: state
    });
  }

  render() {
    if(this.state.isOpen){
      return (
        <div>
          <CSSTransitionGroup
            transitionName="toggleNav"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            <NavMenu toggleNav={this.toggleNav} />
          </CSSTransitionGroup>
        </div>
      );
    } else {
      return (
        <div>
          <CSSTransitionGroup
            transitionName="toggleNav"
            transitionEnterTimeout={600}
            transitionLeaveTimeout={600}>
          </CSSTransitionGroup>
        </div>
      );
    }
  }
}

export default Radium(Navigation);
