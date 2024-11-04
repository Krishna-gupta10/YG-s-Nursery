import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart01Icon } from 'hugeicons-react';
import { Plant02Icon } from 'hugeicons-react';
import './Navbar.css';

export default function Navbar({ cartCount }) {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" style={{ color: 'white' }} href="/"><Plant02Icon/> YG's Nursery</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link active" style={{ color: 'white' }} aria-current="page" href="/store">Plants</a>
                        </li>
                    </ul>
                </div>
                <Link to="/cart" className="cart-icon-container">
                    <ShoppingCart01Icon style={{ color: 'white', marginRight: '2vh' }} />
                    {cartCount > 0 && <span className="cart-count-badge">{cartCount}</span>}
                </Link>
            </div>
        </nav>
    );
}
