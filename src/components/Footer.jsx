import "../styles/Footer.css";
import {asset} from "../utils/asset.js";

function Footer() {
    return (
        <footer id="footer">
            <div className="container">
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/radu-neaca/" target="_blank" rel="noopener noreferrer">
                        <img src={asset("linkedin.svg")} alt="LinkedIn"/>
                    </a>
                    <a href="https://github.com/Radu309" target="_blank" rel="noopener noreferrer">
                        <img src={asset("github.svg")} alt="GitHub"/>
                    </a>
                    <a href="https://www.instagram.com/radu309/" target="_blank" rel="noopener noreferrer">
                        <img src={asset("instagram.svg")} alt="Instagram"/>
                    </a>
                    <a href="mailto:neaca.radu309@gmail.com">
                        <img src={asset("mail.png")} alt="Email"/>
                    </a>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} <strong>Radu Neacă</strong>. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
