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

            {/* About Me Section */}
            <section id="about">
                <div class="container">
                    <h2>About Me</h2>
                    <div class="about-content">
                        <img src="/profile.jpeg" alt="Bhavin" className="profile-img" />

                        <div class="about-text">
                            <h3>Hi, I'm Bhavin Dalsaniya 👋</h3>
                            <p>
                                I’m a Senior Quality Analyst with 3+ years of experience in automation testing.
                                Passionate about DevOps, cloud computing, and infrastructure automation,
                                I’m currently transitioning into a DevOps Engineer role.
                            </p>
                            <p>
                                My expertise spans test automation (Selenium, JMeter, API testing) and cloud technologies like AWS, Docker,
                                and Kubernetes. I’m actively learning CI/CD, infrastructure as code, and monitoring tools to streamline deployments.
                            </p>
                            <p>
                                When I'm not coding, you’ll find me watching cricket, following Mumbai Indians, or exploring new tech trends.
                                Let’s connect and build something awesome together! 🚀
                            </p>
                            <div class="about-buttons">
                                <a href="your-resume.pdf" class="btn">Download Resume</a>
                                <a href="https://github.com/yourgithub" class="btn">GitHub</a>
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
                                <p>Deployed a static website using Nginx on an EC2 instance.</p>
                                <div className="project-links">
                                    {/* <a href="http://<ec2-public-ip>" target="_blank" rel="noopener noreferrer" className="btn">Live Demo</a> */}
                                    <a href="https://github.com/BhavinDalsaniya/static-app-aws/tree/main" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
                                </div>
                            </div>
                        </div>

                        {/* Project Card 2 */}
                        <div className="project-card">
                            <div className="project-content">
                                <h3>MySQL Application Deployment</h3>
                                <p>Deployed a dynamic application with a MySQL database on an EC2 instance.</p>
                                <div className="project-links">
                                    {/* <a href="http://<ec2-public-ip>" target="_blank" rel="noopener noreferrer" className="btn">Live Demo</a> */}
                                    <a href="https://github.com/BhavinDalsaniya/spring-mysql-ec2-deployment" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
                                </div>
                            </div>
                        </div>

                        {/* Project Card 3 */}
                        <div className="project-card">
                            <div className="project-content">
                                <h3>DeployeDataBaseAppOnEKSOnAWS</h3>
                                <p>Deployed an Application with a MySQL Database on AWS EKS using Docker</p>
                                <div className="project-links">
                                    {/* <a href="http://<ec2-public-ip>" target="_blank" rel="noopener noreferrer" className="btn">Live Demo</a> */}
                                    <a href="https://github.com/BhavinDalsaniya/DeployeDataBaseAppOnEKSOnAWS" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Me Section */}
            <section id="contact">
                <div class="container">
                    <h2>Contact Me</h2>
                    <p>Feel free to reach out to me:</p>
                    <div class="contact-info">
                        <ul>
                            <li><i class="fas fa-envelope"></i> <a href="mailto:dalsaniyabhavinshivlal@gmail.com">dalsaniyabhavinshivlal@gmail.com</a></li>
                            <li><i class="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/bhavin-dalsaniya-230b08337/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><i class="fab fa-github"></i> <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        </ul>
                    </div>
                </div>

            </section>



            <footer>
                <div class="container">
                    <p>&copy; 2025 Bhavin Dalsaniya. All rights reserved.</p>
                </div>
            </footer>


        </>
    );
}

export default Portfolio;

