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
        transform: 'scale(1)',
        boxShadow: '.125em .375em .3125em rgba(0, 0, 0, 0.5)',
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

  return (
    <div style={styles.base} onClick={() =>  window.open(props.url)}>
      <h3 style={styles.title}>{props.title}</h3>
      <img style={styles.image} src={props.image} />
      <h4>{props.description}</h4>
      <h6>{props.tools.join(' | ')}</h6>
    </div>
  );
};

export default Radium(ProjectCard);
