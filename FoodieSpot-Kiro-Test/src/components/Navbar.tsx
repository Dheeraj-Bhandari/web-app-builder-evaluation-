import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, UtensilsCrossed } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/restaurants', label: 'Restaurants' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="logo">
          <UtensilsCrossed className="logo-icon" />
          <span>FoodieSpot</span>
        </Link>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/signin" className="btn btn-primary nav-btn" onClick={() => setIsOpen(false)}>
            Sign In
          </Link>
        </div>

        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}
