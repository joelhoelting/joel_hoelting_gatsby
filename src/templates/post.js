import React from 'react';
import Helmet from 'react-helmet';

export default function Template({data}) {
	const { markdownRemark } = data; 
	// data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;

	return (
		<div>
			<h1>{frontmatter.title}</h1>
			<h2>{frontmatter.date}</h2>
			<div dangerouslySetInnerHTML={{__html: html}} />
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