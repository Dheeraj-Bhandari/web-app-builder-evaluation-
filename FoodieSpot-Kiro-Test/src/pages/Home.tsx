import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Calendar, Users, Star, ArrowRight, Smartphone, Search as SearchIcon, CheckCircle, Clock } from 'lucide-react';
import './Home.css';

const featuredRestaurants = [
  {
    id: 1,
    name: 'La Bella Italia',
    cuisine: 'Italian',
    rating: 4.8,
    priceRange: '$$$',
    location: 'Downtown',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
  },
  {
    id: 2,
    name: 'Sakura Garden',
    cuisine: 'Japanese',
    rating: 4.9,
    priceRange: '$$$$',
    location: 'Midtown',
    image: 'https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=400&h=300&fit=crop',
  },
  {
    id: 3,
    name: 'El Mariachi',
    cuisine: 'Mexican',
    rating: 4.6,
    priceRange: '$$',
    location: 'West Side',
    image: 'https://images.unsplash.com/photo-1653245892188-b0ccbc00a1ba?w=400&h=300&fit=crop',
  },
  {
    id: 4,
    name: 'Spice Route',
    cuisine: 'Indian',
    rating: 4.7,
    priceRange: '$$',
    location: 'East Village',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop',
  },
  {
    id: 5,
    name: 'The Steakhouse',
    cuisine: 'American',
    rating: 4.8,
    priceRange: '$$$$',
    location: 'Financial District',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop',
  },
  {
    id: 6,
    name: 'Le Petit Bistro',
    cuisine: 'French',
    rating: 4.5,
    priceRange: '$$$',
    location: 'Upper East',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=400&h=300&fit=crop',
  },
];

const steps = [
  {
    icon: SearchIcon,
    step: '01',
    title: 'Search',
    description: 'Find restaurants by location, cuisine type, or name. Filter by ratings and price range.',
  },
  {
    icon: CheckCircle,
    step: '02',
    title: 'Compare',
    description: 'Read authentic reviews, view menus, and check real-time table availability.',
  },
  {
    icon: Clock,
    step: '03',
    title: 'Book',
    description: 'Reserve your table in seconds. Receive instant confirmation via email and SMS.',
  },
];

export default function Home() {
  const [searchData, setSearchData] = useState({
    location: '',
    date: '',
    guests: '',
    cuisine: '',
  });

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop"
            alt="Restaurant background"
          />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="container hero-content">
          <h1 className="hero-title">
            Find Your Perfect
            <span className="highlight"> Dining Experience</span>
          </h1>
          <p className="hero-subtitle">
            Discover top restaurants, read reviews, and book tables instantly.
            Your next culinary adventure awaits.
          </p>

          {/* Search Box */}
          <div className="search-box">
            <div className="search-field">
              <MapPin size={20} />
              <input
                type="text"
                placeholder="Location"
                value={searchData.location}
                onChange={(e) => setSearchData({ ...searchData, location: e.target.value })}
              />
            </div>
            <div className="search-field">
              <Calendar size={20} />
              <input
                type="date"
                value={searchData.date}
                onChange={(e) => setSearchData({ ...searchData, date: e.target.value })}
              />
            </div>
            <div className="search-field">
              <Users size={20} />
              <select
                value={searchData.guests}
                onChange={(e) => setSearchData({ ...searchData, guests: e.target.value })}
              >
                <option value="">Party Size</option>
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5+ Guests</option>
              </select>
            </div>
            <div className="search-field">
              <Search size={20} />
              <select
                value={searchData.cuisine}
                onChange={(e) => setSearchData({ ...searchData, cuisine: e.target.value })}
              >
                <option value="">Cuisine Type</option>
                <option value="italian">Italian</option>
                <option value="japanese">Japanese</option>
                <option value="mexican">Mexican</option>
                <option value="indian">Indian</option>
                <option value="french">French</option>
                <option value="american">American</option>
              </select>
            </div>
            <button className="btn btn-primary search-btn">
              <Search size={20} />
              Search
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">5,000+</span>
              <span className="stat-label">Restaurants</span>
            </div>
            <div className="stat">
              <span className="stat-number">2M+</span>
              <span className="stat-label">Happy Diners</span>
            </div>
            <div className="stat">
              <span className="stat-number">150+</span>
              <span className="stat-label">Cities</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="section restaurants-section">
        <div className="container">
          <h2 className="section-title">Featured Restaurants</h2>
          <p className="section-subtitle">
            Discover the most loved dining spots handpicked by our food experts
          </p>

          <div className="restaurants-grid">
            {featuredRestaurants.map((restaurant) => (
              <Link to={`/restaurants/${restaurant.id}`} key={restaurant.id} className="restaurant-card">
                <div className="restaurant-image">
                  <img src={restaurant.image} alt={restaurant.name} />
                  <span className="price-tag">{restaurant.priceRange}</span>
                </div>
                <div className="restaurant-content">
                  <div className="restaurant-header">
                    <h3>{restaurant.name}</h3>
                    <div className="rating">
                      <Star size={16} fill="#f39c12" color="#f39c12" />
                      <span>{restaurant.rating}</span>
                    </div>
                  </div>
                  <p className="cuisine">{restaurant.cuisine}</p>
                  <div className="restaurant-footer">
                    <span className="location">
                      <MapPin size={14} />
                      {restaurant.location}
                    </span>
                    <span className="book-link">Book Now →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="section-cta">
            <Link to="/restaurants" className="btn btn-outline">
              View All Restaurants
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Book your perfect table in three simple steps
          </p>

          <div className="steps-grid">
            {steps.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-number">{step.step}</div>
                <div className="step-icon">
                  <step.icon size={32} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="section app-section">
        <div className="container">
          <div className="app-content">
            <div className="app-text">
              <h2>Get the FoodieSpot App</h2>
              <p>
                Book tables on the go, get personalized recommendations, and receive 
                exclusive app-only deals. Your dining companion, always in your pocket.
              </p>
              <ul className="app-features">
                <li><CheckCircle size={20} /> Real-time table availability</li>
                <li><CheckCircle size={20} /> Exclusive discounts & offers</li>
                <li><CheckCircle size={20} /> Personalized recommendations</li>
                <li><CheckCircle size={20} /> Easy reservation management</li>
              </ul>
              <div className="app-buttons">
                <a href="#" className="app-store-btn">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div>
                    <span>Download on the</span>
                    <strong>App Store</strong>
                  </div>
                </a>
                <a href="#" className="app-store-btn">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div>
                    <span>Get it on</span>
                    <strong>Google Play</strong>
                  </div>
                </a>
              </div>
            </div>
            <div className="app-mockup">
              <div className="phone-frame">
                <Smartphone size={300} strokeWidth={0.5} />
                <div className="phone-screen">
                  <img 
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=600&fit=crop" 
                    alt="App preview" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Discover Amazing Restaurants?</h2>
            <p>Join millions of food lovers and find your next favorite dining spot today.</p>
            <Link to="/restaurants" className="btn btn-primary btn-large">
              Start Exploring
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
