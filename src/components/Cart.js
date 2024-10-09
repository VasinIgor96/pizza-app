import React from 'react';

function Cart({ cartItems, updateQuantity, removeFromCart }) {
  return (
    <div>
      <h2>Ваш кошик</h2>
      {cartItems.length === 0 ? (
        <p>Кошик порожній</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <span className="cart-item-title">{item.name} ({item.size})</span>
              <span className="cart-item-price">{item.totalPrice} грн</span>
              <div>
                <button onClick={() => removeFromCart(index)}>Видалити</button>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
                  min="1"
                />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
