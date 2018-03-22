import React from 'react';
import Radium from 'radium';

const ProjectCard = (props) => {
  const styles = {
    base: {
      padding: '1em',
      borderRadius: '.1em',
      boxShadow: '.125em .125em .3125em rgba(0, 0, 0, 0.5)',
      textDecoration: 'none',
      transform: 'scale(.95)',
      transition: 'all .2s ease-in-out',
      cursor: 'pointer',
      '@media (min-width: 700px)': {
        ':hover': {
          transform: 'scale(1.0)',
          boxShadow: '.125em .125em .625em rgba(0, 0, 0, 0.5)',
        }
      },
      '@media (max-width: 700px)': {
        transform: 'scale(1)'
      }
    },
    title: {
      textAlign: 'center',
      textTransform: 'uppercase',
    },
    image: {
      borderRadius: '.2em'
    }
  };

  const { url, title, image, description, tools, testing } = props.project;

  return (
    <div style={styles.base} onClick={() =>  window.open(url)}>
      <h3 style={styles.title}>{title}</h3>
      <img style={styles.image} src={image} />
      <h4>{description}</h4>
      <h6 style={{margin: 0}}>{tools.join(', ')}</h6>
      <h6>{ testing ? 'TDD: ' + testing.join(', ') : '' }</h6>
    </div>
  );
};

export default Radium(ProjectCard);
