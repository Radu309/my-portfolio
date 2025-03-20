import '../styles/IntroScreen.css';
import { useEffect, useState } from "react";

function IntroScreen() {
    const titles = ["Student", "Software Engineering"];
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [showScrollIcon, setShowScrollIcon] = useState(true);
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const pauseTime = 1000;

    useEffect(() => {
        const handleTyping = () => {
            const currentTitle = titles[index];
            if (!isDeleting) {
                setText(currentTitle.substring(0, text.length + 1));
                if (text === currentTitle) {
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            } else {
                setText(currentTitle.substring(0, text.length - 1));
                if (text === "") {
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % titles.length);
                }
            }
        };

        const timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(timeout);
    }, [text, isDeleting, index]);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollIcon(window.scrollY < 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const downloadCV = () => {
        const link = document.createElement("a");
        link.href = "/Neaca_Radu-Sabin_cv.pdf";
        link.download = "Neaca_Radu-Sabin_cv.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="intro-screen">
            <div className="intro-content">
                <img src="/profile-1.jpg" alt="Profile" className="profile-image" />

                <div className="text-content">
                    <p className="first-world">I'm</p>
                    <h1 className="name-title">Radu Neacă</h1>
                    <h1 className="headline-title">{text || "\u00A0"}</h1>
                    <div className="buttons">
                        <button className="cv-button" onClick={downloadCV}>Download CV</button>
                    </div>
                </div>
            </div>

            <div className={`scroll-icon ${showScrollIcon ? "" : "scroll-hidden"}`}>⌄</div>
        </section>
    );
}

export default IntroScreen;
