import React from 'react';
import Searcher from './components/Searcher/Searcher';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PokemonGrid from './components/PokemonGrid/PokemonGrid';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
      <Route exact path="/asd" children={<Searcher/>}/>
      <PokemonGrid/>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
