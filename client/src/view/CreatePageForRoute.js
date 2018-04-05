import React, {Component} from 'react';

function CreatePageForRoute(MainPanel, route, routeResolver) {

  const rv = class RoutePage extends Component {

    render() {
      const pageContent = routeResolver(route, this.props);

      return (
        <MainPanel>
          {pageContent}
        </MainPanel>
      );
    }

  };

  return rv;
}

export default CreatePageForRoute;
