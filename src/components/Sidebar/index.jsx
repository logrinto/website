import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import Link from 'gatsby-link';
import Links from '../Links';
import profilePic from '../../assets/img/logo/github_icon.svg';
import './style.scss';

class Sidebar extends React.Component {
  render() {
    const { location } = this.props;
    const { author, subtitle, copyright } = this.props.data.site.siteMetadata;
    const isHomePage = get(location, 'pathname', '/') === '/';

    /* eslint-disable jsx-a11y/img-redundant-alt*/
    const authorBlock = (
      <div>
        { isHomePage ? (
          <h1 className="sidebar__author-title">
            <Link className="sidebar__author-title-link" to="/">{author.name}</Link>
          </h1>
        ) :
          <h2 className="sidebar__author-title">
            <Link className="sidebar__author-title-link" to="/">{author.name}</Link>
          </h2>
        }
        <p className="sidebar__author-subtitle">{subtitle}</p>
      
        <Link to="/">
          <img
            src={profilePic}
            className="sidebar__author-photo"
            alt={author.name}
          />
        </Link>
      </div>
    );
    /* eslint-enable jsx-a11y/img-redundant-alt*/

    return (
      <div className="sidebar">
        <div className="sidebar__inner">
          <div className="sidebar__author">
            {authorBlock}
          </div>
          <div>
            <Links data={author} />
            <p className="sidebar__copyright">
              {copyright}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

Sidebar.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        subtitle: PropTypes.string.isRequired,
        author: PropTypes.object.isRequired,
        copyright: PropTypes.string.isRequired
      })
    })
  }),
  location: PropTypes.object
};

export default Sidebar;


export const sidebarFragment = graphql`
  fragment sidebarFragment on Site {
    siteMetadata {
      subtitle
      copyright
      author {
        name
        email
        instagram
        twitter
        github
      }
    }
  }
`;
