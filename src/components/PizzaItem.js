import React, { useState } from 'react';
import './PizzaItem.scss'; // Підключаємо стилі для компонента

function PizzaItem({ pizza, addToCart }) {
  const [size, setSize] = useState(pizza.variants[0].volume); // Встановлюємо початковий розмір з варіантів
  const [dough, setDough] = useState('Традиційне');
  const [extras, setExtras] = useState([]);

  const handleExtraChange = (e) => {
    const value = e.target.value;

    setExtras((prev) => 
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
      price: pizza.variants.find(variant => variant.volume === size).price // Отримуємо ціну на основі вибраного розміру
    };
    addToCart(pizzaToAdd);
  };

  return (
    <div className="pizza-item">
      <img src={pizza.image} alt={pizza.name} className="pizza-image" />
      <h3>{pizza.name}</h3>
      <p>{pizza.description}</p>

      <div className="pizza-options">
        <div>
          <label>Розмір піци: </label>
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            {pizza.variants.map((variant, index) => (
              <option key={index} value={variant.volume}>{variant.volume}</option>
            ))}
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
            <input type="checkbox" value="Сир" onChange={handleExtraChange} /> Сир
          </div>
          <div>
            <input type="checkbox" value="Ковбаски" onChange={handleExtraChange} /> Ковбаски
          </div>
          <div>
            <input type="checkbox" value="Гриби" onChange={handleExtraChange} /> Гриби
          </div>
          <div>
            <input type="checkbox" value="Ананас" onChange={handleExtraChange} /> Ананас
          </div>
          <div>
            <input type="checkbox" value="Куряче філе" onChange={handleExtraChange} /> Куряче філе
          </div>
          <div>
            <input type="checkbox" value="Оливки" onChange={handleExtraChange} /> Оливки
          </div>
        </div>
      </div>

      <button onClick={handleAddToCart} className="add-to-cart-button">Додати до кошика</button>
    </div>
  );
}

export default PizzaItem;
