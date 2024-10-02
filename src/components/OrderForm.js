// src/components/OrderForm.js
import React, { useState, useEffect } from 'react';

function OrderForm({ cartItems }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [comments, setComments] = useState('');
  const [error, setError] = useState('');

  // Завантажуємо збережене замовлення з localStorage
  useEffect(() => {
    const savedOrder = JSON.parse(localStorage.getItem('order'));
    if (savedOrder) {
      setName(savedOrder.name);
      setPhone(savedOrder.phone);
      setAddress(savedOrder.address);
      setComments(savedOrder.comments);
    }
  }, []);

  // Зберігаємо замовлення у localStorage
  useEffect(() => {
    const order = {
      name,
      phone,
      address,
      comments,
      items: cartItems,
    };
    localStorage.setItem('order', JSON.stringify(order));
  }, [name, phone, address, comments, cartItems]);

  // Обробка відправлення форми
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Перевірка обов'язкових полів
    if (!name || !phone || !address) {
      setError('Будь ласка, заповніть всі обов\'язкові поля.');
      return;
    }

    const orderDetails = {
      name,
      phone,
      address,
      comments,
      items: cartItems,
    };

    console.log('Замовлення:', orderDetails);
    alert('Ваше замовлення прийнято!');
    
    // Очистити поля після відправки
    setName('');
    setPhone('');
    setAddress('');
    setComments('');
    setError('');
    localStorage.removeItem('order'); // Очищення збереження
  };

  // Обчислення загальної вартості
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Оформлення замовлення</h2>
      {error && <p className="error">{error}</p>}
      <p>Загальна сума: {totalPrice} грн</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Ім'я:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Номер телефону:</label>
          <input 
            type="tel" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Адреса доставки:</label>
          <input 
            type="text" 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Додаткові коментарі:</label>
          <textarea 
            value={comments} 
            onChange={(e) => setComments(e.target.value)} 
          />
        </div>
        <button type="submit">Підтвердити замовлення</button>
      </form>
    </div>
  );
}

export default OrderForm;
