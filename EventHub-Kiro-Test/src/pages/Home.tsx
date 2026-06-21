import { Link } from 'react-router-dom';
import { Calendar, Shield, Zap, Headphones, Star, ArrowRight } from 'lucide-react';
import './Home.css';

const features = [
  {
    icon: Calendar,
    title: 'Easy Booking',
    description: 'Book your tickets in just a few clicks with our intuitive booking system.',
  },
  {
    icon: Shield,
    title: 'Secure Payments',
    description: 'Your payment information is protected with industry-leading security.',
  },
  {
    icon: Zap,
    title: 'Instant Tickets',
    description: 'Receive your e-tickets instantly via email after purchase.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Our dedicated support team is always here to help you.',
  },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Music Enthusiast',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    content: 'EventHub made finding and booking concert tickets so easy! The process was seamless and I got my tickets instantly.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Sports Fan',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    content: 'Best platform for sports events! I never miss a game now. The mobile experience is fantastic.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Tech Professional',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    content: 'Found amazing tech conferences through EventHub. The filtering options helped me find exactly what I needed.',
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container hero-content">
          <h1 className="hero-title">
            Discover Amazing Events
            <span className="gradient-text"> Near You</span>
          </h1>
          <p className="hero-subtitle">
            Find and book tickets to concerts, sports, conferences and more. 
            Your next unforgettable experience is just a click away.
          </p>
          <div className="hero-buttons">
            <Link to="/events" className="btn btn-primary btn-large">
              Browse Events
              <ArrowRight size={20} />
            </Link>
            <Link to="/about" className="btn btn-outline btn-large">
              Learn More
            </Link>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Events</span>
            </div>
            <div className="stat">
              <span className="stat-number">500K+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat">
              <span className="stat-number">100+</span>
              <span className="stat-label">Cities</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <h2 className="section-title">Why Choose EventHub?</h2>
          <p className="section-subtitle">
            We make event discovery and ticket booking simple, secure, and seamless.
          </p>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <feature.icon size={28} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Join thousands of happy event-goers who trust EventHub.
          </p>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#fbbf24" color="#fbbf24" />
                  ))}
                </div>
                <p className="testimonial-content">"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div>
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Discover Your Next Event?</h2>
            <p>Join EventHub today and never miss out on amazing experiences.</p>
            <Link to="/events" className="btn btn-primary btn-large">
              Get Started
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
