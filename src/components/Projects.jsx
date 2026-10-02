import "../styles/Projects.css";
import {useEffect, useRef} from "react";
import {asset} from "../utils/asset.js";
import {projects} from "../data/projects.js";

function Projects(){
    const scrollRef = useRef(null);

    useEffect(() => {
        const slider = scrollRef.current;
        let isDragging = false;
        let startX, scrollLeft;

        const mouseDownHandler = (e) => {
            e.preventDefault();
            isDragging = true;
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        };

        const mouseLeaveHandler = () => {
            isDragging = false;
        };

        const mouseUpHandler = () => {
            isDragging = false;
        };

        const mouseMoveHandler = (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 1.5;
            slider.scrollLeft = scrollLeft - walk;
        };

        slider.addEventListener("mousedown", mouseDownHandler);
        slider.addEventListener("mouseleave", mouseLeaveHandler);
        slider.addEventListener("mouseup", mouseUpHandler);
        slider.addEventListener("mousemove", mouseMoveHandler);

        return () => {
            slider.removeEventListener("mousedown", mouseDownHandler);
            slider.removeEventListener("mouseleave", mouseLeaveHandler);
            slider.removeEventListener("mouseup", mouseUpHandler);
            slider.removeEventListener("mousemove", mouseMoveHandler);
        };
    }, []);

    const scroll = (direction) => {
        const scrollAmount = 400;
        scrollRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    };

    return (
        <section id = "projects">
            <div className="background-title" aria-hidden="true">PROJECTS</div>
            <h2 className="section-title">MY PROJECTS</h2>
            <div className="projects-scrollbar">
                <button type="button" className="scroll-btn" aria-label="Scroll projects left" onClick={() => scroll('left')}>◀</button>
                <div className="projects-content" ref={scrollRef}>
                    {projects.map((project) => (
                        <article className="project-item" key={project.id}>
                            <h3 className="project-title">
                                {project.link ? (
                                    <a className="project-title-link" href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
                                ) : project.title}
                            </h3>
                            <p className="project-description">{project.description}</p>
                            <div className="technologies">
                                {project.technologies.map(({icon, name}) => (
                                    <div className="tech-icon" key={name}>
                                        <img src={asset(icon)} alt={name} title={name} width="32" height="32" loading="lazy"/>
                                    </div>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
                <button type="button" className="scroll-btn" aria-label="Scroll projects right" onClick={() => scroll('right')}>▶</button>
            </div>
        </section>
    )
}

export default Projects;
