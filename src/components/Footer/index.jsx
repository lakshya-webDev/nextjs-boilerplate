import React from 'react';
import './footer.scss';
import { FaceBookIcon, InstagramIcon, TwitterIcon } from '@/utils/components.';

const Footer = () => {
    const date = new Date()
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-logo">
                    <h1>Product Cart</h1>
                </div>
                <div className="footer-links">
                    <h3 className='footer-col-title'>Quick Links</h3>
                    <ul className='list-items'>
                        <li><a href="/">Home</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/projects">Projects</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <h3 className='footer-col-title'>Social Links</h3>
                    <div className='social-items'>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaceBookIcon /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
                    </div>
                </div>
                <div className="footer-contact">
                    <h3 className='footer-col-title'>Contact</h3>

                    <p>Email: info@productcart.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
            </div>
            <div className='copyright-section'>
                <p>&copy; {date.getFullYear()} Product Cart | All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
