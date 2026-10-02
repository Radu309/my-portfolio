import "../styles/Skills.css";
import {useEffect, useRef, useState} from "react";
import SkillItem from "./SkillItem.jsx";

// Skills are listed strongest first within each group.
const skillGroups = [
    {
        title: "Backend",
        skills: [
            { skill: "Java", percentage: 90, color: "#f89820" },
            { skill: "Spring Boot", percentage: 85, color: "#6DB33F" },
            { skill: "SQL", percentage: 85, color: "#00758F" },
            { skill: "C# / .NET", percentage: 70, color: "#68217A" },
            { skill: "Python", percentage: 60, color: "#3776AB" },
        ],
    },
    {
        title: "Frontend",
        skills: [
            { skill: "React", percentage: 80, color: "#61DBFB" },
            { skill: "HTML", percentage: 75, color: "#E34F26" },
            { skill: "JavaScript", percentage: 70, color: "#F7DF1E" },
            { skill: "TypeScript", percentage: 65, color: "#3178C6" },
            { skill: "CSS", percentage: 65, color: "#1572B6" },
        ],
    },
    {
        title: "DevOps & Tools",
        skills: [
            { skill: "Git", percentage: 80, color: "#F05032" },
            { skill: "Docker", percentage: 70, color: "#2496ED" },
            { skill: "GitHub Actions", percentage: 70, color: "#24292F" },
            { skill: "AWS", percentage: 60, color: "#FF9900" },
            { skill: "RabbitMQ", percentage: 60, color: "#FF6600" },
        ],
    },
];

function Skills() {
    const skillsRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setVisible(true);
                observer.disconnect();
            }
        }, { rootMargin: "0px 0px -100px 0px" });

        observer.observe(skillsRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="skills" ref={skillsRef}>
            <div className="background-title" aria-hidden="true">SKILLS</div>
            <h2 className="section-title">MY SKILLS</h2>

            <div className="skills-content">
                {skillGroups.map((group) => (
                    <div className="column" key={group.title}>
                        <h3>{group.title}</h3>
                        {group.skills.map((item) => (
                            <SkillItem key={item.skill} {...item} visible={visible}/>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
