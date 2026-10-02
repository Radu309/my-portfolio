import '../styles/AboutMe.css'
import {asset} from "../utils/asset.js";
import {getTotalExperienceMonths} from "../data/experience.js";

const formatExperience = (totalMonths) => {
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    const parts = [];

    if (years > 0) parts.push(`${years} ${years === 1 ? "year" : "years"}`);
    if (months > 0) parts.push(`${months} ${months === 1 ? "month" : "months"}`);

    return parts.join(" and ");
};

function AboutMe(){
    return (
        <section id="about-me">
            <div className="background-title" aria-hidden="true">ABOUT</div>
            <h2 className="section-title">ABOUT ME</h2>

            <div className="about-content">
                <div className="about-image">
                    <img src={asset("profile-2.jpg")} alt="Radu Neacă" width="250" height="250" loading="lazy"/>
                </div>

                <div className="about-text">
                    <p>
                        I hold a Bachelor’s degree in Computer Science, and I am currently working
                        as a Software Engineer at BETFAIR ROMANIA DEVELOPMENT SRL, where I collaborate
                        in building scalable and reliable applications. I am passionate about creating
                        efficient digital solutions, continuous learning, and working in environments
                        that combine innovation with teamwork.
                    </p>

                    <div className="about-details">
                        <div className="left">
                            <p><strong>Name:</strong> Neacă Radu-Sabin</p>
                            <p><strong>Degree:</strong> Computer Science</p>
                            <p><strong>Email:</strong> <a href="mailto:neaca.radu309@gmail.com">neaca.radu309@gmail.com</a></p>
                        </div>
                        <div className="right">
                            <p><strong>Country:</strong> Romania</p>
                            <p><strong>City:</strong> Cluj-Napoca</p>
                            <p><strong>Experience:</strong> {formatExperience(getTotalExperienceMonths())}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;
