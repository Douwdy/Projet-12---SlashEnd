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
                <FontAwesomeIcon 
                    icon={faBars} 
                    onClick={toggleMenu} 
                    aria-label="Ouvrir le menu" 
                />
                <nav className={isOpen ? 'open' : ''} aria-label="Main navigation">
                    <a href="#index" onClick={toggleMenu} aria-label="Naviguer vers Accueil">Accueil</a>
                    <a href="#presentation" onClick={toggleMenu} aria-label="Naviguer vers Présentation">Présentation</a>
                    <a href="#skills" onClick={toggleMenu} aria-label="Naviguer vers Mon parcours">Mon parcours</a>
                    <a href="#products" onClick={toggleMenu} aria-label="Naviguer vers Produits">Produits</a>
                    <a href="#projects" onClick={toggleMenu} aria-label="Naviguer vers Projets">Projets</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;