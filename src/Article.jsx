import React, { Component } from 'react';
import Like from "./Like";

class Article extends Component {
    state = {
        id: 1,
        titre: "article 1",
        img: "logo/logo-webdevpro.png", // appeler une image qui est stokée sur le dossier public
        contenu: "lorem ipsum",
        appreciation: {
            valeur: 10
        },
        commentaires: [
            { id: 1, nom: "Alain", texte: "Hello" }
        ]

    }

    augmenter(objet) {

        objet.valeur++;

        this.setState({
            appreciation: objet
        });
    }

    diminuer(objet) {

        objet.valeur--;

        this.setState({
            appreciation: objet
        })
    }
    render() {
        return (
            <article className="card p-2" style={{ width: 250 }} >
                <h2>{this.state.titre}</h2>
                <img src={this.state.img} alt="" />
                <p>{this.state.contenu}</p>
                <Like
                    like={this.state.appreciation}
                    augmenter={this.augmenter.bind(this)}
                    diminuer={this.diminuer.bind(this)}
                />
            </article >
        );
    }
}

export default Article;

// shell => moyen de lancer des logiciels mais en ligne de commande
// windows => plusieurs shell cmd / powershell / bash / node
// récupérer dans ces différents terminaux tu vas saisir des commandes : cd / pwd / npm / create-react-app

// en fonction du terminal que tu lances => PATH 
// powershell => npm => je connais pas ?????
// cmd => npm => ok je fais ce tu me demandes 

// code .