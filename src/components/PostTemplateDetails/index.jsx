import React from "react";
const _ = require("lodash");
import PropTypes from "prop-types";
import Link from "gatsby-link";
import moment from "moment";
import Img from "gatsby-image";
import PostHeader from "../PostHeader";
import "moment/locale/de"; // without this like it didn't work
import "./style.scss";

moment.locale("de");

class PostTemplateDetails extends React.Component {
  render() {
    const { subtitle, author } = this.props.data.site.siteMetadata;

    const post = this.props.data.markdownRemark;
    const words = post.wordCount.words;

    // https://help.medium.com/hc/en-us/articles/214991667-Read-time
    // http://iovs.arvojournals.org/article.aspx?articleid=2166061
    // german: words: 179, Characters: 920
    const avgWPM = 179;
    const timeToRead = Math.round(words / avgWPM) || 1;

    const tags = post.fields.tagSlugs;

    const tagsBlock = (
      <ul className="post-single__tags-list">
        {tags.map((tag, i) => (
          <li className="post-single__tags-list-item" key={tag}>
            <Link to={tag} className="post-single__tags-list-item-link">
              {post.frontmatter.tags[i]}
            </Link>
          </li>
        ))}
      </ul>
    );

    //
    const categorySlug = `/categories/${_.kebabCase(post.frontmatter.category)}/`;

    return (
      <div className="post-single">
        <div className="post-single__inner">
          <PostHeader
            featuredImage={post.frontmatter.featuredImage}
            title={post.frontmatter.title}
          />

          <h1>{post.frontmatter.title}</h1>

          <div className="post-single__meta">
            <small>
              ~{timeToRead && (timeToRead || 1)}&nbsp;min
              <span className="post-single__meta-dot"> · </span>
              {post.frontmatter.author}
              <span className="post-single__meta-dot"> · </span>
              {moment(post.frontmatter.date).format("DD. MMMM YYYY").replace(/ /g, "\u00a0")}
            </small>
          </div>

          <div className="post-single__lead">
            <p>{post.frontmatter.description}</p>
          </div>

          <div className="post-single__body" dangerouslySetInnerHTML={{ __html: post.html }} />

          <div className="post-single__footer">
            <hr />
            <p>Tags</p>
            <div className="post-single__tags">{tagsBlock}</div>
            <p className="post-single__footer-text">
              {subtitle}
              <a href={author.twitter} target="_blank" rel="noopener noreferrer">
                <br /> <strong>{author.name}</strong> on Twitter
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

PostTemplateDetails.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        subtitle: PropTypes.string.isRequired,
        author: PropTypes.object.isRequired
      })
    }),
    markdownRemark: PropTypes.object.isRequired
  })
};

export default PostTemplateDetails;

//eslint-disable-next-line no-undef
export const postTemplateDetailsFragment = graphql`
  fragment postTemplateDetailsFragment on Site {
    siteMetadata {
      subtitle
      author {
        name
        twitter
      }
    }
  }

  fragment postTemplateDetailsMdFragment on MarkdownRemark {
    id
    html
    fields {
      tagSlugs
    }
    frontmatter {
      title
      author
      category
      tags
      date
      description
      featuredImage {
        childImageSharp {
          sizes(maxWidth: 3000) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
    wordCount {
      words
    }
  }
`;
