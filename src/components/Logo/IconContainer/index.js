import React from 'react';

// Icons
import email_svg from './icons/email.svg';
import github_svg from './icons/github.svg';
import linkedin_svg from './icons/linkedin.svg';
import stackoverflow_svg from './icons/stackoverflow.svg';
import email_png from './icons/email.png';
import github_png from './icons/github.png';
import linkedin_png from './icons/linkedin.png';
import stackoverflow_png from './icons/stackoverflow.png';

const styles = {
  height: '5vh',
  width: '70%',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'aqua',
  icon: {
    height: '100%',
    margin: '0 2rem',
    cursor: 'pointer'
  }
};

const icons = [
  {
    data: email_svg,
    fallback: email_png,
    string: 'Email',
    url: 'mailto:joelhoelting@protonmail.com'
  },
  {
    data: github_svg,
    fallback: github_png,
    string: 'Github',
    url: 'https://github.com/joelhoelting'
  },
  {
    data: linkedin_svg,
    fallback: linkedin_png,
    string: 'Linkedin',
    url: 'https://www.linkedin.com/in/joel-hoelting/'
  },
  {
    data: stackoverflow_svg,
    fallback: stackoverflow_png,
    string: 'Stack Overflow',
    url: 'https://stackoverflow.com/users/6347891/joel-hoelting'
  },
];

const mapIcons = icons.map((icon, index) => (
  <object style={styles.icon} key={index} data={icon.data} type="image/svg+xml">
    <img src={icon.fallback} />
  </object>
));

const IconContainer = () => (
 <div style={styles}>
  {mapIcons}
 </div>
);

export default IconContainer;
