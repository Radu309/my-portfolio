import "../styles/Projects.css";
import {useEffect, useRef} from "react";

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
        const { current } = scrollRef;
        const scrollAmount = 400;
        if (direction === 'left') {
            current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section id = "projects">
            <h1 className="background-title">PROJECTS</h1>
            <h2 className="section-title">MY PROJECTS</h2>
            <div className="projects-scrollbar">
                <div className="scroll-btn" onClick={() => scroll('left')}>◀</div>
                <div className="projects-content" ref={scrollRef}>
                    <div className="project-item">
                        <h3 className="project-title">Real-Time Game Shop</h3>
                        <p className="project-description">
                            Developed a secure online game store featuring real-time interactions and microservices
                            architecture.
                            Built using ASP.NET Core with MVC design pattern, integrated SignalR for live updates,
                            and
                            utilized gRPC for efficient communication between services.</p>
                        <div className="technologies">
                            <a className="tech-icon">
                                <img src="/my-portfolio/c-sharp.png" alt="tech-icon"/>
                            </a>
                            <div className="tech-icon">
                                <img src="/my-portfolio/postgre.png" alt="tech-icon"/>
                            </div>
                            <div className="tech-icon">
                                <img src="/my-portfolio/react.png" alt="tech-icon"/>
                            </div>
                            <div className="tech-icon">
                                <img src="/my-portfolio/.net.png" alt="tech-icon"/>
                            </div>
                        </div>
                    </div>
                    <div className="project-item">
                        <h3 className="project-title">Pancreas and Tumor Segmentation</h3>
                        <p className="project-description">
                            Developed a medical imaging application for accurate segmentation of pancreas and
                            pancreatic
                            tumors from CT scans.
                            Implemented using PyTorch and U-Net architecture to achieve precise and efficient image
                            segmentation.</p>
                        <div className="technologies">
                            <div className="tech-icon">
                                <img src="/my-portfolio/python.png" alt="tech-icon"/>
                            </div>
                            <div className="tech-icon">
                                <img src="/my-portfolio/artificial-intelligence.png" alt="tech-icon"/>
                            </div>
                        </div>
                    </div>
                    <div className="project-item">
                        <h3 className="project-title">Integrated Energy Management System</h3>
                        <p className="project-description">
                            Developed an integrated energy management system by connecting secure microservices
                            deployed
                            on virtualized infrastructure.
                            Implemented real-time communication with WebSockets and RabbitMQ for efficient message
                            handling.</p>
                        <div className="technologies">
                            <div className="tech-icon">
                                <img src="/my-portfolio/java.png" alt="tech-icon"/>
                            </div>
                            <div className="tech-icon">
                                <img src="/my-portfolio/postgre.png" alt="tech-icon"/>
                            </div>
                            <div className="tech-icon">
                                <img src="/my-portfolio/cloud.png" alt="tech-icon"/>
                            </div>
                            <div className="tech-icon">
                                <img src="/my-portfolio/react.png" alt="tech-icon"/>
                            </div>
                        </div>
                    </div>
                    <div className="project-item">
                        <h3 className="project-title">Photographer Portfolio Website</h3>
                        <p className="project-description">
                            Developed a static portfolio website for a photographer to showcase their work and
                            services.
                            Built using React and hosted securely on Cloudflare.</p>
                        <p>{"\u00A0"}</p>
                        <p>{"\u00A0"}</p>
                        <div className="technologies">
                            <div className="tech-icon">
                                <img src="/my-portfolio/react.png" alt="tech-icon"/>
                            </div>
                            <div className="tech-icon">
                                <img src="/my-portfolio/java-script.png" alt="tech-icon"/>
                            </div>
                            <div className="tech-icon">
                                <img src="/my-portfolio/html.png" alt="tech-icon"/>
                            </div>
                            <div className="tech-icon">
                                <img src="/my-portfolio/cloud.png" alt="tech-icon"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="scroll-btn" onClick={() => scroll('right')}>▶</div>
            </div>
        </section>
    )
}

export default Projects;