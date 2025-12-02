import React from 'react';
import './Agenda.css';

const Agenda = () => {
    const schedule = [
        {
            time: "9:00 AM – 9:45 AM",
            phase: "Phase 1: Arrival & Setup",
            title: "Registration & Team Check-in",
            details: "Check IDs, assign team tables/IDs, distribute Wi-Fi credentials & swag. (45 min for 100-150 participants)",
            team: "Kidus Guade, Estifanos FikereMariam, Mikiyas Alemu, ALX Team",
            type: "logistics"
        },
        {
            time: "9:45 AM – 10:15 AM",
            phase: "Phase 1: Opening",
            title: "Opening Ceremony",
            details: "Welcome speech, 'Why Competitive Programming Matters', team introductions.",
            team: "Host: Amanuel Abel | Speaker: Abenezer Mulugeta | ALX Team",
            type: "ceremony"
        },
        {
            time: "10:15 AM – 10:35 AM",
            phase: "Phase 2: Technical Prep",
            title: "Technical Orientation & Rules",
            details: "Grading system explanation (Domjudge/HackerRank), plagiarism & AI rules, frozen scoreboard logic.",
            team: "Solomon Abate, Abenezer Workneh, ALX Team",
            type: "technical"
        },
        {
            time: "10:35 AM – 11:00 AM",
            phase: "Phase 2: Technical Prep",
            title: "Practice Round (Mock Contest)",
            details: "25-minute ultra-easy problem to ensure every team can submit code successfully.",
            team: "All Organizers, ALX Team (floor support)",
            type: "technical"
        },
        {
            time: "11:00 AM – 2:00 PM",
            phase: "Phase 3: The Contest",
            title: "🚀 MAIN CONTEST (3 Hours)",
            details: "Live scoreboard projected. Strict exam conditions. Tech team resolves system issues only (no hints).",
            team: "Proctors: Bisrat Ashagre, Ermias Ayele, ALX Team | Judges: Kibrnew, Solomon, Eyouel",
            type: "contest"
        },
        {
            time: "1:00 PM",
            phase: "Phase 3: The Contest",
            title: "❄️ SCOREBOARD FREEZE",
            details: "Scoreboard frozen. Teams cannot see rank updates for the final hour to build suspense.",
            team: "Tech Lead: Abenezer Workneh | ALX Team",
            type: "contest"
        },
        {
            time: "2:00 PM – 3:00 PM",
            phase: "Phase 4: Break & Judging",
            title: "Lunch Break",
            details: "Food served, networking time. Judges finalize results and run plagiarism checks.",
            team: "Logistics: Kidus Guade, Mikiyas Alemu, ALX Team | Judges: Kibrnew, Solomon, Eyouel",
            type: "break"
        },
        {
            time: "3:00 PM – 3:30 PM",
            phase: "Phase 5: Learning",
            title: "Winner Solution Presentations",
            details: "Top 3 teams present their solutions and approach to key problems.",
            team: "Moderator: Amanuel Abel | ALX Team",
            type: "education"
        },
        {
            time: "3:30 PM – 4:00 PM",
            phase: "Phase 5: Learning",
            title: "Upsolve Session (Masterclass)",
            details: "Walkthrough of the hardest problems: brute force vs. optimized solutions, Q&A on algorithms.",
            team: "Reviewers: Eyouel Melkamu, Nardos Wehabe, Solomon Abate, ALX Team",
            type: "education"
        },
        {
            time: "4:00 PM – 4:30 PM",
            phase: "Phase 6: Closing",
            title: "Awards & Closing Ceremony",
            details: "Acknowledgments, winner announcements (Open Division first, then Elite), prize distribution.",
            team: "Host: Amanuel Abel | Awards: Abenezer Mulugeta | ALX Team",
            type: "ceremony"
        },
        {
            time: "4:30 PM – 4:45 PM",
            phase: "Phase 6: Closing",
            title: "Community Photos & Networking",
            details: "Group photos, Telegram channel promotion, final networking.",
            team: "All Organizers, ALX Team",
            type: "networking"
        },
        {
            time: "4:45 PM – 5:00 PM",
            phase: "Phase 6: Closing",
            title: "Venue Clear Out",
            details: "Participants departure, equipment pack-up.",
            team: "All Organizers, ALX Team",
            type: "logistics"
        }
    ];

    return (
        <section className="agenda">
            <div className="container">
                <h2 className="section-title">Event <span className="text-highlight">Agenda</span></h2>
                <p className="agenda-subtitle">Optimized schedule for 100-150 participants</p>
                <div className="timeline">
                    {schedule.map((item, index) => (
                        <div key={index} className={`timeline-item ${item.type}`}>
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <span className="time-badge">{item.time}</span>
                                <h3 className="item-title">{item.title}</h3>
                                <p className="item-details">{item.details}</p>
                                <div className="team-info">
                                    <span className="team-label">Team:</span>
                                    <span className="team-members">{item.team}</span>
                                </div>
                                <span className="phase-tag">{item.phase}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Agenda;
