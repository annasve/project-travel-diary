import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PlacesPage } from './pages/PlacesPage';
import { DashboardPage } from './pages/DashboardPage';

import './global.css';

import logo2Url from './pages/HomePage/img/logo-36px.png';
import logoRed from './pages/HomePage/img/logo-red-36px.png';

const App = () => {
  const location = useLocation();
  const linkClass = (link) => {
    if (link === location.pathname) {
      return 'navlink navlink-selected';
    } else {
      return 'navlink';
    }
  };

  const headerClass = () => {
    if (location.pathname === '/places') {
      return 'places-color';
    } else {
      return '';
    }
  };

  const isRedLogo = () => {
    return !location.pathname.includes('places');
  };

  return (
    <div className="container">
      <header className={headerClass()}>
        <div className="logo__container">
          {isRedLogo() ? (
            <img src={logoRed} alt="logo as image" />
          ) : (
            <img src={logo2Url} alt="logo as image" />
          )}
        </div>
        <nav className="navbar caudex">
          <Link to="/" className={linkClass('/')}>
            home
          </Link>
          <Link to="/places" className={linkClass('/places')}>
            places
          </Link>
          <Link to="/dashboard" className={linkClass('/dashboard')}>
            dashboard
          </Link>
          <Link to="/trip" className={linkClass('/trip')}>
            add your trip
          </Link>
        </nav>
      </header>

      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <HomePage /> },
      { path: '/places', element: <PlacesPage /> },
      { path: '/dashboard', element: <DashboardPage modal={false} /> },
      { path: '/trip', element: <DashboardPage modal={true} /> },
    ],
  },
  ,
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
