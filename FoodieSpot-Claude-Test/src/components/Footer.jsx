import { UtensilsCrossed, Mail, Globe, MessageCircle, Share2 } from 'lucide-react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              <UtensilsCrossed size={28} />
              <span>FoodieSpot</span>
            </a>
            <p className="footer-tagline">
              Discover exceptional dining experiences and create unforgettable memories.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Website">
                <Globe size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Message">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Share">
                <Share2 size={20} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4>Stay Updated</h4>
            <p>Subscribe to our newsletter for the latest restaurant deals and updates.</p>
            <form className="newsletter-form">
              <div className="newsletter-input-group">
                <Mail size={18} className="newsletter-icon" />
                <input type="email" placeholder="Enter your email" />
              </div>
              <button type="submit" className="btn btn-primary newsletter-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} FoodieSpot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
