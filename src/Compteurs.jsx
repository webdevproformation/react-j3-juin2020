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
        const index = this.state.compteurs.indexOf(compteur);
        const compteurClone = [...this.state.compteurs];
        compteurClone[index] = { ...objet }; //
        compteurClone[index].valeur++;
        //console.log(compteurClone);
        this.setState({ compteurs: compteurClone });
    }
    decrease(compteur) {
        console.log(compteur);
        //alert("j'ai cliqué sur decrease");
    }

    render() {
        return (
            <div>
                {this.state.compteurs.map(
                    item =>
                        <Compteur
                            key={item.id}
                            count={item}
                            add={this.add}
                            decrease={this.decrease}
                        />
                )}
            </div>
        );
    }
}

export default Compteurs;