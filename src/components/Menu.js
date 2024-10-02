import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <h1>Меню</h1>
      <ul>
        <li><Link to="/pizza">Піца</Link></li>
        <li><Link to="/drinks">Напої</Link></li>
      </ul>
    </div>
  );
}

export default Menu;
