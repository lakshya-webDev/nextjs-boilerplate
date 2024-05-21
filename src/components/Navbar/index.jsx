'use client';
import Link from 'next/link';
import React from 'react';
import './navbar.scss';
import { CloseIcon, Hamburger } from '@/utils/components.';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = React.useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <h1>Product Cart</h1>
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    {!showNavbar ? <Hamburger /> : <CloseIcon />}
                </div>
                <div className={`nav-elements ${showNavbar ? "active" : ""}`}>
                    <ul className='navbar-list'>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/server-page">Server Page</Link>
                        </li>
                        <li>
                            <Link href="/client-page">Client Page</Link>
                        </li>
                        <li>
                            <Link href="/products">Products</Link>
                        </li>
                        <li>
                            <Link href="/projects">Projects</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
