import React from 'react';
// import Link from 'gatsby-link'
import Logo from '../components/Logo';
import Video from '../components/Video';

class IndexPage extends React.Component {

  loadVideo() {
    let desktopLogo = document.querySelector('#desktop-logo');
    let mobileLogo = document.querySelector('#mobile-logo');
    let video = document.querySelector('video');

    setTimeout(function(){
      desktopLogo.classList.add('change-color');
      mobileLogo.classList.add('change-color');
      video.classList.add('fade-in');
      video.play();
    }, 2000);
  }

  componentDidMount() {
    window.addEventListener('load', this.loadVideo);
  }

  render() {
    return (
      <div className="flex-container">
        <Video />
        <Logo />
      </div>
    );
  }
}

export default IndexPage;
