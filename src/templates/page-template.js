import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import PageTemplateDetails from "../components/PageTemplateDetails";
import "./style.scss";

class PageTemplate extends React.Component {
  render() {
    const { title, subtitle } = this.props.data.site.siteMetadata;
    const page = this.props.data.markdownRemark;

    let description;
    if (page.frontmatter.description !== null) {
      description = page.frontmatter.description;
    } else {
      description = subtitle;
    }

    return (
      <div className="layout">
        <div className="layout__inner">
          <Helmet>
            <title>{`${page.frontmatter.title} - ${title}`}</title>
            <meta name="description" content={description} />
          </Helmet>
          <Navigation {...this.props} />
          <PageTemplateDetails {...this.props} />
          <Sidebar {...this.props} />
        </div>
      </div>
    );
  }
}

PageTemplate.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired
      })
    }),
    markdownRemark: PropTypes.object.isRequired
  })
};

export default PageTemplate;

//eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
      ...navigationFragment
      ...sidebarFragment
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        description
      }
    }
  }
`;
