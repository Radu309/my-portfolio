import "../styles/Footer.css";

function Footer() {
    return (
        <footer id="footer">
            <div className="container">
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/radu-neaca/" target="_blank">
                        <img src="public/linkedin.svg" alt="Linkedin"/>
                    </a>
                    <a href="https://github.com/Radu309" target="_blank">
                        <img src="public/github.svg" alt="Github"/>
                    </a>
                    <a href="https://www.instagram.com/radu309/" target="_blank">
                        <img src="public/instagram.svg" alt="Instagram"/>
                    </a>
                </div>

                <div className="footer-bottom">
                    <p>© <strong>Radu Neacă</strong>. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
