import { useState } from 'react';
import '../App.css';

import AmericanFlag from '../assets/AmericanFlag.png';

import Amex from '../assets/AMEX.png';
import ApplePay from '../assets/applepay.png';
import GPay from '../assets/GPay.png';
import Mastercard from '../assets/mastercard.png';
import Paypal from '../assets/paypal.png';
import OPay from '../assets/shop.png';

import Instagram from '../assets/Instagram.png';
import LinkedIn from '../assets/LinkedIn.png';

const Footer = () => {
    const [openSections, setOpenSections] = useState({});

    const toggleSection = (section) => {
        setOpenSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section newsletter">
                    <h2 className="footer-heading">BE THE FIRST TO KNOW</h2>
                    <p className="newsletter-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        this is simply dummy text.
                    </p>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Enter your e-mail..." className="newsletter-input" />
                        <button type="submit" className="newsletter-button">SUBSCRIBE</button>
                    </form>
                </div>

                <div>
                    <div className="footer-section contact">
                        <h2 className="footer-heading">CALL US</h2>
                        <div className="contact-info">
                            <span className="contact-phone">+44 221 133 5360</span>
                            <a href="mailto:customercare@mettamuse.com" className="contact-email">customercare@mettamuse.com</a>
                        </div>
                    </div>

                    <div className="footer-section currency">
                        <h2 className="footer-heading">CURRENCY</h2>
                        <p className="currency-text">
                            <span className="flag"><img src={AmericanFlag} className='american-flag-icon' alt='American Flag Icon' /></span>
                            <span className="contact-divider">◆</span>
                            <strong>USD</strong>
                        </p>
                        <p className="currency-text">Transactions will be completed in Euros and a currency reference is available on hover.</p>
                    </div>
                </div>
            </div>

            <div className="footer-section links mobile-only">
                <div className="accordion-item">
                    <h2 className="accordion-header" onClick={() => toggleSection('mettamus')}>
                        mettā muse
                        <span className={`accordion-icon ${openSections.mettamus ? 'open' : ''}`}>▼</span>
                    </h2>
                    <ul className={`accordion-content ${openSections.mettamus ? 'open' : ''}`}>
                        <li><a href="/about-us">About Us</a></li>
                        <li><a href="/stories">Stories</a></li>
                        <li><a href="/artisans">Artisans</a></li>
                        <li><a href="/boutiques">Boutiques</a></li>
                        <li><a href="/contact-us">Contact Us</a></li>
                        <li><a href="/eu-compliances">EU Compliances Docs</a></li>
                    </ul>
                </div>

                <div className="accordion-item  mobile-only">
                    <h2 className="accordion-header" onClick={() => toggleSection('quicklinks')}>
                        QUICK LINKS
                        <span className={`accordion-icon ${openSections.quicklinks ? 'open' : ''}`}>▼</span>
                    </h2>
                    <ul className={`accordion-content ${openSections.quicklinks ? 'open' : ''}`}>
                        <li><a href="/orders-shipping">Orders & Shipping</a></li>
                        <li><a href="/join-seller">Join/Login as a Seller</a></li>
                        <li><a href="/payment-pricing">Payment & Pricing</a></li>
                        <li><a href="/returns-refunds">Return & Refunds</a></li>
                        <li><a href="/faqs">FAQs</a></li>
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                        <li><a href="/terms-conditions">Terms & Conditions</a></li>
                    </ul>
                </div>

                <div className="accordion-item  mobile-only">
                    <h2 className="accordion-header" onClick={() => toggleSection('followus')}>
                        FOLLOW US
                        <span className={`accordion-icon ${openSections.followus ? 'open' : ''}`}>▼</span>
                    </h2>
                    <div className={`accordion-content social-links ${openSections.followus ? 'open' : ''}`}>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                            <img src={Instagram} alt="Instagram" className="social-icon" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                            <img src={LinkedIn} alt="LinkedIn" className="social-icon" />
                        </a>
                    </div>
                </div>
            </div>


            <div className="footer-section payments  mobile-only">
                <h2 className="footer-heading">mettā muse ACCEPTS</h2>
                <div className="payment-icons">
                    <img src={GPay} alt="Google Pay" className="payment-icon" />
                    <img src={Mastercard} alt="MasterCard" className="payment-icon" />
                    <img src={Paypal} alt="PayPal" className="payment-icon" />
                    <img src={Amex} alt="American Express" className="payment-icon" />
                    <img src={ApplePay} alt="Apple Pay" className="payment-icon" />
                    <img src={OPay} alt="O-Pay" className="payment-icon" />
                </div>
            </div>

            <hr className='desktop-only' />

            <div className="footer-divider desktop-only">
                <div className='desktop-accordion-item'>
                    <h2 className="desktop-accordion-header">
                        mettā muse </h2>
                    <div className="desktop-accordion-content">
                        <a href="/about-us">About Us</a>
                        <a href="/stories">Stories</a>
                        <a href="/artisans">Artisans</a>
                        <a href="/boutiques">Boutiques</a>
                        <a href="/contact-us">Contact Us</a>
                        <a href="/eu-compliances">EU Compliances Docs</a>
                    </div>
                </div>

                <div className="desktop-accordion-item">
                    <h2 className="desktop-accordion-header">
                        QUICK LINKS
                    </h2>
                    <div className="desktop-accordion-content">
                        <a href="/orders-shipping">Orders & Shipping</a>
                        <a href="/join-seller">Join/Login as a Seller</a>
                        <a href="/payment-pricing">Payment & Pricing</a>
                        <a href="/returns-refunds">Return & Refunds</a>
                        <a href="/faqs">FAQs</a>
                        <a href="/privacy-policy">Privacy Policy</a>
                        <a href="/terms-conditions">Terms & Conditions</a>
                    </div>
                </div>

                <div>
                    <div className="desktop-accordion-item">
                        <h2 className="desktop-accordion-header">
                            FOLLOW US
                        </h2>
                        <div className="desktop-accordion-content-follow-us social-links">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                <img src={Instagram} alt="Instagram" className="social-icon" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                <img src={LinkedIn} alt="LinkedIn" className="social-icon" />
                            </a>
                        </div>
                    </div>

                    <div className="footer-section payments">
                        <h2 className="footer-heading">mettā muse ACCEPTS</h2>
                        <div className="payment-icons">
                            <img src={GPay} alt="Google Pay" className="payment-icon" />
                            <img src={Mastercard} alt="MasterCard" className="payment-icon" />
                            <img src={Paypal} alt="PayPal" className="payment-icon" />
                            <img src={Amex} alt="American Express" className="payment-icon" />
                            <img src={ApplePay} alt="Apple Pay" className="payment-icon" />
                            <img src={OPay} alt="O-Pay" className="payment-icon" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-copyright">
                <p>Copyright © 2023 mettamuse. All rights reserved.</p>
            </div>
        </footer >
    );
};

export default Footer;
