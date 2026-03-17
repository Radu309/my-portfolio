import React, { useEffect } from "react";
import "../styles/MyExperience.css";

const experienceData = [
  {
    id: 1,
    role: "Software Engineering Intern",
    company: "BETFAIR ROMANIA DEVELOPMENT SRL",
    startDate: "2025-08",
    endDate: "Present",
    displayDate: "August 2025 - Present",
    description: [
      "Collaborating in the development of web applications using React.",
      "Working with Jenkins and GitHub Actions for continuous integration and delivery.",
      "Contributing to CI/CD pipelines, improving deployment efficiency and reliability.",
      "Participating in code reviews and agile ceremonies within an international team.",
    ],
  },
  {
    id: 2,
    role: "Software Developer",
    company: "ISERVIT CBR SRL",
    startDate: "2023-08",
    endDate: "2023-10",
    displayDate: "August 2023 - November 2023",
    description: [
      "Developed web applications using Spring Boot and React.",
      "Built and optimized REST API communication between microservices and integrated backend services with databases.",
      "Implemented real-time user notifications using WebSockets and RabbitMQ...",
    ],
  },
  {
    id: 3,
    role: "Internship",
    company: "ISERVIT CBR SRL",
    startDate: "2023-07",
    endDate: "2023-07",
    displayDate: "July 2023 - August 2023",
    description: [
      "Developed full-stack applications using Java and React, gaining hands-on experience with React for the first time.",
      "Implemented JWT and OAuth security mechanisms...",
    ],
  },
];

const educationData = [
  {
    id: 1,
    degree: "Master In E-Business",
    institution: "Babeș-Bolyai University",
    period: "2024 - 2026",
  },
  {
    id: 2,
    degree: "Bachelor In Computer Science",
    institution: "Technical University of Cluj-Napoca",
    period: "2020 - 2024",
  },
];
const calculateTotalExperience = (data) => {
  let totalMonths = 0;
  const currentDate = new Date();

  data.forEach((job) => {
    const startDate = new Date(job.startDate);
    
    const endDate = job.endDate === "Present" ? currentDate : new Date(job.endDate);

    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth();
    const endYear = endDate.getFullYear();
    const endMonth = endDate.getMonth();

    const monthsDiff = (endYear - startYear) * 12 + (endMonth - startMonth);
    
    totalMonths += (monthsDiff + 1);
  });

  return totalMonths;
};

function MyExperience({ setExperience }) {
  
  useEffect(() => {
    const finalCalculatedMonths = calculateTotalExperience(experienceData);
    
    if (setExperience) {
      setExperience(finalCalculatedMonths);
    }
  }, [setExperience]);

  return (
    <section id="experience">
      <h1 className="background-title">QUALITY</h1>
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
                  <p><strong>{job.company}</strong> | [{job.displayDate}]</p>
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