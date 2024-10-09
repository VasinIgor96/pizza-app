import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Головна</Link></li>
        <li><Link to="/pizza">Піца</Link></li>
        <li><Link to="/drinks">Напої</Link></li>
        <li><Link to="/cart">Кошик</Link></li>
        <li><Link to="/order">Замовлення</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
