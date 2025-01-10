import React from "react";
import styles from "./Projects.module.css";

const Projects = () => {
  const projects = [
    {
      title: "SLK Travel Web Application",
      description:
        "A platform for tourist to manage their adventure trips, booking places, and more.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/assets/projects/trip.jpg",
      github: "https://github.com/Ragshahini/SLKTravel",
    },
    {
      title: "RentNest Web Application",
      description:
        "A comprehensive platform to explore and book houses, apartments, and buildings for rent or purchase, tailored for travelers and locals seeking convenient and seamless property management solutions.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/assets/projects/build.jfif",
      github: "https://github.com/Ragshahini/RentNest",
    },
    {
      title: "SKMetal Web Application",
      description:
        "A trusted platform for buying and selling high-quality box bars, copper, and brass materials, catering to industries and individuals with reliable, durable, and cost-effective solutions for their manufacturing and construction needs.",
      technologies: ["React", "Firebase", "JavaScript"],
      image: "/assets/projects/metal.jfif",
      github: "https://github.com/Ragshahini/SKMetals",
    },
    {
      title: "Car Care System",
      description:
        "A comprehensive integrated system for car service management, offering seamless features like parts inventory management, service tracking, POS integration, stock management, and user management. This platform streamlines operations, enhances efficiency, and ensures smooth service delivery for both customers and service providers.",
      technologies: ["Java", "CSS", "MongoDB"],
      image: "/assets/projects/car.jfif",
      github: "https://github.com/Ragshahini/OOP_Cars",
    },
    {
      title: "Royal Food Web Application",
      description:
        "A diverse food website offering a variety of cuisines including Indian, Sri Lankan, Chinese, and homemade buns. This platform brings together a wide range of delicious dishes, allowing food enthusiasts to explore and enjoy authentic flavors from different cultures, all in one place.",
      technologies: ["JavaScript", "CSS", "HTML"],
      image: "/assets/projects/food.jfif",
      github: "https://github.com/Ragshahini/Royal-Food",
    },
  ];

  return (
    <section id="projects" className={styles.projects}> {/* Added id="projects" to link correctly */}
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projectGrid}>
        {projects.slice(0, 6).map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.projectImage}
            />
            <div className={styles.projectDetails}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.technologies}>
                {project.technologies.map((tech, i) => (
                  <span key={i} className={styles.tech}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className={styles.links}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.githubLink}
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
