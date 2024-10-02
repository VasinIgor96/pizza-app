// src/components/PizzaItem.js
import React, { useState } from 'react';

function PizzaItem({ pizza, addToCart }) {
  const [size, setSize] = useState('Середня');
  const [dough, setDough] = useState('Традиційне');
  const [extras, setExtras] = useState([]);
  
  const handleExtraChange = (e) => {
    const value = e.target.value;
    setExtras(prev => 
      prev.includes(value) 
        ? prev.filter(extra => extra !== value) 
        : [...prev, value]
    );
  };

  const handleAddToCart = () => {
    const pizzaToAdd = {
      ...pizza,
      size,
      dough,
      extras,
    };
    addToCart(pizzaToAdd);
  };

  return (
    <div>
      <h3>{pizza.name}</h3>
      <p>{pizza.description}</p>

      <div>
        <label>Розмір піци: </label>
        <select value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="Мала">Мала</option>
          <option value="Середня">Середня</option>
          <option value="Велика">Велика</option>
        </select>
      </div>

      <div>
        <label>Тип тіста: </label>
        <select value={dough} onChange={(e) => setDough(e.target.value)}>
          <option value="Традиційне">Традиційне</option>
          <option value="Тонке">Тонке</option>
        </select>
      </div>

      <div>
        <label>Додаткові інгредієнти:</label>
        <div>
          <input
            type="checkbox"
            value="Сир"
            onChange={handleExtraChange}
          /> Сир
        </div>
        <div>
          <input
            type="checkbox"
            value="Ковбаски"
            onChange={handleExtraChange}
          /> Ковбаски
        </div>
        <div>
          <input
            type="checkbox"
            value="Гриби"
            onChange={handleExtraChange}
          /> Гриби
        </div>
      </div>

      <button onClick={handleAddToCart}>Додати до кошика</button>
    </div>
  );
}

export default PizzaItem;
