import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <section className='f-wrapper'>
            <div className='paddings innerWidth f-container'>
                
                {/* Company Info Section */}
                <div className='flexColStart f-left'>
                    <img src="./logo2.png" alt="Company Logo" width={120} />
                    <span className='secondaryText'>
                        Our vision is to make all people <br />
                        the best place to live for them.
                    </span>
                    <div className='f-social'>
                        <span>Follow us:</span>
                        <div className='social-links'>
                            <a href="#" aria-label="Facebook">📘</a>
                            <a href="#" aria-label="Twitter">🐦</a>
                            <a href="#" aria-label="LinkedIn">💼</a>
                            <a href="#" aria-label="Instagram">📷</a>
                        </div>
                    </div>
                </div>

                {/* Quick Links Section */}
                <div className='flexColStart f-center'>
                    <span className='primaryText'>Quick Links</span>
                    <div className='flexColStart f-menu'>
                        <a href="#properties">Properties</a>
                        <a href="#services">Services</a>
                        <a href="#about">About Us</a>
                        <a href="#contact">Contact</a>
                        <a href="#blog">Blog</a>
                    </div>
                </div>

                {/* Contact Information Section */}
                <div className='flexColStart f-right'>
                    <span className='primaryText'>Contact Information</span>
                    <div className='contact-info'>
                        <div className='contact-item'>
                            <span className='contact-icon'>📍</span>
                            <span className='secondaryText'>145 New York, FL 4571, USA</span>
                        </div>
                        <div className='contact-item'>
                            <span className='contact-icon'>📞</span>
                            <span className='secondaryText'>+1 (555) 123-4567</span>
                        </div>
                        <div className='contact-item'>
                            <span className='contact-icon'>✉️</span>
                            <span className='secondaryText'>info@company.com</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* Footer Bottom */}
            <div className='f-bottom'>
                <div className='paddings innerWidth'>
                    <div className='flexCenter f-bottom-content'>
                        <span className='secondaryText'>
                            © 2024 Company Name. All rights reserved.
                        </span>
                        <div className='f-bottom-links'>
                            <a href="#privacy">Privacy Policy</a>
                            <a href="#terms">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;