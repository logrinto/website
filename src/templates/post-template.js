import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Back from "../components/Back";
import PostTemplateDetails from "../components/PostTemplateDetails";
import "./style.scss";

class PostTemplate extends React.Component {
  render() {
    const { title, subtitle } = this.props.data.site.siteMetadata;
    const post = this.props.data.markdownRemark;

    let description;
    if (post.frontmatter.description !== null) {
      description = post.frontmatter.description;
    } else {
      description = subtitle;
    }

    return (
      <div className="layout">
        <div className="layout__inner">
          <Helmet>
            <title>{`${post.frontmatter.title} - ${title}`}</title>
            <meta name="description" content={description} />
          </Helmet>
          <Back />
          <PostTemplateDetails {...this.props} />
        </div>
      </div>
    );
  }
}

PostTemplate.propTypes = {
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

export default PostTemplate;

//eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        subtitle
      }
      ...postTemplateDetailsFragment
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      ...postTemplateDetailsMdFragment
      frontmatter {
        title
        description
      }
    }
  }
`;
