// src/components/Cart.js
import React from 'react';
import { Link } from 'react-router-dom';

function Cart({ cartItems, updateQuantity, removeFromCart }) {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Кошик</h2>
      {cartItems.length === 0 ? (
        <p>Кошик порожній</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - {item.size || item.volume} - {item.price} грн
                <div>
                  <button onClick={() => updateQuantity(index, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                  <span> {item.quantity} </span>
                  <button onClick={() => updateQuantity(index, item.quantity + 1)}>+</button>
                  <button onClick={() => removeFromCart(index)}>Видалити</button>
                </div>
              </li>
            ))}
          </ul>
          <p>Загальна сума: {totalPrice} грн</p>
          <Link to="/order">
            <button>Оформити замовлення</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
