import "../styles/MyExperience.css";

function MyExperience() {
    return (
        <section id="experience">
            <h1 className="background-title">QUALITY</h1>
            <h2 className="section-title">EXPERIENCE</h2>

            <div className="experience-content">
                <div className="experience">
                    <h3>My Experience</h3>
                    <div className="timeline">
                        <div className="timeline-item">
                            <span className="timeline-icon"></span>
                            <div className="timeline-content">
                                <h4>Software Developer</h4>
                                <p><strong>ISERVIT CBR SRL</strong> | [August 2023 - November 2023]</p>
                                <p>• Developed web applications using Spring Boot and React.</p>
                                <p>• Built and optimized REST API communication between microservices and integrated
                                    backend services with databases.</p>
                                <p>• Implemented real-time user notifications using WebSockets and RabbitMQ,
                                    ensuring efficient message delivery and system responsiveness.</p>
                                <p>• Gained experience in collaborative development, working in a team with tasks
                                    managed through Git workflows.</p>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <span className="timeline-icon"></span>
                            <div className="timeline-content">
                                <h4>Internship</h4>
                                <p><strong>ISERVIT CBR SRL</strong> | [July 2023 - August 2023]</p>
                                <p>• Developed full-stack applications using Java and React, gaining hands-on
                                    experience with React for the first time.</p>
                                <p>• Implemented JWT and OAuth security mechanisms to ensure secure authentication
                                    and authorization.</p>
                                <p>• Built REST API communication between microservices and integrated backend
                                    services with relational databases.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="education">
                    <h3>My Education</h3>
                    <div className="timeline">
                        <div className="timeline-item">
                            <span className="timeline-icon"></span>
                            <div className="timeline-content">
                                <h4>Master In E-Business</h4>
                                <p><strong>Babeș-Bolyai University</strong> | [2024 - 2026]</p>
                                {/*<p>[Description of your studies]</p>*/}
                            </div>
                        </div>

                        <div className="timeline-item">
                            <span className="timeline-icon"></span>
                            <div className="timeline-content">
                                <h4>Bachelor In Computer Science</h4>
                                <p><strong>Technical University of Cluj-Napoca</strong> | [2020 - 2024]</p>
                                {/*<p>[Description of your studies]</p>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MyExperience;
