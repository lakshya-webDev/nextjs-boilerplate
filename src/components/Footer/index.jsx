import React from 'react';
import './footer.scss';
import { FaceBookIcon, InstagramIcon, TwitterIcon } from '@/utils/components.';
import Link from 'next/link';

const Footer = ({ data }) => {
    const date = new Date()
    const iconMapping = {
        'Facebook': <FaceBookIcon />,
        'Twitter': <TwitterIcon />,
        'Instagram': <InstagramIcon />
    };
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-logo">
                    <h1>{data.logo}</h1>
                </div>
                <div className="footer-links">
                    <h3 className='footer-col-title'>{data.quickLinks.title}</h3>
                    <ul className='list-items'>
                        {data.quickLinks.items.length > 0 && data.quickLinks.items.map((val, i) => (
                            <li className='footer-item' key={i}><Link href={val.link}>{val.label}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="footer-social">
                    <h3 className='footer-col-title'>{data.socialLinks.title}</h3>
                    <div className='social-items'>
                        {data.socialLinks.items.length > 0 && data.socialLinks.items.map((val, i) => (
                            <Link href={val.link.href} target={val.link.target} rel="noopener noreferrer">
                                {iconMapping[val.label]}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="footer-contact">
                    <h3 className='footer-col-title'>{data.contactSection.title}</h3>
                    <p>{data.contactSection.email}</p>
                    <p>{data.contactSection.phone}</p>
                </div>
            </div>
            <div className='copyright-section'>
                <p>&copy; {date.getFullYear()} Product Cart | All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
