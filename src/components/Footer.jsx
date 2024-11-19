// import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                {/* Left: Company Name and Intro */}
                <div className="footer-intro">
                    <h1 className="company-name">HelpLine</h1>
                    <p className="intro-text">
                        HelpLine is your trusted platform for all your support needs. We connect you to solutions, ensuring 
                        convenience and accessibility at your fingertips.
                    </p>
                </div>

                {/* Right: Google Map */}
                <div className="footer-map">
                    <iframe
                        title="Google Map Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1071.450711218592!2d86.1455842962198!3d23.66790510000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f423b2cca73f0d%3A0x847ab93403ac0628!2sHelp%20Line!5e0!3m2!1sen!2sin!4v1732015709530!5m2!1sen!2sin"
                        allowFullScreen=""
                        loading="lazy"
                        className="map-iframe"
                    ></iframe>
                </div>
            </div>

            <div className="footer-bottom">
                {/* Left: Contact Info */}
                <div className="footer-contact">
                    <h2>Contact Information</h2>
                    <p><strong>Phone:</strong> +911-9430789062</p>
                    <p><strong>Email:</strong> Sarbindkumar12@gmail.com</p>
                </div>

                {/* Right: Address */}
                <div className="footer-address">
                    <h2>Address</h2>
                    <p>HA - 11, City Center, Sector-4</p>
                    <p>Bokaro S. City, Jharkhand</p>
                    <p>827004</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
