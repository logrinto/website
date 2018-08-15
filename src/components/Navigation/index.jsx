import React from "react";
import PropTypes from "prop-types";
import Menu from "../Menu";
import "./style.scss";

// <svg width="24" height="12" viewBox="0 0 24 12" >
//   <title>icon-menu icon</title>
//   <path fillRule="evenodd" clipRule="evenodd" d="M12 0H0v2h24V0zM0 5v2h24V5H0zm0 7h24v-2H0v2z" />
// </svg>

class Navigation extends React.Component {
  state = { open: false };

  onItemClick = () => {
    this.setState({ open: !this.state.open });
  };

  render = () => {
    const { onItemClick } = this;
    return (
      <div className="navigation">
        <div className="navigation__inner">
          {this.props.data && (
            <div className={`navigation__menu ${this.state.open ? "open" : "close"}`}>
              <div>
                <Menu data={this.props.data.site.siteMetadata.menu} />
              </div>
            </div>
          )}

          <button
            onClick={onItemClick}
            className="navigation__toggle"
            aria-controls="site-navigation"
            aria-expanded="true"
            aria-label="Menu"
          >
            <span className={`navigation__hamburger ${this.state.open ? "open" : "close"}`}>
              <span className="navigation__label hidden">Hauptmenü</span>
            </span>
          </button>
        </div>
      </div>
    );
  };
}

Navigation.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        menu: PropTypes.array.isRequired
      })
    })
  })
};

export default Navigation;

//eslint-disable-next-line no-undef
export const navigationFragment = graphql`
  fragment navigationFragment on Site {
    siteMetadata {
      menu {
        label
        path
      }
    }
  }
`;
