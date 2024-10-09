import React, { useState } from 'react';

function DrinkItem({ drink, addToCart }) {
  const [selectedVariant, setSelectedVariant] = useState(drink.variants[0]);

  const handleVariantChange = (e) => {
    const selected = drink.variants.find(
      (variant) => variant.volume === parseFloat(e.target.value)
    );
    setSelectedVariant(selected);
  };

  const handleAddToCart = () => {
    const drinkToAdd = {
      ...drink,
      selectedVariant, // Додаємо обраний варіант
      totalPrice: selectedVariant.price, // Додаємо ціну
      type: 'drink',
    };
    addToCart(drinkToAdd);
  };

  return (
    <div className="drink-item">
      <img src={drink.image} alt={drink.name} className="drink-image" />
      <h3>{drink.name}</h3>

      <label>Виберіть об'єм:</label>
      <select value={selectedVariant.volume} onChange={handleVariantChange}>
        {drink.variants.map((variant) => (
          <option key={variant.volume} value={variant.volume}>
            {variant.volume} л - {variant.price} грн
          </option>
        ))}
      </select>

      <p>Ціна: {selectedVariant.price} грн</p>

      <button onClick={handleAddToCart}>Додати до кошика</button>
    </div>
  );
}

export default DrinkItem;
