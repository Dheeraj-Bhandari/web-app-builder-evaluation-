import { Search, MapPin, Calendar, Users, ChefHat } from 'lucide-react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="hero-title">Find Your Perfect Dining Experience</h1>
        <p className="hero-subtitle">
          Discover top restaurants, read reviews, and book tables instantly
        </p>

        <div className="search-box">
          <div className="search-field">
            <MapPin className="search-icon" size={20} />
            <input type="text" placeholder="Location" />
          </div>

          <div className="search-field">
            <Calendar className="search-icon" size={20} />
            <input type="date" placeholder="Date" />
          </div>

          <div className="search-field">
            <Users className="search-icon" size={20} />
            <select defaultValue="">
              <option value="" disabled>Party Size</option>
              <option value="1">1 Person</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4">4 People</option>
              <option value="5">5 People</option>
              <option value="6">6 People</option>
              <option value="7">7 People</option>
              <option value="8">8 People</option>
              <option value="9">9 People</option>
              <option value="10">10+ People</option>
            </select>
          </div>

          <div className="search-field">
            <ChefHat className="search-icon" size={20} />
            <select defaultValue="">
              <option value="" disabled>Cuisine Type</option>
              <option value="italian">Italian</option>
              <option value="japanese">Japanese</option>
              <option value="mexican">Mexican</option>
              <option value="indian">Indian</option>
              <option value="american">American</option>
              <option value="chinese">Chinese</option>
              <option value="thai">Thai</option>
              <option value="french">French</option>
            </select>
          </div>

          <button className="btn btn-primary search-btn">
            <Search size={20} />
            Search Restaurants
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
