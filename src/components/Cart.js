import React from 'react';

function Cart({ cartItems, updateQuantity, removeFromCart }) {
  return (
    <div>
      <h2>Кошик</h2>
      {cartItems.length === 0 ? (
        <p>Кошик порожній</p>
      ) : (
        <ul className='marker'>
          {cartItems.map((item, index) => (
            <li key={index}>
              <div className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-info">
                  <span className="cart-item-title">
                    {item.name} {item.type === 'pizza' ? `(${item.size}, ${item.dough})` : ''} {item.type === 'drink' ? `(${item.selectedVariant.volume} л)` : ''}
                  </span>
                  <span className="cart-item-price">Ціна: {item.totalPrice} грн</span>
                  {item.type === 'pizza' && (
                    <span>
                      Додаткові інгредієнти: {item.extras ? item.extras.join(', ') : 'Немає'}
                    </span>
                  )}
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(index, Number(e.target.value))}
                  />
                  <button onClick={() => removeFromCart(index)}>Видалити</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
