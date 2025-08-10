import React from "react";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import "./navbar.css";

function Navbar() {
    const navItems = [
        { id: 1, name: 'Home', icon: <FaHome />, link: '#' },
        { id: 2, name: 'About Me', icon: <FaUser />, link: '#about-me' },
        { id: 3, name: 'Projects', icon: <FaProjectDiagram />, link: '#projects' },
        { id: 4, name: 'Contact', icon: <FaEnvelope />, link: '#footer' },
    ];

    return (
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
    );
}

export default Navbar;
