import React from 'react';
import Menu from './Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Galerie from "./Galerie";
import Compteurs from "./Compteurs";
import Likes from "./Likes";

import Article from './Article';

function App() {
  return (
    <div className="container">
      <Menu />
      <Compteurs />
      <Likes />
      <Article />
    </div>
  );
}

export default App;
