import React from 'react';
import PizzaItem from './PizzaItem';

const Menu = ({ pizzas, addToCart }) => {
  return (
    <section id="menu">
      <h2>Menu</h2>
      <div className="pizza-list">
        {pizzas.map(pizza => (
          <PizzaItem key={pizza.id} pizza={pizza} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
};

export default Menu;