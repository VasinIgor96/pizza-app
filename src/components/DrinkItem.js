// src/components/DrinkItem.js
import React from 'react';

function DrinkItem({ drink, addToCart }) {
  return (
    <div>
      <h3>{drink.name}</h3>
      {drink.variants.map((variant, index) => (
        <div key={index}>
          <p>Об'єм: {variant.volume} л</p>
          <p>Ціна: {variant.price} грн</p>
          <button onClick={() => addToCart({ name: drink.name, ...variant })}>
            Додати до кошика
          </button>
        </div>
      ))}
    </div>
  );
}

export default DrinkItem;
