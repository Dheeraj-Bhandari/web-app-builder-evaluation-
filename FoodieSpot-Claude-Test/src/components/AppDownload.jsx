import { Apple, Smartphone, Check, UtensilsCrossed } from 'lucide-react';
import './AppDownload.css';

function AppDownload() {
  return (
    <section className="app-download">
      <div className="container app-download-container">
        <div className="app-content">
          <h2 className="app-title">Take FoodieSpot With You</h2>
          <p className="app-description">
            Download our mobile app for the ultimate dining experience.
            Browse restaurants, make reservations, and get exclusive deals
            right from your pocket.
          </p>

          <div className="app-features">
            <div className="app-feature">
              <Check className="feature-icon" size={20} />
              <span>Real-time table availability</span>
            </div>
            <div className="app-feature">
              <Check className="feature-icon" size={20} />
              <span>Exclusive mobile-only discounts</span>
            </div>
            <div className="app-feature">
              <Check className="feature-icon" size={20} />
              <span>Easy reservation management</span>
            </div>
            <div className="app-feature">
              <Check className="feature-icon" size={20} />
              <span>Personalized recommendations</span>
            </div>
          </div>

          <div className="download-buttons">
            <button className="store-btn">
              <Apple size={28} />
              <div className="store-btn-content">
                <span className="store-btn-small">Download on the</span>
                <span className="store-btn-large">App Store</span>
              </div>
            </button>

            <button className="store-btn">
              <Smartphone size={28} />
              <div className="store-btn-content">
                <span className="store-btn-small">Get it on</span>
                <span className="store-btn-large">Google Play</span>
              </div>
            </button>
          </div>
        </div>

        <div className="app-mockup">
          <div className="mockup-container">
            <div className="mockup-screen">
              <div className="mockup-logo">
                <UtensilsCrossed size={32} />
              </div>
              <h3 className="mockup-title">FoodieSpot</h3>
              <p className="mockup-subtitle">Find Your Perfect Meal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppDownload;
