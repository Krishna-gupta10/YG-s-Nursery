import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cartItems, onUpdateQuantity, onRemoveItem }) => {
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleCheckout = ()=> {
        alert("Plant coming soon!")
    }

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            <div className="cart-items">
                {cartItems.map((item, index) => (
                    <div className="cart-item-card" key={index}>
                        <img src={item.imageUrl} alt={item.title} className="cart-item-image" />
                        <div className="cart-item-details">
                            <h3 className="cart-item-title">{item.title}</h3>
                            <p className="cart-item-price">Price per item: ${item.price}</p>
                            <p className="cart-item-total-price"><b>Total: ${item.price * item.quantity}</b></p>
                            <div className="cart-item-controls">
                                <button onClick={() => onUpdateQuantity(item.title, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => onUpdateQuantity(item.title, item.quantity + 1)}>+</button>
                            </div>
                            <button className="cart-item-delete" style={{ backgroundColor: 'red' }} onClick={() => onRemoveItem(item.title)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="total-amount">
                <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
            </div>

            <div className="my-3">
                <button onClick={handleCheckout}style={{ backgroundColor: 'green' }}>Checkout</button>
                <Link to="/store"><button style={{ backgroundColor: 'green' }}>Continue Shopping</button></Link>
            </div>
        </div>
    );
};

export default Cart;