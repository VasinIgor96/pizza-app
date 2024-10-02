import React from 'react';

const DrinkItem = ({ drink }) => {
  return (
    <div>
      <h2>{drink.name}</h2>
      <p>{drink.volume} л</p>
      <p>Ціна: {drink.price} грн</p>
      <button>Додати до кошика</button>
    </div>
  );
};

export default DrinkItem;
