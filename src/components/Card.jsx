import React from 'react';
import './Card.css'; // Custom styles for the card

function Card({ title, imageUrl, price, description, onAddToCart, isOnSale, isDisabled }) {
    return (
      <div className="card">
        {isOnSale && <div className="badge">Sale</div>}
        <h3 className="card-title">{title}</h3>
        <img src={imageUrl} alt={title} className="card-image" />
        <p className="card-price">Price: ${price}</p>
        <p className="card-description">{description}</p>
        <button
          className={`add-to-cart-btn ${isDisabled ? 'disabled' : ''}`}
          onClick={onAddToCart}
          disabled={isDisabled}
        >
          {isDisabled ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    );
  }  

export default Card;
