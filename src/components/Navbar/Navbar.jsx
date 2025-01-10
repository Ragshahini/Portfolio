import React, { useState, useEffect, useRef } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Reference to the menu container
  const navbarRef = useRef(null); // Reference to the navbar container

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu if the user clicks outside of the navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Close the menu if clicked outside
      }
    };

    // Add the event listener
    document.addEventListener('click', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={navbarRef} className={styles.navbar}>
      <a href="/" className={styles.title}>Portfolio</a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={isMenuOpen ? '/assets/nav/closeIcon.png' : '/assets/nav/menuIcon.png'}
          alt={isMenuOpen ? 'close-button' : 'menu-button'}
          onClick={toggleMenu}
        />
        {isMenuOpen && (
          <div ref={menuRef} className={styles.dropdown}>
            <a href="#about" onClick={closeMenu}>About</a>  {/* Added link to #about */}
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
