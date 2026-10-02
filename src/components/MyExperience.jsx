import "../styles/MyExperience.css";
import { educationData, experienceData, formatPeriod } from "../data/experience.js";

function MyExperience() {
  return (
    <section id="experience">
      <div className="background-title" aria-hidden="true">QUALITY</div>
      <h2 className="section-title">EXPERIENCE</h2>

      <div className="experience-content">
        <div className="experience">
          <h3>My Experience</h3>
          <div className="timeline">
            {experienceData.map((job) => (
              <div className="timeline-item" key={job.id}>
                <span className="timeline-icon"></span>
                <div className="timeline-content">
                  <h4>{job.role}</h4>
                  <p><strong>{job.company}</strong> | [{formatPeriod(job)}]</p>
                  {job.description.map((item, index) => (
                    <p key={index}>• {item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="education">
          <h3>My Education</h3>
          <div className="timeline">
            {educationData.map((edu) => (
              <div className="timeline-item" key={edu.id}>
                <span className="timeline-icon"></span>
                <div className="timeline-content">
                  <h4>{edu.degree}</h4>
                  <p><strong>{edu.institution}</strong> | [{edu.period}]</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyExperience;
