import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import '../../assets/fonts/fontello-771c82e0/css/fontello.css';

class Links extends React.Component {
  render() {
    const author = this.props.data;
    const links = [

        { id: 1, link: author.instagram, className: 'icon-instagram' },
        { id: 2, link: author.twitter, className: 'icon-twitter' },
        { id: 3, link: author.github, className: 'icon-github' }
    ];

    return (
      <div className="links">
        <ul className="links__list">
          {links.map(item => <li key={item.id} className="links__list-item">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <i className={item.className} />
            </a>
          </li>)}
          <li className="links__list-item">
            <a href={`mailto:${author.email}`}>
              <i className="icon-mail" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

Links.propTypes = {
  data: PropTypes.object.isRequired
};

export default Links;
