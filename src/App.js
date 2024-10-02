import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import PizzaItem from './components/PizzaItem';
import DrinkItem from './components/DrinkItem';
import Cart from './components/Cart';

function App() {
  const pizzas = [
    { name: 'Маргарита', description: 'Сир, томати, базилік' },
    { name: 'Пепероні', description: 'Сир, томати, пепероні' }
  ];

  const drinks = [
    { name: 'Кола', volume: 0.5, price: 25 },
    { name: 'Сік', volume: 1, price: 30 }
  ];

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Menu} />
        <Route path="/pizza">
          {pizzas.map((pizza, index) => (
            <PizzaItem key={index} pizza={pizza} />
          ))}
        </Route>
        <Route path="/drinks">
          {drinks.map((drink, index) => (
            <DrinkItem key={index} drink={drink} />
          ))}
        </Route>
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
