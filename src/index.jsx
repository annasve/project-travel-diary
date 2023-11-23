import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PlacesPage } from './pages/PlacesPage';
import { DashboardPage } from './pages/DashboardPage';

import './global.css';

import logo2Url from './pages/HomePage/img/logo-36px.png';

const App = () => {
  return (
    <div className="container">
      <header>
        <div className="logo__container">
          <img src={logo2Url} alt="logo as image" />
        </div>
        <nav className="navbar caudex">
          <Link to="/" className="navlink">
            home
          </Link>
          <Link to="/places" className="navlink">
            places
          </Link>
          <Link to="/dashboard" className="navlink">
            dashboard
          </Link>
          <Link to="/dashboard" className="navlink">
            map
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
      { path: '/home', element: <HomePage /> },
      { path: '/places', element: <PlacesPage /> },
      { path: '/dashboard', element: <DashboardPage /> },
    ],
  },
  ,
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
