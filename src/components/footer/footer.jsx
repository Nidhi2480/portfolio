import React from "react";
import "./footer.css";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-text">© {currentYear} Nidhin. All rights reserved.</p>
                <div className="social-links">
                    <a 
                        href="https://github.com/Nidhi2480" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Visit Nidhin's GitHub"
                    >
                        GitHub
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/nidhin-sajeev-bb7227147" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Visit Nidhin's LinkedIn"
                    >
                        LinkedIn
                    </a>
                    <a 
                        href="mailto:nidhin1089@gmail.com" 
                        aria-label="Send an email to Nidhin"
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
