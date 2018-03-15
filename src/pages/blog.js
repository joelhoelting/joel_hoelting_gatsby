import React from 'react';

import PostCard from '../components/Post/PostCard';

export default function Index({ data }) {

  const { edges: posts } = data.allMarkdownRemark;

  const styles = {
    container: {
      maxWidth: '700px',
      margin: '0 auto 2em'
    }
  };

  return (
    <div style={styles.container}>
      {posts
        .map(({ node: post }) => {
          return (
            <PostCard post={post}/>
          );
        })}
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 280)
          frontmatter {
            published
            title
            path
            date(formatString: "MMMM DD, YYYY")
            description
          }
        }
      }
    }
  }
`;
