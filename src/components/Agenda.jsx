import React from 'react';
import './Agenda.css';

const Agenda = () => {
    const schedule = [
        {
            time: "8:30 AM – 9:00 AM",
            phase: "Phase 1: Arrival & Setup",
            title: "Team Check-in",
            details: "Check IDs, assign team tables/IDs, distribute Wi-Fi credentials & swag.",
            team: "Solomon Abate, Estifanos FikereMariam, Mikiyas Alemu, ALX Team",
            type: "logistics"
        },
        {
            time: "9:00 AM – 9:15 AM",
            phase: "Phase 1: Opening",
            title: "Opening Ceremony",
            details: "Welcome speech, 'Why Competitive Programming Matters', team introductions.",
            team: "Host: Amanuel Abel | Speaker: Nardos Wehabe | ALX Team",
            type: "ceremony"
        },
        {
            time: "9:15 AM – 9:30 AM",
            phase: "Phase 2: Technical Prep",
            title: "Technical Orientation & Rules",
            details: "Grading system explanation (Domjudge/HackerRank), plagiarism & AI rules, frozen scoreboard logic.",
            team: "Abenezer Workneh, ALX Team",
            type: "technical"
        },
        {
            time: "9:30 AM – 12:45 PM",
            phase: "Phase 3: The Contest",
            title: "🚀 MAIN CONTEST (3 Hours 15 Minutes)",
            details: "Live scoreboard projected. Strict exam conditions. Tech team resolves system issues only (no hints).",
            team: "Proctors: Bisrat Ashagre, ALX Team | Judges: Eyouel Melkamu, Nardos Wehabe",
            type: "contest"
        },
        {
            time: "12:15 PM",
            phase: "Phase 3: The Contest",
            title: "❄️ SCOREBOARD FREEZE",
            details: "Scoreboard frozen. Teams cannot see rank updates for the final 30 minutes to build suspense.",
            team: "Tech Lead: Abenezer Workneh | ALX Team",
            type: "contest"
        },
        {
            time: "12:45 PM – 1:05 PM",
            phase: "Phase 4: Break & Judging",
            title: "Lunch Break",
            details: "Food served, networking time. Judges finalize results and run plagiarism checks.",
            team: "Logistics: Kidus Guade, Mikiyas Alemu, Abenezer Workneh, Kibrnew Gedamu, Solomon Abate, ALX Team | Judges: Eyouel Melkamu, Nardos Wehabe",
            type: "break"
        },
        {
            time: "1:05 PM – 1:25 PM",
            phase: "Phase 5: Learning",
            title: "Panel Discussion & Experience Sharing",
            details: "Quick panel discussion on competitive programming experiences and insights.",
            team: "Panelists: Amanuel Abel, Nardos Wehabe",
            type: "education"
        },
        {
            time: "1:30 PM – 2:00 PM",
            phase: "Phase 5: Learning",
            title: "Solutions By First Solvers & Upsolving",
            details: "Top teams present their solutions. Walkthrough of the hardest problems with optimized approaches.",
            team: "Moderator: Amanuel Abel | Reviewers: Eyouel Melkamu, Nardos Wehabe, Solomon Abate, ALX Team",
            type: "education"
        },
        {
            time: "2:00 PM – 2:30 PM",
            phase: "Phase 6: Closing",
            title: "Award Ceremony",
            details: "Acknowledgments, winner announcements (Open Division first, then Elite), prize distribution.",
            team: "Host: Amanuel Abel | Awards: Abenezer Mulugeta | ALX Team",
            type: "ceremony"
        },
        {
            time: "2:30 PM – 3:00 PM",
            phase: "Phase 6: Closing",
            title: "Photoshoot Time & Networking",
            details: "Group photos, Telegram channel promotion, final networking.",
            team: "All Organizers, ALX Team",
            type: "networking"
        },
        {
            time: "3:00 PM – 3:30 PM",
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
