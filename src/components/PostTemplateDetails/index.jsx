import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import moment from 'moment';
import 'moment/locale/de';  // without this like it didn't work
import './style.scss';

moment.locale('de');

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

    const homeBlock = (
      <div>
        <Link className="post-single__home-button" to="/">Home</Link>
      </div>
    );

    const tagsBlock = (
      <ul className="post-single__tags-list">
        {tags.map((tag, i) =>
          <li className="post-single__tags-list-item" key={tag}>
            <Link to={tag} className="post-single__tags-list-item-link">
              {post.frontmatter.tags[i]}
            </Link>
          </li>
        )}
      </ul>
    );

    //

    return (
      <div className="post-single">

        {homeBlock}

        <div className="post-single__inner">
          <h1 className="post-single__title">
            {post.frontmatter.title}
          </h1>
          <div className="post-single__date">
            <small>~{timeToRead && (timeToRead || 1)}&nbsp;min&nbsp;&nbsp;·&nbsp;&nbsp;{post.frontmatter.author}&nbsp;&nbsp;·&nbsp;&nbsp;{moment(post.frontmatter.date).format('DD. MMMM YYYY')}</small>
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
`;
