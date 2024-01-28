import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };

    showButton();

    window.addEventListener('resize', showButton);

    return () => {
      window.removeEventListener('resize', showButton);
    };
  }, []);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src="/images/2.png" alt="C'est le logo" />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Acceuil
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Appointment' className='nav-links' onClick={closeMobileMenu}>
                Prendre RDV
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Annuaire' className='nav-links' onClick={closeMobileMenu}>
                Annuaire
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Conn' className='nav-links' onClick={closeMobileMenu}>
                Connexion
              </Link>
            </li>

            <li>
              <Link to='/Ins' className='nav-links-mobile' onClick={closeMobileMenu}>
                Inscription
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Inscription <br></br> avocat</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
