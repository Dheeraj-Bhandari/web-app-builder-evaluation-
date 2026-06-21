import { Star, MapPin } from 'lucide-react';
import './FeaturedRestaurants.css';

const restaurants = [
  {
    id: 1,
    name: 'La Bella Italia',
    cuisine: 'Italian',
    rating: 4.8,
    priceRange: '$$$',
    location: 'Downtown',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80'
  },
  {
    id: 2,
    name: 'Sakura Sushi',
    cuisine: 'Japanese',
    rating: 4.9,
    priceRange: '$$$$',
    location: 'Midtown',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&q=80'
  },
  {
    id: 3,
    name: 'The Steakhouse',
    cuisine: 'American',
    rating: 4.7,
    priceRange: '$$$$',
    location: 'Financial District',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80'
  },
  {
    id: 4,
    name: 'Spice Garden',
    cuisine: 'Indian',
    rating: 4.6,
    priceRange: '$$',
    location: 'East Side',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80'
  },
  {
    id: 5,
    name: 'Café Paris',
    cuisine: 'French',
    rating: 4.8,
    priceRange: '$$$',
    location: 'Arts District',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80'
  },
  {
    id: 6,
    name: 'Dragon Palace',
    cuisine: 'Chinese',
    rating: 4.5,
    priceRange: '$$',
    location: 'Chinatown',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&q=80'
  }
];

function FeaturedRestaurants() {
  return (
    <section className="featured-section" id="restaurants">
      <div className="container">
        <h2 className="section-title">Featured Restaurants</h2>
        <p className="section-subtitle">
          Discover handpicked dining destinations loved by food enthusiasts
        </p>

        <div className="restaurants-grid">
          {restaurants.map((restaurant) => (
            <div className="restaurant-card" key={restaurant.id}>
              <div className="card-image">
                <img src={restaurant.image} alt={restaurant.name} />
                <span className="cuisine-badge">{restaurant.cuisine}</span>
              </div>
              <div className="card-content">
                <h3 className="card-title">{restaurant.name}</h3>
                <div className="card-meta">
                  <div className="rating">
                    <Star className="star-icon" size={16} fill="#FFB800" />
                    <span>{restaurant.rating}</span>
                  </div>
                  <span className="price-range">{restaurant.priceRange}</span>
                </div>
                <div className="card-location">
                  <MapPin size={14} />
                  <span>{restaurant.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-container">
          <button className="btn btn-secondary">View All Restaurants</button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedRestaurants;
