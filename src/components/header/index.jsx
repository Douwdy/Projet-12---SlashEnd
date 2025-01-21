import React from 'react';
import logo from '../../assets/img/Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <div>
                <img src={logo} alt="Logo de SlashEnd"/>
            </div>
            <div className="header">
                <FontAwesomeIcon icon={faBars} onClick={toggleMenu} />
                <nav className={isOpen ? 'open' : ''}>
                    <a href="#index" onClick={toggleMenu}>Accueil</a>
                    <a href="#presentation" onClick={toggleMenu}>Présentation</a>
                    <a href="#skills" onClick={toggleMenu}>Mon parcours</a>
                    <a href="#products" onClick={toggleMenu}>Produits</a>
                    <a href="#projects" onClick={toggleMenu}>Projets</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;