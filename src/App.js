import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards';
import Cardsclass from './components/Cardsclass';
import { MDBContainer } from 'mdbreact';

function App() {
  return (
    <div className="fbApp">
      <Cardsclass imgsrc = {logo}/>
    </div>
  );
}

export default App;
