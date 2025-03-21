import "../styles/Skills.css";
import {useEffect, useRef, useState} from "react";
import SkillItem from "./SkillItem.jsx";

function Skills() {
    const skillsRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (skillsRef.current) {
                const topPosition = skillsRef.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (topPosition < windowHeight - 100) {
                    setVisible(true);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="skills" ref={skillsRef}>
            <h1 className="background-title">SKILLS</h1>
            <h2 className="section-title">MY SKILLS</h2>

            <div className="skills-content">
                <div className="column">
                    <SkillItem skill="Java" percentage={90} color="#f89820" visible={visible}/>
                    <SkillItem skill="C#" percentage={70} color="#68217A" visible={visible}/>
                    <SkillItem skill="SQL" percentage={85} color="#00758F" visible={visible}/>
                    <SkillItem skill="Python" percentage={60} color="#3776AB" visible={visible}/>
                </div>

                <div className="column">
                    <SkillItem skill="React" percentage={80} color="#61DBFB" visible={visible}/>
                    <SkillItem skill="Javascript" percentage={70} color="#F7DF1E" visible={visible}/>
                    <SkillItem skill="HTML" percentage={75} color="#E34F26" visible={visible}/>
                    <SkillItem skill="CSS" percentage={65} color="#1572B6" visible={visible}/>
                </div>
            </div>
        </section>
    );
}

export default Skills;
