import React from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/CartList.css";

const CartList = ({ cart, removeFromCart }) => {
  return (
    <div className="cart-container">
      <h1 className="cart-title">
        <i className="bi bi-cart4"></i> My Cart
      </h1>
      {cart.length === 0 ? (
        <h2 className="empty-cart-message">There is no item in your cart!</h2>
      ) : (
        <ul className="cart-list">
          {cart.map((bicycle) => (
            <li className="cart-item" key={bicycle.id}>
              <Link to={`/bicycle/${bicycle.id}`}>
                <img src={bicycle.imageURL} alt={bicycle.name} />
              </Link>
              <div className="cart-item-details">
                <h3>{bicycle.name}</h3>
                <p>${bicycle.price}</p>
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(bicycle.id)}
                >
                  <i className="bi bi-trash-fill"></i> Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartList;
