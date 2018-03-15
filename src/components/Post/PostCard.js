import React from 'react';
import Link, { navigateTo } from 'gatsby-link';
import Radium from 'radium';

const PostCard = (props) => {
  const styles = {
    post: {
      margin: '1em auto',
      boxShadow: '1px 1px 5px #000',
      padding: '2em',
      transform: 'scale(.95)',
      transition: 'transform 200ms ease',
      cursor: 'pointer',
      borderRadius: '2px',
      '@media (min-width: 700px)': {
        ':hover': {
          transform: 'scale(1.0)',
        }
      },
    },
    link: {
      color: '#24255d',
      textDecoration: 'none'
    }
  };

  const { post, link } = styles;

  return (
    <div style={post} key={props.post.id} onClick={() => navigateTo(props.post.frontmatter.path)}>
      <h1>
        <Link style={link} key={props.post.id} to={props.post.frontmatter.path}>{props.post.frontmatter.title}</Link>
      </h1>
      <h3>{props.post.frontmatter.date}</h3>
      <h4>{props.post.excerpt}</h4>
    </div>
  );
};

export default Radium(PostCard);
