// React, Gatsby Core
import React, { Component } from 'react';
import Link from 'gatsby-link';
// Styling
import CSSTransitionGroup from 'react-addons-css-transition-group';
import Radium, { Style } from 'radium';
import './Navigation.scss';

const Hamburger = (props) => {
  function handleChange() {
    props.toggleNav();
  }

  return (
    <div
      style={{
        position: 'absolute',
        zIndex: 999,
      }}
      onClick={(event) => handleChange(event)}
    >
      <div id="hamburger" className={props.status ? 'active' : 'inactive'}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
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
          <Hamburger status={this.state.isOpen} toggleNav={this.toggleNav}/>
          <CSSTransitionGroup
            transitionName="toggleNav"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            <div
              style={{
                height: '100%',
                width: '100%',
                background: 'navy',
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
                    fontSize: '4rem'
                  }}
                />
                <li className="link first"><Link onClick={this.toggleNav} to="/blog">Blog</Link></li>
                <li className="link"><Link onClick={this.toggleNav} to="/portfolio">Portfolio</Link></li>
                <li className="link"><Link onClick={this.toggleNav} to="/about">Resume</Link></li>
              </ul>
            </div>
          </CSSTransitionGroup>
        </div>
      );
    } else {
      return (
        <div>
          <Hamburger status={this.state.isOpen} toggleNav={this.toggleNav}/>
          <CSSTransitionGroup
            transitionName="toggleNav"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}>
          </CSSTransitionGroup>
        </div>
      );
    }
  }
}

export default Radium(Navigation);
