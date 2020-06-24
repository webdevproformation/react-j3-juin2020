import React, { Component } from 'react';

class Compteur extends Component {
    state = {
        compte: 0
    }

    render() {
        return (
            <div>
                <span className="badge badge-primary m-2">
                    {this.props.count.compte}
                </span>
                {/** this.state.compte */}
                <button className="btn btn-success m-2"
                    onClick={() => { this.props.add(this.props.count) }}>
                    Augmenter
                </button>
                <button className="btn btn-warning m-2"
                    onClick={() => { this.props.decrease(this.props.count) }}>
                    Diminuer
                </button>
            </div>
        )
            ;
    }
}

export default Compteur;
// js pur et dur
// function toto(a){ }
// document.querySelector(".el").addEventListener("click" , () => {  toto("la valeur ") });
