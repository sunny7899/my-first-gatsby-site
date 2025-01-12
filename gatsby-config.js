module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My Gatsby Site",
  },
  plugins: ["gatsby-plugin-gatsby-cloud",
  "gatsby-plugin-image",
  "gatsby-plugin-sharp",
`gatsby-plugin-react-helmet`,

// get post from local filesystem
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: `blog`,
      path: `${__dirname}/blog`,
    }
  },
  {resolve: "gatsby-plugin-mdx",
  options: {
    gatsbyRemarkPlugins: [
      {
        resolve: `gatsby-remark-images`,
        options: {
          maxWidth: 1200,
        },
      },
    ],
    extensions: [`.mdx`, `.md`],
  },
},
  "gatsby-transformer-sharp"
],
};
