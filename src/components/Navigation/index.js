import React, { Component } from 'react';

import NavButton from './NavButton';

class Navigation extends Component {
  constructor() {
    super();

    this.state = {
      navActive: false
    };
  }

  toggleNav() {
    const state = !this.state.navActive;
    this.setState({
      navActive: state
    });
  }

  render() {
    return (
      <div>
        <NavButton toggleNav={() => this.toggleNav()} navActive={this.state.navActive} />
      </div>
    );
  }
}

export default Navigation;
