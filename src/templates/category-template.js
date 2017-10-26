import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Navigation from '../components/Navigation';
import Sidebar from '../components/Sidebar';
import CategoryTemplateDetails from '../components/CategoryTemplateDetails';
import './style.scss';

class CategoryTemplate extends React.Component {
  render() {
    const { title } = this.props.data.site.siteMetadata;
    const { category } = this.props.pathContext;

    return (
      <div className="layout">
        <Helmet title={`${category} - ${title}`} />
        <Navigation {...this.props} />
        <CategoryTemplateDetails {...this.props} />
        <Sidebar {...this.props} />
      </div>
    );
  }
}

CategoryTemplate.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired
      })
    })
  }),
  pathContext: PropTypes.shape({
    category: PropTypes.string.isRequired
  })
};

export default CategoryTemplate;

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    site {
      ...siteMetadataFragment
      ...siteMetadataMenuFragment
    }
    allMarkdownRemark(
        limit: 1000,
        filter: { frontmatter: { category: { eq: $category }, layout: { eq: "post" }, draft: { ne: true } } },
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
