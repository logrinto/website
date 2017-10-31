import React from 'react';
import Navigation from '../components/Navigation';
import Sidebar from '../components/Sidebar';

class NotFoundRoute extends React.Component {
  render() {
    return (
      <div className="layout">
        <div className="layout__inner">
          <Navigation {...this.props} />
          <div className="content">
            <div className="content__inner">
              <div className="page">
                <h1 className="page__title">NOT FOUND</h1>
                <div className="page__body">
                  <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
                </div>
              </div>
            </div>
          </div>
          <Sidebar {...this.props} />
        </div>
      </div>
    );
  }
}

export default NotFoundRoute;
export const pageQuery = graphql`
  query NotFoundQuery {
    site {
      ...navigationFragment
      ...sidebarFragment
    }
  }
`;
