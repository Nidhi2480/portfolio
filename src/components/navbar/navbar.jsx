import React from "react";
import {
    FaHome,
    FaUser,
    FaProjectDiagram,
    FaEnvelope,
    FaLinkedin,
    FaGithub // ✅ Added GitHub
} from "react-icons/fa";
import "./navbar.css";

function Navbar() {
    const navItems = [
        { id: 1, name: 'Home', icon: <FaHome />, link: '#' },
        { id: 2, name: 'About Me', icon: <FaUser />, link: '#about-me' },
        { id: 3, name: 'Projects', icon: <FaProjectDiagram />, link: '#projects' },
        { id: 4, name: 'Contact', icon: <FaEnvelope />, link: '#footer' },
    ];

    return (
        <>
            <div className="Navbar">
                {navItems.map(navItem => (
                    <div className="NavItem" key={navItem.id}>
                        <a href={navItem.link} className="button">
                            <span className="icon">{navItem.icon}</span>
                            <span className="label">{navItem.name}</span>
                        </a>
                        <div className="line"></div>
                    </div>
                ))}
            </div>

            {/* ✅ Fixed LinkedIn and GitHub Buttons */}
            <div className="fixed-socials">
                <a
                    href="https://www.linkedin.com/in/nidhin-sajeev-bb7227147"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn linkedin"
                    title="Connect on LinkedIn"
                >
                    <FaLinkedin size={20} />
                </a>

                <a
                    href="https://github.com/Nidhi2480"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn github"
                    title="View GitHub Profile"
                >
                    <FaGithub size={20} />
                </a>
            </div>
        </>
    );
}

export default Navbar;
