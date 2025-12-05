import React, { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const targetDate = new Date('December 6, 2025 08:30:00').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
            } else {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000)
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="countdown-container">
            <div className="countdown-item">
                <span className="count">{timeLeft.days}</span>
                <span className="label">Days</span>
            </div>
            <div className="separator">:</div>
            <div className="countdown-item">
                <span className="count">{timeLeft.hours}</span>
                <span className="label">Hours</span>
            </div>
            <div className="separator">:</div>
            <div className="countdown-item">
                <span className="count">{timeLeft.minutes}</span>
                <span className="label">Mins</span>
            </div>
            <div className="separator">:</div>
            <div className="countdown-item">
                <span className="count">{timeLeft.seconds}</span>
                <span className="label">Secs</span>
            </div>
        </div>
    );
};

export default Countdown;
