import React from 'react';
import logo from '../../assets/img/Logo.svg';


const Header = () => {
    return (
        <header>
            <div>
                <img src={logo} alt="Logo de SlashEnd"/>
            </div>
            <div className="header_2">
                <a href="#index">Accueil</a>
                <a href="#presentation">Présentation</a>
                <a href="#products">Produits</a>
                <a href="#projects">Projets</a>
            </div>
        </header>
    );
};

export default Header;