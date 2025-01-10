import React, { useState, useEffect, useRef } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close the dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  return (
    <section className={styles.hero}>
      {/* Bubbles */}
      <div className={`${styles.bubble} ${styles.bubble1}`}></div>
      <div className={`${styles.bubble} ${styles.bubble2}`}></div>
      <div className={`${styles.bubble} ${styles.bubble3}`}></div>

      <div className={styles.heroContent}>
        <h1 className={styles.title}>Hi, I'm Ragshahini Navarathna</h1>
        <p className={styles.description}>
          A Passionate UI/UX Designer and Aspiring Software Developer!...
        </p>
        <div className={styles.buttons}>
          {/* Contact Me button */}
          <a href="mailto:ragsha2005@gmail.com" className={styles.contactBtn}>
            Get In Touch
          </a>

          {/* Download CV button with dropdown */}
          <div className={styles.cvDropdown} ref={dropdownRef}>
            <button className={styles.cvBtn} onClick={toggleDropdown}>
              Download CV
              <span className={styles.dropdownIcon}>▼</span>
            </button>
            {dropdownOpen && (
              <div className={styles.dropdownContent}>
                <a
                  href="/RAGSHAHINI NAVARATHNA-CV.pdf"
                  className={styles.dropdownItem}
                  download
                >
                  Software Engineering CV
                </a>
                <a
                  href="/RAGSHAHINI NAVARATHNA_CV.pdf"
                  className={styles.dropdownItem}
                  download
                >
                  UI/UX CV
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <img src="/assets/hero/heroImage.jfif" alt="Hero image of me" />

      {/* Social Links */}
      <div className={styles.socialLinks}>
        <a
          href="mailto:ragsha2005@gmail.com"
          className={styles.socialIcon}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/icons/email.png" alt="Email" />
        </a>
        <a
          href="https://www.linkedin.com/in/ragshahini-navarathna"
          className={styles.socialIcon}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/icons/linkedin.png" alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/Ragshahini"
          className={styles.socialIcon}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/icons/github.png" alt="GitHub" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
