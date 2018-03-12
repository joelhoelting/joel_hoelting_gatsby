import React from 'react';
import Radium from 'radium';

const ProjectCard = (props) => {
  const styles = {
    base: {
      padding: '20px',
      borderRadius: '2px',
      boxShadow: '2px 6px 5px rgba(0, 0, 0, 0.5)',
      textDecoration: 'none',
      transform: 'scale(.95)',
      transition: 'all .2s ease-in-out',
      '@media (min-width: 700px)': {
        ':hover': {
          transform: 'scale(1.0)',
          boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)',
        }
      },
      '@media (max-width: 700px)': {
        transform: 'scale(1)',
      }
    },
    title: {
      textAlign: 'center',
      textTransform: 'uppercase',
    },
    image: {
      borderRadius: '5px'
    }
  };

  return (
    <a href={props.url} style={styles.base}>
      <h3 style={styles.title}>{props.title}</h3>
      <a href={props.url} target="_blank"><img style={styles.image} src={props.image} /></a>
      <h4>{props.description}</h4>
      <h6>{props.tools.join(' | ')}</h6>
    </a>
  );
};

export default Radium(ProjectCard);
