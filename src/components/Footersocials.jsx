import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Footersocials.css';

const Footersocials = () => {
    return (
        <div className="footer-socials">
            <p className="footer-social-text">Made with Love By Neeraj Mahato</p>
            <div className="social-links">
                <a href="https://github.com/Neeraj12220989" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/in/neerajmahato" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="social-icon" />
                </a>
                <a href="https://www.instagram.com/neeraj_mahato_" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="social-icon" />
                </a>
            </div>
        </div>
    );
};

export default Footersocials;
