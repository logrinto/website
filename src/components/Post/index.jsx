import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import moment from 'moment';
import Img from 'gatsby-image';
import './style.scss';

class Post extends React.Component {
  render() {
    const data = this.props.data;
    const post = {
      title: data.node.frontmatter.title,
      slug: data.node.fields.slug,
      description: data.node.frontmatter.description,
      featuredImage: data.node.frontmatter.featuredImage,
      date: data.node.frontmatter.date,
      category: data.node.frontmatter.category,
      categorySlug: data.node.fields.categorySlug
    };

    return (
      <div className="post">

        <Link to={post.slug}>
          <h2 className="post__title">
            <span className="post__title-link">{post.title}</span>
          </h2>
        </Link>

        <div className="post__meta">
          <time className="post__meta-time" dateTime={moment(post.date).format('MMMM D, YYYY')}>
            {moment(post.date).format('MMMM YYYY')}
          </time>
          <span className="post__meta-divider" />
          {/* <Link to={post.categorySlug}> */}
            <span className="post__meta-category" key={post.categorySlug}>
              {post.category}
            </span>
          {/* </Link> */}
        </div>

        {post.featuredImage && (<Link to={post.slug}>
          <div className="post__img">
            <Img sizes={post.featuredImage.childImageSharp.sizes} fadeIn={false} />
          </div>
        </Link>)}

        <div className="post__description">
          <p>{post.description}</p>
        </div>
        <Link className="post__readmore" to={post.slug}>→ Weiterlesen</Link>
      </div>
    );
  }
}

Post.propTypes = {
  data: PropTypes.object.isRequired
};

export default Post;

export const postFragment = graphql`
  fragment postFragment on MarkdownRemark {
    fields {
      slug
      categorySlug
    }
    frontmatter {
      title
      date
      category
      description

      featuredImage {
        childImageSharp{
            sizes(maxWidth: 800) {
              ...GatsbyImageSharpSizes
            }
        }
      }
    }
  }
`;
