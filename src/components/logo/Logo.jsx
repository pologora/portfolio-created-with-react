import { useEffect, useRef } from 'react';
import './logo.css';

const Logo = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    const logo = logoRef.current;
    const intervalId = setInterval(() => {
      logo.classList.toggle('rotating');
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div class='logo-container'>
      <div ref={logoRef} class='logo'>
        Olek
      </div>
    </div>
  );
};
export default Logo;
