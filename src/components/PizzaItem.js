import React, { useState } from 'react';

function PizzaItem({ pizza, addToCart }) {
  const [size, setSize] = useState('Середня');
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
      totalPrice: getTotalPrice(),
      type: 'pizza',
    };
    addToCart(pizzaToAdd);
  };

  const getTotalPrice = () => {
    const variant = pizza.variants.find(variant => variant.size === size);
    const extrasPrice = getExtrasPrice();
    return variant ? (variant.price + extrasPrice) : 0;
  };

  const getExtrasPrice = () => {
    return extras.reduce((total, extra) => {
      const selectedExtra = pizza.extras.find(item => item.name === extra);
      return total + (selectedExtra ? selectedExtra.price : 0);
    }, 0);
  };

  return (
    <div className="pizza-item">
      <img src={pizza.image} alt={pizza.name} className="pizza-image" />
      <h3>{pizza.name}</h3>
      <p>{pizza.description}</p>
      <p>Ціна: {getTotalPrice()} грн</p>
      
      <div>
        <label>Розмір піци: </label>
        <select value={size} onChange={(e) => setSize(e.target.value)}>
          {pizza.variants.map(variant => (
            <option key={variant.size} value={variant.size}>
              {variant.size}: {variant.price} грн
            </option>
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
        {pizza.extras.map((extra) => (
          <div key={extra.name}>
            <input
              type="checkbox"
              value={extra.name}
              onChange={handleExtraChange}
            /> {extra.name} (+{extra.price} грн)
          </div>
        ))}
      </div>

      <p>Ціна додаткових інгредієнтів: {getExtrasPrice()} грн</p>

      <button onClick={handleAddToCart}>Додати до кошика</button>
    </div>
  );
}

export default PizzaItem;
