module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My Gatsby Site",
  },
  plugins: ["gatsby-plugin-gatsby-cloud",
  "gatsby-plugin-image",
  "gatsby-plugin-sharp",


// get post from local filesystem
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: `blog`,
      path: `${__dirname}/blog`,
    }
  },
  "gatsby-plugin-mdx",
  "gatsby-transformer-sharp"
],
};
