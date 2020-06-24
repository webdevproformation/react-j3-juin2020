import React, { Component } from 'react';

class Compteur extends Component {
    state = {
        compte: 0
    }

    render() {
        return (
            <div>
                <span className="badge badge-primary m-2">{this.props.count}</span>
                {/** this.state.compte */}
                <button className="btn btn-success m-2" onClick={this.props.add.bind(this)}>Augmenter</button>
                <button className="btn btn-warning m-2" onClick={this.props.decrease.bind(this)}>Diminuer</button>
            </div>
        )
            ;
    }
}

export default Compteur;