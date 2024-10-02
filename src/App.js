// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import PizzaItem from './components/PizzaItem';
import DrinkItem from './components/DrinkItem';
import Cart from './components/Cart';
import OrderForm from './components/OrderForm';
import './styles.scss'; // Підключаємо стилі

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.name === item.name && cartItem.size === item.size
    );

    if (existingItemIndex >= 0) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (index, newQuantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = newQuantity;
    setCartItems(updatedCartItems);
  };

  const removeFromCart = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
  };

  const pizzas = [
    {
      name: 'Маргарита',
      image: `${process.env.PUBLIC_URL}/images/margarita.png`,
      description: 'Моцарела, томати, базилік. Соус: томатний',
      variants: [
        { volume: 'Мала', price: 120 },
        { volume: 'Середня', price: 100 },
        { volume: 'Велика', price: 150, 
           
        },
      ],
      extras: [
        { name: 'Сир', price: 20 },
        { name: 'Ковбаски', price: 30 },
        { name: 'Печериці', price: 25 },
        { name: 'Ананас', price: 15 },
        { name: 'Кукурудза', price: 35 },
        { name: 'Оливки', price: 20 },
    ],
      
    },
    {
      name: 'Пепероні',
      image: `${process.env.PUBLIC_URL}/images/pepperoni.png`,
      description: 'Моцарела, салямі, прошутто котто, томати, гострий перць пепероні. Соус: томатний',
      variants: [
        { volume: 'Мала', price: 120 },
        { volume: 'Середня', price: 145 },
        { volume: 'Велика', price: 175 },
      ],
      extras: [
        { name: 'Сир', price: 20 },
        { name: 'Ковбаски', price: 30 },
        { name: 'Печериці', price: 25 },
        { name: 'Ананас', price: 15 },
        { name: 'Кукурудза', price: 35 },
        { name: 'Оливки', price: 20 },
    ],
      
    },
    {
      name: 'Чотири сири',
      image: `${process.env.PUBLIC_URL}/images/quattro_formaggi.png`,
      description: 'Моцарела, гауда, горгонзола та пармезан. Соус: вершковий',
      variants: [
        { volume: 'Мала', price: 120 },
        { volume: 'Середня', price: 120 },
        { volume: 'Велика', price: 160 },
      ],
      extras: [
        { name: 'Сир', price: 20 },
        { name: 'Ковбаски', price: 30 },
        { name: 'Печериці', price: 25 },
        { name: 'Ананас', price: 15 },
        { name: 'Кукурудза', price: 35 },
        { name: 'Оливки', price: 20 },
    ], 
    },
    {
      name: 'Карбонара',
      image: `${process.env.PUBLIC_URL}/images/carbonara.png`,
      description: 'Моцарела, томати, прошутто котто, бекон та перепелині яйця. Соус: вершковий',
      variants: [
        { volume: 'Мала', price: 120 },
        { volume: 'Середня', price: 150 },
        { volume: 'Велика', price: 200 },
      ],
      extras: [
        { name: 'Сир', price: 20 },
        { name: 'Ковбаски', price: 30 },
        { name: 'Печериці', price: 25 },
        { name: 'Ананас', price: 15 },
        { name: 'Кукурудза', price: 35 },
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
        <Route path="/" element={<Menu />} />
        <Route path="/pizza" element={pizzas.map((pizza, index) => (
            <PizzaItem key={index} pizza={pizza} addToCart={addToCart} />
          ))} 
        />
        <Route path="/drinks" element={drinks.map((drink, index) => (
            <DrinkItem key={index} drink={drink} addToCart={addToCart} />
          ))} 
        />
        <Route path="/cart" element={<Cart cartItems={cartItems} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} />
        <Route path="/order" element={<OrderForm cartItems={cartItems} />} />
      </Routes>
    </Router>
  );
}

export default App;
