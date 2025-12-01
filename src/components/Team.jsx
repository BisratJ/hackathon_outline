import React from 'react';
import './Team.css';

const Team = () => {
    const judges = [
        { name: "Kibrnew Gedamu", role: "Lead Judge" },
        { name: "Solomon Abate", role: "Tech Lead" },
        { name: "Eyouel Melkamu", role: "Reviewer" },
        { name: "Abenezer Workneh", role: "Tech Lead" },
        { name: "Nardos Wehabe", role: "Reviewer" }
    ];

    const organizers = [
        { name: "Abenezer Mulugeta", role: "Lead Organizer" },
        { name: "Kidus Guade", role: "Check-in Lead" },
        { name: "Ermias Ayele", role: "Floor Proctor" },
        { name: "Estifanos FikereMariam", role: "Swag/Setup" },
        { name: "Mikiyas Alemu", role: "Logistics" },
        { name: "Bisrat Ashagre", role: "Media" }
    ];

    return (
        <section className="team">
            <div className="container">
                <h2 className="section-title">The <span className="text-highlight">Team</span></h2>

                <div className="team-category">
                    <h3 className="category-title">Reviewers & Judges <span className="subtitle">(The Brains)</span></h3>
                    <div className="team-grid">
                        {judges.map((member, index) => (
                            <div key={index} className="team-card">
                                <div className="avatar-placeholder">{member.name.charAt(0)}</div>
                                <h4>{member.name}</h4>
                                <p>{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="team-category">
                    <h3 className="category-title">Organizers & Logistics <span className="subtitle">(The Engine)</span></h3>
                    <div className="team-grid">
                        {organizers.map((member, index) => (
                            <div key={index} className="team-card">
                                <div className="avatar-placeholder secondary">{member.name.charAt(0)}</div>
                                <h4>{member.name}</h4>
                                <p>{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
