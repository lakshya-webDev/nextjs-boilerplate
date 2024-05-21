'use client';
import Link from 'next/link';
import React from 'react';
import './navbar.scss';
import { CloseIcon, Hamburger } from '@/utils/components.';

const Navbar = ({ data }) => {
    const [showNavbar, setShowNavbar] = React.useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <Link href="/"><h1>{data.logo}</h1></Link>
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    {!showNavbar ? <Hamburger /> : <CloseIcon />}
                </div>
                <div className={`nav-elements ${showNavbar ? "active" : ""}`}>
                    <ul className='navbar-list'>
                        {data.navItems.length > 0 && data.navItems.map((val, i) => (
                            <li className='nav-item' key={i}>
                                <Link href={val.link}>{val.label}</Link>
                            </li>

                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
