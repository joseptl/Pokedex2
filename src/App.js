import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PokemonGrid from './components/PokemonGrid/PokemonGrid';
import ToTop from './components/ToTop/ToTop';
import Error from './components/Error/Error';

function App() {
  const generationList = [
    { generacion: "I", link: "limit=151&offset=0" },
    { generacion: "II", link: "limit=100&offset=151" },
    { generacion: "III", link: "limit=135&offset=251" },
    { generacion: "IV", link: "limit=107&offset=386" },
    { generacion: "V", link: "limit=156&offset=493" },
    { generacion: "VI", link: "limit=72&offset=649" },
    { generacion: "VII", link: "limit=88&offset=721" },
    { generacion: "VIII", link: "limit=83&offset=809" },
  ];
  return (
    <div className="App">
      <Router>
      <Header genList={generationList}/>
        <Switch>
          <Route exact path="/" children={<PokemonGrid link={"limit=151&offset=0"}/>}/>
        {generationList.map((e)=><Route key={generationList.indexOf(e)} exact path={`/${e.generacion}-gen`} children={<PokemonGrid link={e.link}/>}/>)}
        <Route path="*" component={Error} />
        </Switch>
        <ToTop/>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
