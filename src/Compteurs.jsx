// Compteurs.jsx
import React, { Component } from 'react';
import Compteur from "./Compteur";

class Compteurs extends Component {
    state = {
        compteurs: [
            { id: 1, compte: 200 },
            { id: 2, compte: -300 },
            { id: 3, compte: -12 },
            { id: 4, compte: 0 },
            { id: 5, compte: 10 }
        ]
    }

    add() {
        alert("j'ai cliqué sur add")
    }
    decrease() {
        alert("j'ai cliqué sur decrease");
    }

    render() {
        return (
            <div>
                {this.state.compteurs.map(
                    item =>
                        <Compteur
                            key={item.id}
                            count={item.compte}
                            add={this.add}
                            decrease={this.decrease}
                        />
                )}
            </div>
        );
    }
}

export default Compteurs;