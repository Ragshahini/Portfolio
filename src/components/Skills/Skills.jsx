import React from "react";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}> {/* Added id="skills" to link correctly */}
      <h2 className={styles.title}>Skills</h2>

      {/* Categories */}
      <div className={styles.categories}>
        {/* Programming Languages */}
        <div className={styles.category}>
          <h3>Programming Languages</h3>
          <ul className={styles.skillList}>
            <li>
              <div className={styles.skillItem}>
                <img src="/assets/skills/java.jfif" alt="Java" />
                <span>Java</span>
              </div>
            </li>
            <li>
              <div className={styles.skillItem}>
                <img src="/assets/skills/javascript.png" alt="JavaScript" />
                <span>JavaScript</span>
              </div>
            </li>
            <li>
              <div className={styles.skillItem}>
                <img src="/assets/skills/c++.webp" alt="C++" />
                <span>C++</span>
              </div>
            </li>
            <li>
              <div className={styles.skillItem}>
                <img src="/assets/skills/html.png" alt="HTML" />
                <span>HTML</span>
              </div>
            </li>
            <li>
              <div className={styles.skillItem}>
                <img src="/assets/skills/css.png" alt="CSS" />
                <span>CSS</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Frameworks & Tools */}
        <div className={styles.category}>
          <h3>Frameworks & Tools</h3>
          <ul className={styles.skillList}>
            <li>
              <div className={styles.skillItem}>
                <img src="/assets/skills/react.png" alt="React" />
                <span>React</span>
              </div>
            </li>
            <li>
              <div className={styles.skillItem}>
                <img src="/assets/skills/node.png" alt="Node.js" />
                <span>Node.js</span>
              </div>
            </li>
            <li>
              <div className={styles.skillItem}>
                <img src="/assets/skills/php.jfif" alt="PHP" />
                <span>PHP</span>
              </div>
            </li>
            <li>
              <div className={styles.skillItem}>
                <img src="/assets/skills/firebase.png" alt="Firebase" />
                <span>Firebase</span>
              </div>
            </li>
            <li>
              <div className={styles.skillItem}>
                <img src="/assets/skills/android.jfif" alt="Android Studio" />
                <span>Android Studio</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Design Tools */}
        <div className={styles.category}>
          <h3>Design Tools</h3>
          <ul className={styles.skillList}>
            <li>
              <div className={styles.skillItem}>
                <img src="/assets/skills/figma.png" alt="Figma" />
                <span>Figma</span>
              </div>
            </li>
            <li>
              <div className={styles.skillItem}>
                <img src="/assets/skills/ps.png" alt="Photoshop" />
                <span>Photoshop</span>
              </div>
            </li>
            <li>
              <div className={styles.skillItem}>
                <img src="/assets/skills/dw.png" alt="Dreamweaver" />
                <span>Dreamweaver</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Database & Backend */}
        <div className={styles.category}>
          <h3>Database & Backend</h3>
          <ul className={styles.skillList}>
            <li>
              <div className={styles.skillItem}>
                <img src="/assets/skills/mongodb.png" alt="MongoDB" />
                <span>MongoDB</span>
              </div>
            </li>
            <li>
              <div className={styles.skillItem}>
                <img src="/assets/skills/mysql.png" alt="MySQL" />
                <span>MySQL</span>
              </div>
            </li>
            <li>
              <div className={styles.skillItem}>
                <img src="/assets/skills/R.png" alt="R Studio" />
                <span>R Studio</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Soft Skills */}
        <div className={styles.category}>
          <h3>Soft Skills</h3>
          <ul className={styles.softSkills}>
            <li>Creativity</li>
            <li>Problem-Solving</li>
            <li>Teamwork</li>
            <li>Time Management</li>
            <li>Adaptability</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
