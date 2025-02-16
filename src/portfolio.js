import React from 'react';
import './portfolio.css';

function Portfolio() {
    return (
        <>
            {/* <!-- Header Section --> */}
            <header>
                <div className="container">
                    <h1>My Portfolio</h1>
                    <nav>
                        <ul>
                            <li><a href="#about">About Me</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className="container">
                <h1>My Portfolio</h1>
                <nav>
                    <ul>
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>

            {/* Hero Section */}
            <section id="hero">
                <div className="container">
                    <div className="hero-content">
                        <h2>Hello, I'm <span className="highlight">Bhavin Dalsaniya</span></h2>
                        <p>A passionate <strong>[Your Role]</strong> specializing in <strong>[Your Skills]</strong>.</p>
                        <div className="hero-buttons">
                            <a href="#projects" className="btn">View Portfolio</a>
                            <a href="assets/My_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">My Resume</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Me Section */}
            <section id="about">
                <div className="container">
                    <h2>About Me</h2>
                    <div className="about-content">
                        <p>Hello! I'm <strong>[Your Name]</strong>, a <strong>[Your Role]</strong> with experience in deploying and managing applications. I specialize in <strong>[Your Skills, e.g., AWS, Linux, CI/CD]</strong> and love solving technical challenges.</p>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects">
                <div className="container">
                    <h2>Projects</h2>
                    <div className="project-grid">
                        <div className="project-card">
                            <img src="assets/static-app-screenshot.png" alt="Static App Screenshot" />
                            <h3>Static Application Deployment</h3>
                            <p>Deployed a static website using Nginx on an EC2 instance.</p>
                            <div className="project-links">
                                <a href="http://<ec2-public-ip>" target="_blank" rel="noopener noreferrer" className="btn">Live Demo</a>
                                <a href="<static-app-git-url>" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
                            </div>
                        </div>

                        <div className="project-card">
                            <img src="assets/mysql-app-screenshot.png" alt="MySQL App Screenshot" />
                            <h3>MySQL Application Deployment</h3>
                            <p>Deployed a dynamic application with a MySQL database on an EC2 instance.</p>
                            <div className="project-links">
                                <a href="http://<ec2-public-ip>" target="_blank" rel="noopener noreferrer" className="btn">Live Demo</a>
                                <a href="<mysql-app-git-url>" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
                            </div>
                        </div>

                        <div className="project-card">
                            <img src="assets/rds-app-screenshot.png" alt="RDS App Screenshot" />
                            <h3>AWS RDS Application Deployment</h3>
                            <p>Deployed an application connected to an AWS RDS MySQL instance.</p>
                            <div className="project-links">
                                <a href="http://<ec2-public-ip>" target="_blank" rel="noopener noreferrer" className="btn">Live Demo</a>
                                <a href="<rds-app-git-url>" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
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
                            <li><i className="fas fa-envelope"></i> <a href="mailto:dalsaniyabhavinshivlal@gmail.com">dalsaniyabhavinshivlal@gmail.com</a></li>
                            <li><i className="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/bhavin-dalsaniya-230b08337/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><i className="fab fa-github"></i> <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        </ul>
                    </div>
                </div>
            </section>

            <footer>
                <div class="container">
                    <p>&copy; 2025 [Your Name]. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}

export default Portfolio;