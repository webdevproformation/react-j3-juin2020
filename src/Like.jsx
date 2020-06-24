import React, { Component } from 'react';

class Like extends Component {

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

export default Like;