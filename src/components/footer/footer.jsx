import React from "react";
import "./footer.css"; 

function Footer() {
    return (
        <section id="footer">
        <footer className="footer">
            <div className="footer-content">
                <p>© {new Date().getFullYear()} Nidhin. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="mailto:nidhin1089@gmail.com">Email</a>
                </div>
            </div>
        </footer>
        </section>
    );
}

export default Footer;
