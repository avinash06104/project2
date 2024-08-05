import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <section id="cart">
      <h2>Cart</h2>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <p>{item.name}</p>
            <p>Rs.{item.price}</p>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </div>
        ))}
      </div>
    <h3>Total: Rs.{total.toFixed(2)}</h3>
    </section>
    
  );
};

export default Cart;