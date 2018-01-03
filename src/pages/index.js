import React from 'react';
// import Link from 'gatsby-link'
import Logo from '../components/Logo';

class IndexPage extends React.Component {
  // constructor() {
  //   super();
  //
  //   this.handleKeyPress = this.handleKeyPress.bind(this);
  //
  //   this.state = {
  //     input: [],
  //   };
  // }

  // handleKeyPress(event) {
  //   const secretCode = 'jghjgh';
  //   const input = [...this.state.input];
  //   input.push(event.key);
  //   input.splice(-secretCode.length - 1, input.length - secretCode.length);
  //
  //   if (input.join('').includes(secretCode)) {
  //     console.log('DING DING!');
  //   }
  //   this.setState({input}, function() {
  //     console.log(this.state.input);
  //   });
  // }

  // componentDidMount() {
  //   window.addEventListener('keydown', this.handleKeyPress);
  // }

  render() {
    return (
      <div className="flex-container">
        <Logo />
      </div>
    );
  }
}

export default IndexPage;
