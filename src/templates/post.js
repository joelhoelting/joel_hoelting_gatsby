import React from 'react';
import Helmet from 'react-helmet';

export default function Template({data}) {
	const { markdownRemark: post } = data;
	// data.markdownRemark holds our post data

	return (
		<div>
			<h1>{post.frontmatter.title}</h1>
			<h2>{post.frontmatter.date}</h2>
			<div dangerouslySetInnerHTML={{__html: post.html}} />
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
