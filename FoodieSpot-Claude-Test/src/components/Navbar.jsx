import { useState } from 'react';
import { Menu, X, UtensilsCrossed } from 'lucide-react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="/" className="logo">
          <UtensilsCrossed className="logo-icon" />
          <span>FoodieSpot</span>
        </a>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#restaurants">Restaurants</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="nav-actions">
          <button className="btn btn-primary sign-in-btn">Sign In</button>
          <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
