import React, { Component } from 'react';
import reactLogo from "./logo.png"; // une image => un composant
import sante from './img/sante.jpg'; // Path = chemin 

class Menu extends Component {
    state = {
        url: "https://via.placeholder.com/150x50"
    }
    render() {
        return (
            <nav className="navbar navbar-expand navbar-dark bg-secondary text-light">
                <span className="navbar-brand">
                    <img src="logo/logo-webdevpro.png" alt="" style={{ width: 20 }} />
                </span>
                <span className="navbar-brand">
                    <img src={sante} alt="" style={{ width: 60 }} />
                </span>
                <span className="navbar-brand">
                    <img src={this.state.url} alt="" />
                </span>
                <ul className="navbar-nav">
                    <li className="nav-item m-2">Accueil</li>
                </ul>
            </nav>
        );
    }
}

export default Menu;
// une fois Menu créé =>
// vous devez appeler votre composant Menu dans App.js

// cas pratique 
// composant : Galerie
// 4 images que vous avez télécharger => stocker dans le dossier public 
// les images doivent être disposées l'un à côté de l'autre 
// la galerie sera en dessous du Composant Menu 
// utiliser le système de grille de bootstrap pour finaliser la mis en forme ! 
