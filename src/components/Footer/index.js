import React from 'react';
import Radium from 'radium';

// Icons
import email_png from './icons/email.png';
import github_png from './icons/github.png';
import linkedin_png from './icons/linkedin.png';
import stackoverflow_png from './icons/stackoverflow.png';

const styles = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  height: '100px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 999,
  icon: {
    height: '40px',
    width: '40px',
    margin: '0 10px',
    '@media (min-width: 700px)': {
      height: '50px',
      width: '50px',
      margin: '0 20px'
    }
  }
};

const fadeIcons = Radium.keyframes({
  '0%': {
    opacity: 0,
  },
  '50%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  }
});

const animations = {
  links: {
    opacity: 0,
    animation: 'x 1s ease 2s forwards',
    animationName: fadeIcons,
  }
};

const icons = [
  {
    data: email_png,
    string: 'Email',
    url: 'mailto:joelhoelting@protonmail.com'
  },
  {
    data: github_png,
    string: 'Github',
    url: 'https://github.com/joelhoelting'
  },
  {
    data: linkedin_png,
    string: 'Linkedin',
    url: 'https://www.linkedin.com/in/joel-hoelting/'
  },
  {
    data: stackoverflow_png,
    string: 'Stack Overflow',
    url: 'https://stackoverflow.com/users/6347891/joel-hoelting'
  },
];

const mapIcons = icons.map((icon, index) => (
  <a style={animations.links} key={index} href={icon.url} target="_blank">
    <img style={styles.icon} key={index} src={icon.data} alt={icon.string} />
  </a>
));

const Footer = () => (
 <div style={styles}>
  {mapIcons}
 </div>
);

export default Radium(Footer);
