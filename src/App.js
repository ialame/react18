import React, { Component } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import AllCards from "./Pages/Cards/AllCards";
import ViewEbayCard from "./Pages/Cards/ViewEbayCard";
import ViewPokemonCard from "./Pages/Cards/ViewPokemonCard";
import CardsEnCours from "./Pages/Cards/CardsEnCours"


class App extends Component {
  render(){
    return (
        <React.Fragment>
            <NavBar />
            <Routes>
              <Route path={'/'} element={<Navigate to={'/card/all'}/> }/>
              <Route path={'/card/encours'} element ={<CardsEnCours />} />
              <Route path={'/ebaycard/all'} element ={<AllCards />} />
              <Route exact  path={'/ebaycard/view/:cardId'}   element ={<ViewEbayCard />}  />
                <Route exact  path={'/pokemoncard/view/:pokemonCardId'}   element ={<ViewPokemonCard />}  />


            </Routes>
        </React.Fragment>
      
    );
  }
  
}

export default App;
// toto
