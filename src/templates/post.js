import React from 'react';
import Helmet from 'react-helmet';

import Bio from '../components/Bio';

export default function Template({data}) {
	const { markdownRemark: post } = data;
	// data.markdownRemark holds our post data

	return (
		<div>
      <div style={{margin: '3em 0', textAlign: 'center'}}>
        <h1 style={{margin: '.5em'}}>{post.frontmatter.title}</h1>
  			<h4>{post.frontmatter.date}</h4>
      </div>
      <hr style={{margin: '3em 0'}} />
			<div dangerouslySetInnerHTML={{__html: post.html}} />
      <Bio />
		</div>
	)
}

export const postQuery = graphql`
	query BlogPostByPath($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path} }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				path
				title
			}
		}
	}
`;
