const remark = require("remark")
const stripMarkdown = require("strip-markdown")

module.exports = {
  siteMetadata: {
    title: `Udesly University`,
    siteUrl: `https://www.udesly.com/`,
    repoUrl: `https://github.com/udesly-adapter/university/`,
    social: {
      twitter: ``,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#6F39F8`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/docs/shopify`,
        name: `shopify`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/docs/jamstack`,
        name: `jamstack`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/docs/wordpress`,
        name: `wordpress`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              // [Optional] The root of "media_folder" in your config.yml
              // Defaults to "static"
              staticFolderName: 'static',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              wrapperStyle: "text-align: center; margin: auto;"
            },
          },
          {
            resolve: `gatsby-remark-images-medium-zoom`, // Important!
            options: {},
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-autolink-headers`,
          `gatsby-plugin-catch-links`
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Udesly University`,
        short_name: `Udesly`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#6F39F8`,
        display: `minimal-ui`,
        icon: `src/images/udesly-favicon-black.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        globPatterns: ["**/*.{js,json,jpg,svg,html,css}"],
      },
    },
    {
      resolve: "custom-lunr-index",
      options: {
        // Lunr reference
        indexes: [
          ...["shopify", "jamstack", "wordpress", "ghost"].map(cms => ({
            name: cms,
            filterNodes: node => node.fields?.cms === cms,
          })),
        ],
        // Fields to be indexed
        fields: [
          { name: "title", store: true, attributes: { boost: 20 } },
          { name: "excerpt", store: true },
          { name: "content" },
          { name: "folder", store: true },
          { name: "url", store: true },
        ],

        // Nodes to be indexed
        resolvers: {
          // Index all `MarkdownRemark` nodes
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            excerpt: node => {
              const text = remark()
                .use(stripMarkdown)
                .processSync(node.rawMarkdownBody)

              const excerptLength = 140 // Hard coded excerpt length
              return String(text).substring(0, excerptLength) + "..."
            },
            content: node => node.rawMarkdownBody,
            folder: node => node.fields.sidebar.folder,
            url: node => node.fields.slug,
          },
        },
      },
    },
  ],
}
