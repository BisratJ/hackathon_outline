import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="footer-logos">
                            <img src="/assets/alx-logo.png" alt="ALX" className="footer-logo-alx" />
                            <img src="/assets/codeleague-logo.png" alt="CodeLeague" className="footer-logo-codeleague" />
                        </div>
                        <p>Fostering the next generation of algorithmic thinkers.</p>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <a href="#hero" onClick={(e) => { e.preventDefault(); document.getElementById('hero').scrollIntoView({ behavior: 'smooth' }); }}>Home</a>
                        <a href="#agenda" onClick={(e) => { e.preventDefault(); document.getElementById('agenda').scrollIntoView({ behavior: 'smooth' }); }}>Agenda</a>
                        <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about').scrollIntoView({ behavior: 'smooth' }); }}>Objectives</a>
                    </div>

                    <div className="footer-contact">
                        <h4>Contact</h4>
                        <a href="https://maps.app.goo.gl/6gPLdHKwbb5vxvBe8" target="_blank" rel="noopener noreferrer" className="location-link">
                            <p>CapStone ALX Tech Hub, Lideta</p>
                            <p>Addis Ababa, Ethiopia</p>
                        </a>
                        <div className="social-links">
                            <a href="https://t.me/CodeLeagueET" target="_blank" rel="noopener noreferrer" className="social-icon">Telegram</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 Ethiopia National Competitive Programming Challenge. All rights reserved.</p>
                    <p className="built-by">Built for the Future of Ethiopia 🇪🇹</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
