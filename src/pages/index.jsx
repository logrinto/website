import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Post from '../components/Post';
import Navigation from '../components/Navigation';
import Sidebar from '../components/Sidebar';

class IndexRoute extends React.Component {

  render() {
    const items = [];
    const { title, subtitle } = this.props.data.site.siteMetadata;
    const posts = this.props.data.allMarkdownRemark.edges;
    posts.forEach((post) => {
      items.push(
        <Post data={post} key={post.node.fields.slug} />
      );
    });

    return (
      <div className="layout">
        <div className="layout__inner">
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={subtitle} />
          </Helmet>
          <Navigation {...this.props} />
          <div className="content">
            <div className="content__inner">
              {items}
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
    allMarkdownRemark(
        limit: 1000,
        filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } },
        sort: { order: DESC, fields: [frontmatter___date] }
      ){
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
          }
        }
      }
    }
  }
`;
