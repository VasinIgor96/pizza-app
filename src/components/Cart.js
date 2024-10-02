// src/components/Cart.js
import React from 'react';

function Cart({ cartItems, updateQuantity, removeFromCart }) {
  return (
    <div>
      <h2>Кошик</h2>
      {cartItems.length === 0 ? (
        <p>Ваш кошик порожній</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div>
                <h3>{item.name}</h3>
                <p>Розмір: {item.size}</p>
                <p>Тісто: {item.dough}</p>
                <p>Кількість: 
                  <input 
                    type="number" 
                    value={item.quantity} 
                    onChange={(e) => updateQuantity(index, Number(e.target.value))} 
                    min="1" 
                  />
                </p>
                <button onClick={() => removeFromCart(index)}>Видалити</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
