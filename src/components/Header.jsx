import { useEffect, useState } from 'react';
import '../styles/Header.css';
import { Menu, X } from 'lucide-react';

const navItems = [
    { id: 'intro-screen', label: 'Home' },
    { id: 'about-me', label: 'About Me' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
];

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsVisible(window.scrollY > 50);
        handleScroll();
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

    const links = navItems.map(({ id, label }) => (
        <a key={id} href={`#${id}`} onClick={(e) => handleSmoothScroll(e, id)}>{label}</a>
    ));

    return (
        <>
            <header className={`header ${isVisible ? 'visible' : ''}`}>
                <div className="logo">Radu-Sabin Neacă</div>

                <button
                    className="menu-toggle"
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
                <nav className="nav-links desktop-nav" aria-label="Main">{links}</nav>
            </header>
            {isMenuOpen && (
                <div className="mobile-menu">
                    <nav className="nav-links" aria-label="Mobile">{links}</nav>
                </div>
            )}
        </>
    );
};

export default Header;
