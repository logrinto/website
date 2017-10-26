// @todo fragments to components
// @body Place the fragments right to the components.

export const siteMetadataMenuFragment = graphql`
  fragment siteMetadataMenuFragment on Site {
    siteMetadata {
      menu {
        label
        path
      }
    }
  }
`;

export const siteMetadataFragment = graphql`

fragment siteMetadataFragment on Site {
  siteMetadata {
    url
    title
    subtitle
    copyright
    author {
      name
      email
      instagram
      twitter
      github
    }
  }
}

`;
