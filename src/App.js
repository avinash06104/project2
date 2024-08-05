import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';
import Cart from './Cart';
import './App.css';

const App = () => {
  const [pizzas] = useState([
    { id: 1, name: 'Margherita', description: 'Classic cheese and tomato', price: 399.00},
    { id: 2, name: 'Pepperoni', description: 'Pepperoni and cheese', price: 449.00 },
    { id: 3, name: 'BBQ Chicken', description: 'BBQ sauce, chicken, and cheese', price: 699.00 },
    { id: 4, name: 'Sizziling Hot', description: 'Hot sauce, chicken, and red chilli', price: 599.00 },
    { id: 5, name: 'Cheesy Breezy', description: 'Chicken sauce, chicken, and cheese', price: 349.00 },
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (pizza) => {
    setCartItems([...cartItems, pizza]);
  };

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Menu pizzas={pizzas} addToCart={addToCart} />
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </main>
      <Footer />
    </div>
  );
};

export default App;