import React, { Component } from 'react';

import Like from './Like';

class Likes extends Component {
    state = {
        appreciation: [
            { id: 1, valeur: 2 },
            { id: 2, valeur: 0 },
            { id: 3, valeur: -5 }
        ]
    }
    augmenter(objet) {
        // clonage
        const newAppreciation = [...this.state.appreciation];

        // rechercher 
        const resultat = newAppreciation.find(item => item.id === objet.id);

        // index
        const index = newAppreciation.indexOf(resultat);

        // modification du clone
        newAppreciation[index].valeur++;
        // update du state

        this.setState({
            appreciation: newAppreciation
        });
    }

    diminuer(objet) {
        // Akram => forEach
        // clonage
        const newAppreciation = [...this.state.appreciation];

        newAppreciation.forEach((item) => {
            if (item.id === objet.id) {
                // index
                const index = newAppreciation.indexOf(item);

                // modification du clone
                newAppreciation[index].valeur--;

                // update du state
                this.setState({
                    appreciation: newAppreciation
                });
            }
        });

    }

    render() {
        return (
            <div>
                {this.state.appreciation.map(
                    item => <Like
                        key={item.id}
                        like={item}
                        augmenter={this.augmenter.bind(this)}
                        diminuer={this.diminuer.bind(this)}
                    />
                )}
            </div>

        );
    }
}

export default Likes;