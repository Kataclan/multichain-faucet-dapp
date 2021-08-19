import React, { lazy } from 'react';
import { Navigate, BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { useAuth } from 'contexts';
import { useEagerConnect } from 'hooks';
import { ResetCSS } from 'ui';
import { LandingLayout, GlobalStyle, PageLoader, SuspenseWithChunkError } from 'components';

const Landing = lazy(() => import('./views/Landing'));
const NotFound = lazy(() => import('./views/NotFound'));

const App: React.FC = (): JSX.Element => {
  const landingRoutes = {
    path: '/',
    element: <LandingLayout />,
    children: [
      { path: '*', element: <Navigate to="/404" /> },
      { path: '/', element: <Landing /> },
      { path: '404', element: <NotFound /> }
    ]
  };

  const routing = useRoutes([landingRoutes]);
  return routing;
};

const AppWrapper: React.FC = (): JSX.Element => {
  useEagerConnect();
  const { initialized } = useAuth();
  return (
    <Router>
      <ResetCSS />
      <GlobalStyle />
      <SuspenseWithChunkError fallback={<PageLoader />}>
        {initialized ? <App /> : <PageLoader />}
      </SuspenseWithChunkError>
    </Router>
  );
};

export default AppWrapper;
