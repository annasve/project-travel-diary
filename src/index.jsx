import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PlacesPage } from './pages/PlacesPage';
import { DashboardPage } from './pages/DashboardPage';

import './global.css';
import { DesktopHeader, MobileHeader } from './components/Header';
import { useEffect, useState } from 'react';

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth <= 700);
    });
  }, []);

  return (
    <div className="container">
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
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
      { path: '/dashboard', element: <DashboardPage /> },
    ],
  },
  ,
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
