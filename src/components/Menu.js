// src/components/Menu.js
import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div>
      <h1>Меню</h1>
      <nav>
        <ul>
          <li><Link to="/pizza">Піца</Link></li>
          <li><Link to="/drinks">Напої</Link></li>
          <li><Link to="/cart">Кошик</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
