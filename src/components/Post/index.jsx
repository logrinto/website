import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import moment from 'moment';
import './style.scss';

class Post extends React.Component {
  render() {
    const data = this.props.data;
    const post = {
      title: data.node.frontmatter.title,
      slug: data.node.fields.slug,
      description: data.node.frontmatter.description,
      date: data.node.frontmatter.date,
      category: data.node.frontmatter.category,
      categorySlug: data.node.fields.categorySlug
    };

    return (
      <div className="post">
        <h2 className="post__title">
          <Link className="post__title-link" to={post.slug}>{post.title}</Link>
        </h2>
        <div className="post__meta">
          <time className="post__meta-time" dateTime={moment(post.date).format('MMMM D, YYYY')}>
            {moment(post.date).format('MMMM YYYY')}
          </time>
          <span className="post__meta-divider" />
          <span className="post__meta-category" key={post.categorySlug}>
            <Link to={post.categorySlug} className="post__meta-category-link">
              {post.category}
            </Link>
          </span>
        </div>
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
