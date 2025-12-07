import React from "react";
import "./portfolio.css";

function Portfolio() {
  return (
    <>
      {/* Header Section */}
      <header>
        <div className="container">
          <h1>My Portfolio</h1>
          <nav>
            <ul>
              <li>
                <a href="#about">About Me</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* About Me Section */}
      <section id="about">
        <div className="container">
          <h2>About Me</h2>

          <div className="about-content">
            <img src="/profile.jpeg" alt="Bhavin" className="profile-img" />

            <div className="about-text">
              <h3>Hi, I'm Bhavin Dalsaniya 👋</h3>

              <p>
                I am a Software QA Engineer with 4+ years of hands-on experience
                in Automation Testing. I specialize in building scalable
                automation frameworks and ensuring high-quality, stable, and
                reliable web applications for clients across industries.
              </p>

              <p>
                I have strong expertise in Selenium WebDriver with Java, Katalon
                Studio, and Playwright with TypeScript. I build modular,
                reusable automation frameworks using POM, fixtures, and custom
                helpers, ensuring long-term maintainability and faster
                execution.
              </p>

              <p>
                I also have strong experience in API testing using Postman, Rest
                Assured, and Playwright request context, including validation of
                JSON payloads, response codes, and workflows.
              </p>

              <p>
                I have integrated testing into CI/CD pipelines using Jenkins and
                GitHub Actions. I work closely with developers and stakeholders
                in Agile sprint environments to optimize test coverage.
              </p>

              <p>
                I am a quick learner, highly adaptable, and focused on
                delivering stable and efficient automation solutions.
              </p>

              <div className="about-buttons">
                <a
                  href="/Bhavin-Dalsaniya-QA-Automation-Testing.pdf"
                  className="btn"
                  download
                >
                  Download Resume
                </a>

                <a
                  href="/Bhavin-Dalsaniya-QA-Automation-Testing.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  View in Browser
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="container">
          <h2 className="section-title">My Projects</h2>

          <div className="project-grid">
            {/* Project Card 1 */}
            <div className="project-card">
              <div className="project-content">
                <h3>Static Application Deployment</h3>
                <p>Deployed a static website using Nginx on EC2.</p>
                <div className="project-links">
                  <a
                    href="https://github.com/BhavinDalsaniya/static-app-aws/tree/main"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="project-card">
              <div className="project-content">
                <h3>MySQL Application Deployment</h3>
                <p>
                  Deployed a dynamic application with MySQL on an EC2 instance.
                </p>
                <div className="project-links">
                  <a
                    href="https://github.com/BhavinDalsaniya/spring-mysql-ec2-deployment"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="project-card">
              <div className="project-content">
                <h3>Database App on AWS EKS</h3>
                <p>
                  Deployed an application with MySQL DB on AWS EKS using Docker.
                </p>
                <div className="project-links">
                  <a
                    href="https://github.com/BhavinDalsaniya/DeployeDataBaseAppOnEKSOnAWS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container">
          <h2>Contact Me</h2>
          <p>Feel free to reach out to me:</p>

          <div className="contact-info">
            <ul>
              <li>
                <i className="fas fa-envelope"></i>{" "}
                <a href="mailto:dalsaniyabhavinshivlal@gmail.com">
                  dalsaniyabhavinshivlal@gmail.com
                </a>
              </li>

              <li>
                <i className="fab fa-linkedin"></i>{" "}
                <a
                  href="https://www.linkedin.com/in/bhavin-dalsaniya-230b08337/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>

              <li>
                <i className="fab fa-github"></i>{" "}
                <a
                  href="https://github.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2025 Bhavin Dalsaniya. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Portfolio;
