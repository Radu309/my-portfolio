import { useEffect, useState } from 'react';
import '../styles/Header.css';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsVisible(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    const handleSmoothScroll = (e, id) => {
        e.preventDefault();
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        setIsMenuOpen(false);
    };

    return (
        <>
            <header className={`header ${isVisible ? 'visible' : ''}`}>
                <div className="logo">Radu-Sabin Neacă</div>

                <button className="menu-toggle" onClick={toggleMenu}>
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
                {
                    <nav className="nav-links desktop-nav">
                        <a href="#intro-screen" onClick={(e) => handleSmoothScroll(e, 'intro-screen')}>Home</a>
                        <a href="#about-me" onClick={(e) => handleSmoothScroll(e, 'about-me')}>About Me</a>
                        <a href="#experience" onClick={(e) => handleSmoothScroll(e, 'experience')}>Experience</a>
                        <a href="#skills" onClick={(e) => handleSmoothScroll(e, 'skills')}>Skills</a>
                        <a href="#projects" onClick={(e) => handleSmoothScroll(e, 'projects')}>Projects</a>
                        <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')}>Contact</a>
                    </nav>
                }
            </header>
            {isMenuOpen && (
                <div className="mobile-menu">
                        <nav className="nav-links">
                            <a href="#intro-screen" onClick={(e) => handleSmoothScroll(e, 'intro-screen')}>Home</a>
                            <a href="#about-me" onClick={(e) => handleSmoothScroll(e, 'about-me')}>About Me</a>
                            <a href="#experience" onClick={(e) => handleSmoothScroll(e, 'experience')}>Experience</a>
                            <a href="#skills" onClick={(e) => handleSmoothScroll(e, 'skills')}>Skills</a>
                            <a href="#projects" onClick={(e) => handleSmoothScroll(e, 'projects')}>Projects</a>
                            <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')}>Contact</a>
                        </nav>
                    </div>
            )}
        </>
    );
};

export default Header;
