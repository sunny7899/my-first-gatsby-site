
// filepath: /C:/demodata/git/my-first-gatsby-site/src/templates/blog-post.js
import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPost = ({ data }) => {
  const post = data.mdx
  return (
    <Layout pageTitle={post.frontmatter.title}>
      <p>{post.frontmatter.date}</p>
      <MDXRenderer>
        {post.body}
      </MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`

export default BlogPost