import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import '../assets/styles/signalwerk.scss';

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Helmet defaultTitle="Blog Logrinto" />
        {children()}
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;
