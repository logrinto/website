import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Post from "../components/Post";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";

class IndexRoute extends React.Component {
  render() {
    const { title, subtitle } = this.props.data.site.siteMetadata;
    const firstPost = this.props.data.firstPost.edges;
    const posts = this.props.data.allMarkdownRemark.edges;

    return (
      <div className="layout">
        <div className="layout__inner">
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={subtitle} />
          </Helmet>
          <Navigation {...this.props} />
          <div className="content-first">
            <div className="content-first-inner">
              <Post data={firstPost[0]} />
            </div>
          </div>
          <div className="content">
            <div className="content-inner">
              {posts.map(post => (
                <Post data={post} key={post.node.fields.slug} />
              ))}
            </div>
          </div>
          <Sidebar {...this.props} />
        </div>
      </div>
    );
  }
}

IndexRoute.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired
      })
    }),
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array.isRequired
    })
  })
};

export default IndexRoute;

//eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        subtitle
      }
      ...navigationFragment
      ...sidebarFragment
    }
    firstPost: allMarkdownRemark(
      limit: 1
      filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true }, hideInMenu: { ne: true } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          ...postFragment
        }
      }
    }
    allMarkdownRemark(
      limit: 1000
      skip: 1
      filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true }, hideInMenu: { ne: true } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          ...postFragment
        }
      }
    }
  }
`;
