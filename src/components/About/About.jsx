import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      {/* Title */}
      <h2 className={styles.title}>About</h2>

      {/* Content Section */}
      <div className={styles.content}>
        {/* Left: Circular Image */}
        <div className={styles.imageContainer}>
          <div className={styles.heroImage}>
            {/* Corrected Image Path */}
            <img
              src="C:\Users\HP ZBook 15 G7\Desktop\Portfolio\Portfolio\public\assets\about\aboutImage.png"
              alt="Laptop used for UI/UX work"
              className={styles.image}
            />
          </div>
        </div>

        {/* Right: Text Sections */}
        <div className={styles.textContainer}>
          {/* Card 1 */}
          <div className={styles.card}>
            <img
              src="C:\Users\HP ZBook 15 G7\Desktop\Portfolio\Portfolio\public\assets\about\cursorIcon.png"
              alt="Frontend Icon"
              className={styles.cardIcon}
            />
            <h3>Frontend Developer</h3>
            <p>
              I specialize in crafting responsive, intuitive, and optimized user
              interfaces.
            </p>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <img
              src="C:\Users\HP ZBook 15 G7\Desktop\Portfolio\Portfolio\public\assets\about\serverIcon.png"
              alt="Backend Icon"
              className={styles.cardIcon}
            />
            <h3>Backend Developer</h3>
            <p>
              Experienced in building scalable APIs and efficient backend
              solutions.
            </p>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <img
              src="C:\Users\HP ZBook 15 G7\Desktop\Portfolio\Portfolio\public\assets\about\uiIcon.png"
              alt="UI/UX Icon"
              className={styles.cardIcon}
            />
            <h3>UI/UX Designer</h3>
            <p>
              I design seamless user experiences and visually captivating
              interfaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
