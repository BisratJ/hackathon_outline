import React from 'react';
import './Hero.css';
import Countdown from './Countdown';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Hero = () => {
    const scrollToAgenda = () => {
        const element = document.getElementById('agenda');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero">
            <div className="hero-background">
                <div className="grid-overlay"></div>
                <div className="glow-orb"></div>
            </div>

            <div className="hero-content">
                <div className="hero-logos">
                    <img src="/assets/alx-logo.png" alt="ALX" className="logo-alx" />
                    <div className="logo-divider"></div>
                    <img src="/assets/codeleague-logo.png" alt="CodeLeague" className="logo-codeleague" />
                </div>
                <div className="hero-badge">December 6, 2025 • Addis Ababa</div>
                <h1 className="hero-title">
                    Ethiopia's National <br />
                    <span className="text-gradient">Competitive Programming</span> <br />
                    Challenge
                </h1>

                <Countdown />

                <div className="hero-details">
                    <a href="https://maps.app.goo.gl/6gPLdHKwbb5vxvBe8" target="_blank" rel="noopener noreferrer" className="detail-item detail-link">
                        <div className="icon-box">
                            <FaMapMarkerAlt />
                        </div>
                        <div className="detail-text">
                            <span className="label">Location</span>
                            <span className="value">CapStone ALX Tech Hub, Lideta</span>
                        </div>
                    </a>
                    <div className="detail-item">
                        <div className="icon-box">
                            <FaClock />
                        </div>
                        <div className="detail-text">
                            <span className="label">Time</span>
                            <span className="value">8:30 AM – 3:30 PM</span>
                        </div>
                    </div>
                </div>

                <div className="hero-actions">
                    <button className="btn btn-secondary" onClick={scrollToAgenda}>View Agenda</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
