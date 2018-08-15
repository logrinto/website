module.exports = {
  pathPrefix: "/website",
  siteMetadata: {
    url: "https://logrinto.ch",
    title: "Logrinto Blog",
    subtitle: "Blog zum Interaction Designer an der Schule für Gestaltung Zürich",
    copyright: "CC-BY-SA 4.0",
    menu: [
      {
        label: "Home",
        path: "/"
      },
      {
        label: "Über uns",
        path: "/ueber-uns/"
      },
      {
        label: "Kontakt",
        path: "/kontakt/"
      }
    ],
    author: {
      name: "Logrinto",
      email: "info@logrinto.ch",
      instagram: "https://www.instagram.com/logrinto/",
      twitter: "https://twitter.com/logrinto",
      github: "https://github.com/logrinto/"
    }
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
          {
            site {
              siteMetadata {
                url
                title
                subtitle
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.edges.map(edge =>
                Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.description,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.url + edge.node.fields.slug,
                  guid: site.siteMetadata.url + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }]
                })
              ),
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
                ) {
                  edges {
                    node {
                      html
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        date
                        layout
                        draft
                        description
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml"
          }
        ]
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 3000,
              linkImagesToOriginal: false
            }
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1.0725rem"
            }
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants"
        ]
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: ""
      }
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
            {
              site {
                siteMetadata {
                  url
                }
              }
              allSitePage(
                filter: {
                  path: { regex: "/^(?!/404/|/404.html|/dev-404-page/)/" }
                }
              ) {
                edges {
                  node {
                    path
                  }
                }
              }
          }`,
        output: "/sitemap.xml",
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.url + edge.node.path,
              changefreq: "daily",
              priority: 0.7
            };
          })
      }
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss-sass"
  ]
};
