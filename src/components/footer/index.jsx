import React from 'react';
import logo from '../../assets/img/Logo.svg';

const Footer = () => {
    return (
        <footer aria-label="Footer">
            <div className="footer">
                <img src={logo} alt="Logo de SlashEnd"></img>
                <div className="footer-social" aria-label="Réseaux sociaux">
                    <a href="https://www.linkedin.com/in/guillaume-lamarque-00a888231/" className="footer-social_links" aria-label="LinkedIn">
                        <i className="fa-brands fa-linkedin"></i>
                        LinkedIn
                    </a>
                    <a href="https://x.com/DouwdSlash" className="footer-social_links" aria-label="Twitter/X">
                        <i className="fa-brands fa-x-twitter"></i>
                        Twitter/X
                    </a>
                    <a href="https://discord.gg/HjrRC3Uje5" className="footer-social_links" aria-label="Discord">
                        <i className="fa-brands fa-discord"></i>
                        Discord
                    </a>
                </div>
                <h6>© 2025 - Guillaume Lamarque</h6>
            </div>
        </footer>
    );
};

export default Footer;