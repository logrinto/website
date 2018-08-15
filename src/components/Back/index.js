import React from "react";
import PropTypes from "prop-types";
import { navigateTo } from "gatsby-link";

import "../Navigation/style.scss";

class Back extends React.Component {
  onItemClick = () => {
    navigateTo("/");
  };

  render = () => {
    const { onItemClick } = this;
    return (
      <div className="navigation">
        <div className="navigation__inner">
          <button
            onClick={onItemClick}
            className="navigation__toggle"
            aria-controls="site-navigation"
            aria-expanded="true"
            aria-label="Menu"
          >
            <span className="navigation__hamburger back">
              <span className="navigation__label">Home</span>
            </span>
          </button>
        </div>
      </div>
    );
  };
}

Back.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        menu: PropTypes.array.isRequired
      })
    })
  })
};

export default Back;
