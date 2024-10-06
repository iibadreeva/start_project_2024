import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { withErrorBoundary } from '@/components/ErrorBoundary';
import { PrivateRoute } from '@/components/PrivateRoute';
import { Header } from '@/components/Header';
import { routes } from './routes';

export const useAuth = () => {
  const [isAuthorized, setAuth] = useState(true);

  const signIn = () => {
    setAuth(true);
  };

  return { isAuthorized, signIn };
};

const App: React.FC = () => (
  <Router>
    <Header />
    <main className="container mx-auto px-4 max-w-screen-xl">
      <Switch>
        {routes.map(({ path, component, isPrivate, ...rest }) => {
          const RouteComponent = isPrivate ? PrivateRoute : Route;
          const { isAuthorized } = useAuth();

          return (
            <RouteComponent
              key={path}
              path={path}
              isAuthorized={isAuthorized}
              component={withErrorBoundary(component as any)}
              {...rest}
            />
          );
        })}
      </Switch>
    </main>
  </Router>
);

export { App };
