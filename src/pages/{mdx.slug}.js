import * as React from 'react'
import Layout from '../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image' // highlight-line

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image) // highlight-line

  return (
    // <Layout pageTitle="Super Cool Blog Posts">
    //   <p>My blog post contents will go here (eventually).</p>
    // </Layout>

    //  {/* highlight-start */}
     <Layout pageTitle={data.mdx.frontmatter.title}>

    

     <p>Posted: {data.mdx.frontmatter.date}</p>

         {/* highlight-start */}
    <GatsbyImage
      image={image}
      alt={data.mdx.frontmatter.hero_image_alt}
    />
    {/* highlight-end */}

    <p>
        Photo Credit:{" "}
        <a href={data.mdx.frontmatter.hero_image_credit_link}>
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>

      
     <MDXRenderer>
       {data.mdx.body}
     </MDXRenderer>
   {/* highlight-end */}
   </Layout>
  )
}

// highlight-start
export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")

        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }

      }
      body
    }
  }
`
// highlight-end
export default BlogPost