import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, Mail, Phone, MapPin, Send } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thanks for subscribing!');
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <UtensilsCrossed className="logo-icon" />
              <span>FoodieSpot</span>
            </Link>
            <p className="footer-description">
              Discover the best restaurants in your city. Book tables, read reviews, and enjoy unforgettable dining experiences.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/restaurants">Restaurants</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Cuisines</h4>
            <ul>
              <li><a href="#">Italian</a></li>
              <li><a href="#">Japanese</a></li>
              <li><a href="#">Mexican</a></li>
              <li><a href="#">Indian</a></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4>Newsletter</h4>
            <p>Subscribe for exclusive deals and restaurant updates</p>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary">
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="footer-contact">
          <div className="contact-item">
            <MapPin size={18} />
            <span>123 Gourmet Street, Foodville, CA</span>
          </div>
          <div className="contact-item">
            <Phone size={18} />
            <span>(555) 123-4567</span>
          </div>
          <div className="contact-item">
            <Mail size={18} />
            <span>hello@foodiespot.com</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} FoodieSpot. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
