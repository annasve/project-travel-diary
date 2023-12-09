import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const HomePage = () => {
  useEffect(() => {
    document.body.className = 'image-background';
  }, []);
  return (
    <div className="home-page">
      <h1>Travel, Write, Repeat.</h1>
      <p>
        Don't let the world's chaos deter you, <br />
        let the wanderlust within you guide you.
      </p>
      {/* <Link to="/dashboard">EXPLORE →</Link> */}
      <Link to="/dashboard">
        <button class="explore">
          EXPLORE<span class="icon-right"></span>
          <span class="icon-right after"></span>
        </button>
      </Link>
    </div>
  );
};
