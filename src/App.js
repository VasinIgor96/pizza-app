import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import PizzaItem from './components/PizzaItem';
import DrinkItem from './components/DrinkItem';
import Cart from './components/Cart';
import OrderForm from './components/OrderForm';
import './styles.scss';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) =>
        cartItem.name === item.name &&
        (item.type === 'drink'
          ? cartItem.selectedVariant.volume === item.selectedVariant.volume
          : cartItem.size === item.size)
    );

    const extrasPrice = item.selectedExtras
      ? item.selectedExtras.reduce((total, extra) => total + extra.price, 0)
      : 0;

    if (existingItemIndex >= 0) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      updatedCartItems[existingItemIndex].totalPrice = (updatedCartItems[existingItemIndex].totalPrice / updatedCartItems[existingItemIndex].quantity) * updatedCartItems[existingItemIndex].quantity; // Оновлюємо загальну ціну
      setCartItems(updatedCartItems);
    } else {
      const basePrice = item.type === 'drink'
        ? item.selectedVariant.price
        : item.variants.find((v) => v.size === item.size).price;

      const totalPrice = basePrice + extrasPrice;

      setCartItems([...cartItems, { ...item, quantity: 1, totalPrice, selectedExtras: item.selectedExtras || [] }]);
    }
  };

  const updateQuantity = (index, newQuantity) => {
    const updatedCartItems = [...cartItems];

    const extrasPrice = updatedCartItems[index].selectedExtras
      ? updatedCartItems[index].selectedExtras.reduce((total, extra) => total + extra.price, 0)
      : 0;

    updatedCartItems[index].quantity = newQuantity;

    const basePrice = updatedCartItems[index].type === 'drink'
      ? updatedCartItems[index].selectedVariant.price
      : updatedCartItems[index].variants.find((v) => v.size === updatedCartItems[index].size).price;

    updatedCartItems[index].totalPrice = (basePrice + extrasPrice) * newQuantity;

    setCartItems(updatedCartItems);
  };

  const removeFromCart = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.totalPrice * item.quantity), 0);
  };

  const pizzas = [
    {
      name: 'Маргарита',
      image: `${process.env.PUBLIC_URL}/images/margarita.png`,
      description: 'Моцарела, томати, базилік. Соус: томатний',
      variants: [
        { size: 'Мала', price: 100 },
        { size: 'Середня', price: 120 },
        { size: 'Велика', price: 150 },
      ],
      extras: [
        { name: 'Сир', price: 20 },
        { name: 'Ковбаски', price: 30 },
        { name: 'Печериці', price: 25 },
        { name: 'Ананас', price: 15 },
        { name: 'Кукурудза', price: 15 },
        { name: 'Оливки', price: 20 },
      ],
    },
    {
      name: 'Пепероні',
      image: `${process.env.PUBLIC_URL}/images/pepperoni.png`,
      description: 'Моцарела, салямі, прошутто котто, томати, гострий перць пепероні. Соус: томатний',
      variants: [
        { size: 'Мала', price: 110 },
        { size: 'Середня', price: 145 },
        { size: 'Велика', price: 175 },
      ],
      extras: [
        { name: 'Сир', price: 20 },
        { name: 'Ковбаски', price: 30 },
        { name: 'Печериці', price: 25 },
        { name: 'Ананас', price: 15 },
        { name: 'Кукурудза', price: 15 },
        { name: 'Оливки', price: 20 },
      ],
    },
    {
      name: 'Чотири сири',
      image: `${process.env.PUBLIC_URL}/images/quattro_formaggi.png`,
      description: 'Моцарела, гауда, горгонзола та пармезан. Соус: вершковий',
      variants: [
        { size: 'Мала', price: 120 },
        { size: 'Середня', price: 140 },
        { size: 'Велика', price: 170 },
      ],
      extras: [
        { name: 'Сир', price: 20 },
        { name: 'Ковбаски', price: 30 },
        { name: 'Печериці', price: 25 },
        { name: 'Ананас', price: 15 },
        { name: 'Кукурудза', price: 15 },
        { name: 'Оливки', price: 20 },
      ],
    },
    {
      name: 'Карбонара',
      image: `${process.env.PUBLIC_URL}/images/carbonara.png`,
      description: 'Моцарела, томати, прошутто котто, бекон та перепелині яйця. Соус: вершковий',
      variants: [
        { size: 'Мала', price: 120 },
        { size: 'Середня', price: 150 },
        { size: 'Велика', price: 200 },
      ],
      extras: [
        { name: 'Сир', price: 20 },
        { name: 'Ковбаски', price: 30 },
        { name: 'Печериці', price: 25 },
        { name: 'Ананас', price: 15 },
        { name: 'Кукурудза', price: 15 },
        { name: 'Оливки', price: 20 },
      ],
    },
  ];

  const drinks = [
    {
      name: 'Кока-Кола',
      image: `${process.env.PUBLIC_URL}/images/kola.png`,
      variants: [
        { volume: 0.33, price: 20 },
        { volume: 0.5, price: 30 },
        { volume: 1, price: 60 },
      ],
    },
    {
      name: 'Фанта',
      image: `${process.env.PUBLIC_URL}/images/fanta.png`,
      variants: [
        { volume: 0.33, price: 20 },
        { volume: 0.5, price: 30 },
        { volume: 1, price: 60 },
      ],
    },
    {
      name: 'Спрайт',
      image: `${process.env.PUBLIC_URL}/images/sprite.png`,
      variants: [
        { volume: 0.33, price: 20 },
        { volume: 0.5, price: 30 },
        { volume: 1, price: 60 },
      ],
    },
    {
      name: 'Сік',
      image: `${process.env.PUBLIC_URL}/images/juice.png`,
      variants: [
        { volume: 0.33, price: 20 },
        { volume: 0.5, price: 30 },
        { volume: 1, price: 60 },
      ],
    },
  ];

  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<h2>Ласкаво просимо!</h2>} />
        <Route path="/pizza" element={pizzas.map((pizza, index) => (
          <PizzaItem key={index} pizza={pizza} addToCart={addToCart} />
        ))} />
        <Route path="/drinks" element={drinks.map((drink, index) => (
          <DrinkItem key={index} drink={drink} addToCart={addToCart} />
        ))} />
        <Route path="/cart" element={
          <>
            <Cart
              cartItems={cartItems}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
            <h3>Загальна сума: {calculateTotal()} грн</h3>
          </>
        } />
        <Route path="/order" element={<OrderForm cartItems={cartItems} />} />
      </Routes>
    </Router>
  );
}

export default App;