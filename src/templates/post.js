import React from 'react';
import Helmet from 'react-helmet';

import Bio from '../components/Bio';

export default function Template({data}) {
	const { markdownRemark: post } = data;
	// data.markdownRemark holds our post data

	return (
		<div>
			<h1 style={{textAlign: 'center'}}>{post.frontmatter.title}</h1>
			<h4 style={{textAlign: 'center', marginBottom: '3em'}}>{post.frontmatter.date}</h4>
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
