import React, { Component } from 'react';
import Link, { navigateTo } from 'gatsby-link';
import Radium from 'radium';
import Waypoint from 'react-waypoint';

class PostCard extends Component {
  constructor() {
    super();

    this.state = {
      visible: false
    };
  }

  handleEnter = () => {
    console.log(this)
    this.setState({ visible: true})
  }

  render() {
    const styles = {
      post: {
        margin: '1em auto',
        boxShadow: '1px 1px 5px #000',
        padding: '2em',
        transition: 'transform 200ms ease, opacity 1s ease, right 500ms ease',
        cursor: 'pointer',
        borderRadius: '2px',
        transform: 'scale(.95)',
        position: 'relative',
        '@media (min-width: 700px)': {
          ':hover': {
            transform: 'scale(1.0)',
          }
        },
      },
      invisible: {
        opacity: 0,
        right: '500px'
      },
      visible: {
        opacity: 1,
        right: 0
      },
      link: {
        color: '#24255d',
        textDecoration: 'none'
      }
    };

    const { post, visible, invisible, link } = styles;

    return (
      <div style={[post, this.state.visible ? visible : invisible]} key={this.props.post.id} onClick={() => navigateTo(this.props.post.frontmatter.path)}>
        <Waypoint onEnter={this.handleEnter} />
        <h1>
          <Link style={link} key={this.props.post.id} to={this.props.post.frontmatter.path}>{this.props.post.frontmatter.title}</Link>
        </h1>
        <h3>{this.props.post.frontmatter.date}</h3>
        <h4>{this.props.post.excerpt}</h4>

      </div>
    );
  }
}

export default Radium(PostCard);
