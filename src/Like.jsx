import React, { Component } from 'react';

/* class Like extends Component {

    render() {
        return (
            <div>
                Like
                <span className="badge badge-danger m-2">{this.props.like.valeur}</span>
                <button className="btn btn-info m-2" onClick={() => { this.props.augmenter(this.props.like) }}>+</button>
                <button className="btn btn-danger m-2" onClick={() => { this.props.diminuer(this.props.like) }}>-</button>
            </div>
        );
    }
}

export default Like;*/
// Fonction Stateless => sfc 

const Like = (props) => {
    return (<div>
        Like
        <span className="badge badge-danger m-2">{props.like.valeur}</span>
        <button className="btn btn-info m-2" onClick={() => { props.augmenter(props.like) }}>+</button>
        <button className="btn btn-danger m-2" onClick={() => { props.diminuer(props.like) }}>-</button>
    </div>);
}

export default Like;
// si un composant ne dispose pas de données propres (state) => le mieux est de créer une fonction
// Like sans la propriété state => Composant Stateless
// render => affichage du composant
// aucun donne stockée 
// récupérer des données depuis son parent 
// il est possible de créer le composant d'une autre manière
// cc => Class
// sfc => Fonction 
