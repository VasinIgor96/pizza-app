import React, { useState } from 'react';

const PizzaItem = ({ pizza }) => {
  const [size, setSize] = useState('Середня');
  const [dough, setDough] = useState('Традиційне');

  return (
    <div>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <div>
        <label>
          Вибір розміру:
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="Мала">Мала</option>
            <option value="Середня">Середня</option>
            <option value="Велика">Велика</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Вибір тіста:
          <select value={dough} onChange={(e) => setDough(e.target.value)}>
            <option value="Традиційне">Традиційне</option>
            <option value="Тонке">Тонке</option>
          </select>
        </label>
      </div>
      <button>Додати до кошика</button>
    </div>
  );
};

export default PizzaItem;
