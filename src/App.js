import './App.css';
import React from 'react';
import Productos from './components/Productos'
import DrinkWater from './components/DrinkWater'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/home"> <button>Home</button>  </Link>
        <Link to="/productos"> <button>Productos</button>  </Link>
        <Link to="/drinkwater"> <button>Drink Water</button>  </Link>

        <Switch>
          <Route path="/home" >
            <h1> HOME</h1>
          </Route>

          <Route path="/productos">
            <Productos />
          </Route>

          <Route path="/drinkwater">
            <DrinkWater />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
