import React, { Component } from 'react';
// un composant doit OBLIGATOIREMENT avoir 1 seule balise parent
// Like / Dislike <div>
// menu on a utilisé la balise <nav>
class Galerie extends Component {
    state = {
        images: [
            {
                url: "logo512.png",
                width: 200,
                height: 100
            },
            {
                url: "logo512.png",
                width: 400,
                height: 300
            },
            {
                url: "logo512.png",
                width: 400,
                height: 50
            },
            {
                url: "logo512.png",
                width: 100,
                height: 100
            },
        ]
    }
    render() {
        return (
            <div className="row">
                {this.state.images.map((item, index) =>
                    <div className="col" key={index}>
                        <img src={item.url} alt="" className="img-fluid" />
                    </div>
                )}
            </div>
        );
    }
}

export default Galerie;