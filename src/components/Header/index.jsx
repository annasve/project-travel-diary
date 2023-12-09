import { Link, useLocation } from 'react-router-dom';
import './style.css';

import logo2Url from './img/logo-36px.png';
import logoRed from './img/logo-red-36px.png';

export const DesktopHeader = () => {
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
    <header className={headerClass()}>
      <div className="logo__container">
        <Link to="/">
          {isRedLogo() ? (
            <img src={logoRed} alt="logo as image" />
          ) : (
            <img src={logo2Url} alt="logo as image" />
          )}
        </Link>
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
        <Link
          id="add-trip"
          to="/dashboard#add-trip"
          className={linkClass('/trip')}
        >
          add your trip
        </Link>
      </nav>
    </header>
  );
};

export const MobileHeader = () => {
  const location = useLocation();
  const linkClass = (link) => {
    if (link === location.pathname) {
      return 'navlink navlink-selected';
    } else {
      return 'navlink';
    }
  };

  const barClass = () => {
    if (location.pathname === '/places') {
      return 'bar-places';
    } else {
      return '';
    }
  };

  const menuBgClass = () => {
    if (location.pathname === '/places') {
      return 'manuBg-places';
    } else {
      return '';
    }
  };

  const navClass = () => {
    if (location.pathname === '/places') {
      return 'nav-places';
    } else {
      return '';
    }
  };

  const isRedLogo = () => {
    return !location.pathname.includes('places');
  };

  const menuOnClick = () => {
    document.getElementById('menu-bar').classList.toggle('change');
    document.getElementById('nav').classList.toggle('change');
    document.getElementById('menu-bg').classList.toggle('change-bg');
  };
  return (
    <>
      <div id="menu">
        <div id="menu-bar" onClick={menuOnClick}>
          <div id="bar1" className={'bar ' + barClass()}></div>
          <div id="bar2" className={'bar ' + barClass()}></div>
          <div id="bar3" className={'bar ' + barClass()}></div>
        </div>
        <nav className={'nav ' + navClass()} id="nav">
          <ul>
            <li>
              <Link to="/" onClick={menuOnClick} className={linkClass('/')}>
                home
              </Link>
            </li>
            <li>
              <Link
                to="/places"
                onClick={menuOnClick}
                className={linkClass('/places')}
              >
                places
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                onClick={menuOnClick}
                className={linkClass('/dashboard')}
              >
                dashboard
              </Link>
            </li>
            <li>
              <Link
                id="add-trip"
                to="/dashboard#add-trip"
                onClick={menuOnClick}
                className={linkClass('/trip')}
              >
                add your trip
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className={'menu-bg ' + menuBgClass()} id="menu-bg"></div>

      <div className="logo__container mobile_logo">
        <Link to="/">
          {isRedLogo() ? (
            <img src={logoRed} alt="logo as image" />
          ) : (
            <img src={logo2Url} alt="logo as image" />
          )}
        </Link>
      </div>
    </>
  );
};
