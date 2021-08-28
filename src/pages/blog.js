import * as React from 'react'
import Layout from '../components/layout'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {/* <p>My cool posts will go in here</p> */}

      {/* <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul> */}

{
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            {/* <h2>{node.frontmatter.title}</h2> */}

            <h2>
              {/* <Link to={`/blog/${node.slug}`}> */}
              <Link to={`/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            
            <p>Posted: {node.frontmatter.date}</p>

            {/* <MDXRenderer>
              {node.body}
            </MDXRenderer> */}
          </article>
        ))
      }

    </Layout>
  )
}


// export const query = graphql`
//   query {
//     allFile {
//       nodes {
//         name
//       }
//     }
//   }
// `

// export const query = graphql`
//   query {
//     allMdx(sort: {fields: frontmatter___date, order: DESC}) {
//       nodes {
//         frontmatter {
//           date(formatString: "MMMM D, YYYY")
//           title
//         }
//         id
//         body
//       }
//     }
//   }
// `

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`
export default BlogPage