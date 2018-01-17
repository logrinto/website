import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Navigation from '../components/Navigation';
import Sidebar from '../components/Sidebar';
import TagTemplateDetails from '../components/TagTemplateDetails';
import './style.scss';

class TagTemplate extends React.Component {
  render() {
    const { title } = this.props.data.site.siteMetadata;
    const { tag } = this.props.pathContext;

    return (
      <div className="layout">
        <div className="layout__inner">
          <Helmet title={`Artikel mit dem Tag «${tag}» - ${title}`} />
          <Navigation {...this.props} />
          <TagTemplateDetails {...this.props} />
          <Sidebar {...this.props} />
        </div>
      </div>
    );
  }
}

TagTemplate.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired
      })
    })
  }),
  pathContext: PropTypes.shape({
    tag: PropTypes.string.isRequired
  })
};

export default TagTemplate;

export const pageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
      ...navigationFragment
      ...sidebarFragment
    }
    allMarkdownRemark(
        limit: 1000,
        filter: { frontmatter: { tags: { in: [$tag] }, layout: { eq: "post" }, draft: { ne: true } } },
        sort: { order: DESC, fields: [frontmatter___date] }
      ){
      edges {
        node {
          ...postFragment
        }
      }
    }
  }
`;
