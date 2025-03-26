import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';

import { withErrorBoundary } from '@/components/ErrorBoundary';
import { PrivateRoute } from '@/components/PrivateRoute';
import { Header } from '@/components/Header';
import { withAuth } from '@/hocs/withAuth';
import { AppState } from '@/store';

import { routes } from './routes';

const App: React.FC = () => {
  const { isAuth } = useSelector((state: AppState) => state.user, shallowEqual);

  console.log('app', isAuth);
  return (
    <Router>
        <div>s</div>
      <Header />
      <main className="container mx-auto px-4 max-w-screen-xl">
        <Switch>
          {routes.map(({ path, component, isPrivate, ...rest }) => {
            const RouteComponent = isPrivate ? PrivateRoute : Route;
            // const { isAuthorized } = useAuth();?

            return (
              <RouteComponent
                key={path}
                path={path}
                isAuthorized={isAuth}
                component={withErrorBoundary(component as any)}
                {...rest}
              />
            );
          })}
        </Switch>
      </main>
    </Router>
  );
};

const withAuthApp = withAuth(App);

export { withAuthApp as App };
// export { App };
