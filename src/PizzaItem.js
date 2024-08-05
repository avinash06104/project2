import React from 'react';

const PizzaItem = ({ pizza, addToCart }) => {
  return (
    <div className="pizza-item">
      <h3>{pizza.name}</h3>
      <p>{pizza.description}</p>
      <p>Rs.{pizza.price}</p>
      <button onClick={() => addToCart(pizza)}>Add to Cart</button>
    </div>
  );
};

export default PizzaItem;