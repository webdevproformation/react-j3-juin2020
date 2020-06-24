// Compteurs.jsx
import React, { Component } from 'react';
import Compteur from "./Compteur";

class Compteurs extends Component {
    state = {
        compteurs: [
            { id: 1, compte: 200 }, // this.props.count.compte == 200 // this.props.count =  { id: 1, compte: 200 }
            { id: 2, compte: -300 },
            { id: 3, compte: -12 },
            { id: 4, compte: 0 },
            { id: 5, compte: 10 }
        ]
    }

    add(compteur) {
        // clone du tableau compteurs stocké dans le state
        const newCompteurs = [...this.state.compteurs];

        // est qu'il y a dans newCompteurs un item qui a la valeur id = 1
        // .find() => parcour le tableau newCompteurs et retour l'élément si trouvé sinon -1
        const resultat = newCompteurs.find(function (item) {
            return item.id == compteur.id;
        });

        // récupérer l'index
        const index = newCompteurs.indexOf(resultat);

        // effectue la modification
        newCompteurs[index].compte++;

        // mis à jour du state 
        this.setState({
            compteurs: newCompteurs
        });
    }


    decrease(compteur) {
        // clone du tableaux compteurs stocké dans state
        const newCompteurs = [...this.state.compteurs];

        // rechercher si il y a un compteur qui a l'id sélectionné

        const resultat = newCompteurs.find(function (item) {
            return item.id === compteur.id;
        });

        // récupérer l'index 
        const index = newCompteurs.indexOf(resultat);

        // modification du clone
        newCompteurs[index].compte--;

        // mis à jour du state
        this.setState({
            compteurs: newCompteurs
        })
    }

    render() {
        return (
            <div>
                {this.state.compteurs.map(
                    item =>
                        <Compteur
                            key={item.id}
                            count={item}
                            add={this.add.bind(this)}
                            decrease={this.decrease.bind(this)}
                        />
                )}
            </div>
        );
    }
}

export default Compteurs;