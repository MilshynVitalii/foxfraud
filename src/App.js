import React from 'react';
import {Route, Switch} from 'react-router-dom';

import routes from '@/router';

import {Header, Footer} from '@cmp';

function App() {
  const routesPage = routes.map((route) => {
    return <Route
      key={route.path}
      path={route.path}
      component={route.component}
      exact></Route>;
  });
  return (
    <>
      <Header/>
      <div className="content">
        <Switch>
          {routesPage}
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
