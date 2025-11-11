import '../styles/AboutMe.css'
import {useEffect, useRef} from "react";

function AboutMe(){
    const paragraphRef = useRef(null);

    useEffect(() => {
        const formatText = () => {
            const paragraph = paragraphRef.current;
            const originalText = paragraph.getAttribute("data-original-text");

            if (!originalText) {
                paragraph.setAttribute("data-original-text", paragraph.innerText);
            }

            const words = paragraph.getAttribute("data-original-text").split(" ");
            paragraph.innerHTML = "";
            let line = "";

            words.forEach((word) => {
                const testLine = line + word + " ";
                paragraph.innerHTML = testLine;

                if (paragraph.scrollHeight > paragraph.clientHeight) {
                    paragraph.innerHTML = line.trim() + "<br/>";
                    line = word + " ";
                } else {
                    line = testLine;
                }
            });

            paragraph.innerHTML = paragraph.innerHTML.trim();
        };

        formatText();
        window.addEventListener("resize", formatText);
        return () => window.removeEventListener("resize", formatText);
    }, []);


    return (
        <section id="about-me">
            <h1 className="background-title">ABOUT</h1>
            <h2 className="section-title">ABOUT ME</h2>

            <div className="about-content">
                <div className="about-image">
                    <img src="/my-portfolio/profile-2.jpg" alt="Profile"/>
                </div>

                <div className="about-text">
                    <h3></h3>
                    <p  ref={paragraphRef}>
                        I hold a Bachelor’s degree in Computer Science, and I am currently pursuing
                        a Master’s degree in E-Business. I am working as a Software Engineering
                        Intern at BETFAIR ROMANIA DEVELOPMENT SRL, where I collaborate in
                        building scalable and reliable applications. I am passionate about creating
                        efficient digital solutions, continuous learning, and working in environments
                        that combine innovation with teamwork.
                    </p>

                    <div className="about-details">
                        <div className="left">
                            <p><strong>Name:</strong> Neacă Radu-Sabin</p>
                            <p><strong>Degree:</strong> Computer Science</p>
                            <p><strong>Phone:</strong> (+40) 773335292</p>
                            <p><strong>Email:</strong> neaca.radu309@gmail.com</p>
                        </div>
                        <div className="right">
                            <p><strong>Country:</strong> Romania</p>
                            <p><strong>City:</strong> Cluj-Napoca</p>
                            <p><strong>Experience:</strong> 5 months</p>
                            <p><strong>Birthday:</strong> 30 september 2001</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;