import React from 'react';
import './About.css';

const About = () => {
    const objectives = [
        {
            title: "Identify Talent",
            description: "Rank the top algorithmic thinkers in Ethiopia through rigorous problem-solving challenges.",
            icon: "🎯",
            color: "var(--color-primary)"
        },
        {
            title: "Community Building",
            description: "Foster a vibrant culture of competitive programming (ICPC style) and peer learning.",
            icon: "🤝",
            color: "var(--color-secondary)"
        },
        {
            title: "Education",
            description: "The 'Upsolve' session is critical—we don't just test; we teach how to solve the problems missed.",
            icon: "📚",
            color: "var(--color-accent)"
        }
    ];

    return (
        <section className="about">
            <div className="container">
                <h2 className="section-title">Strategic <span className="text-highlight">Objectives</span></h2>
                <div className="objectives-grid">
                    {objectives.map((obj, index) => (
                        <div key={index} className="objective-card" style={{ '--card-accent': obj.color }}>
                            <div className="card-icon">{obj.icon}</div>
                            <h3>{obj.title}</h3>
                            <p>{obj.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
