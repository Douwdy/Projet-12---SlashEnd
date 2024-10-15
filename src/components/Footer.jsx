import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <p>Copyright © - Guillaume Lamarque</p>
            <div className="footer-links" aria-label="Lien de contact">
                <a href="https://www.linkedin.com/in/guillaume-lamarque-4b7b4b1b3/" aria-label="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin} size='2x'/>
                </a>
                <a href="https://www.github.com/GuillaumeLamarque" aria-label="Mail">
                    <FontAwesomeIcon icon={faGithub} size='2x'/>
                </a>
                <a href="mailto:contact.slashend@gmail.com" aria-label="Mail">
                    <FontAwesomeIcon icon={faEnvelope} size='2x'/>
                </a>
            </div>
        </footer>
    );
};

export default Footer;