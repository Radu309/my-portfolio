import '../styles/IntroScreen.css';
import { useEffect, useState } from "react";
import {asset} from "../utils/asset.js";

const titles = ["Master's Student", "Software Engineer"];
const typingSpeed = 150;
const deletingSpeed = 100;
const pauseTime = 1000;

function IntroScreen() {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [showScrollIcon, setShowScrollIcon] = useState(true);

    useEffect(() => {
        const currentTitle = titles[index];
        let delay = isDeleting ? deletingSpeed : typingSpeed;
        let step;

        if (!isDeleting && text === currentTitle) {
            delay = pauseTime;
            step = () => setIsDeleting(true);
        } else if (isDeleting && text === "") {
            step = () => {
                setIsDeleting(false);
                setIndex((prev) => (prev + 1) % titles.length);
            };
        } else {
            step = () => setText(currentTitle.substring(0, text.length + (isDeleting ? -1 : 1)));
        }

        const timeout = setTimeout(step, delay);
        return () => clearTimeout(timeout);
    }, [text, isDeleting, index]);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollIcon(window.scrollY < 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="intro-screen">
            <div className="intro-content">
                <img src={asset("profile-1.jpg")} alt="Radu Neacă" className="profile-image" width="400" height="400" />

                <div className="text-content">
                    <p>I'm</p>
                    <h1 className="name-title">Radu Neacă</h1>
                    <div className="headline-title">{text || " "}</div>
                    <div className="buttons">
                        <a className="cv-button" href={asset("Neaca_Radu-Sabin_cv.pdf")} download>Download CV</a>
                    </div>
                </div>
            </div>

            <div className={`scroll-icon ${showScrollIcon ? "" : "scroll-hidden"}`} aria-hidden="true">⌄</div>
        </section>
    );
}

export default IntroScreen;
