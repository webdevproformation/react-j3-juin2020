import React from 'react';
import Menu from './Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import Galerie from "./Galerie";

function App() {
  return (
    <div className="container">
      <Menu />
      <Galerie />
    </div>
  );
}

export default App;
