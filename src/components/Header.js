import { useState } from 'react';

import logoIcon from '../assets/Logo.jpeg';
import bagIcon from '../assets/icons/bag.png';
import profileIcon from '../assets/icons/profile.png';
import searchIcon from '../assets/icons/search.png';
import wishlistIcon from '../assets/icons/wishlist.png';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="site-header">
            <div className="header-top">
                <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className="header-logo-icon mobile-only">
                    <img src={logoIcon} alt="Metta Muse Logo Icon" />
                </div>

                <div className="header-logo-icon desktop-only">
                    <img src={logoIcon} alt="Metta Muse Logo Icon" />
                </div>

                <div className="header-logo-text">
                    <a href="/">LOGO</a>
                </div>

                <div className="header-controls">
                    <a href="/search">
                        <img src={searchIcon} alt="Search" />
                    </a>
                    <a href="/wishlist">
                        <img src={wishlistIcon} alt="Wishlist" />
                    </a>
                    <a href="/cart">
                        <img src={bagIcon} alt="Shopping Bag" />
                    </a>
                    <a href="/profile" className="desktop-only">
                        <img src={profileIcon} alt="Profile" />
                    </a>
                    <div className="lang-selector">
                        ENG
                        <span className="dropdown-arrow">▼</span>
                    </div>
                </div>
            </div>

            <nav className={`header-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                <ul>
                    <li><a href="/shop">SHOP</a></li>
                    <li><a href="/skills">SKILLS</a></li>
                    <li><a href="/stories">STORIES</a></li>
                    <li><a href="/about">ABOUT</a></li>
                    <li><a href="/contact">CONTACT US</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
