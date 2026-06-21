import { Calendar, MapPin, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Events.css';

const events = [
  {
    id: 1,
    title: 'Summer Music Festival',
    category: 'Music',
    date: 'July 15, 2024',
    location: 'Golden Gate Park, SF',
    price: 89,
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=250&fit=crop',
  },
  {
    id: 2,
    title: 'Tech Innovation Summit',
    category: 'Tech',
    date: 'August 5, 2024',
    location: 'Moscone Center, SF',
    price: 299,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop',
  },
  {
    id: 3,
    title: 'Championship Basketball',
    category: 'Sports',
    date: 'July 22, 2024',
    location: 'Chase Center, SF',
    price: 150,
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=250&fit=crop',
  },
  {
    id: 4,
    title: 'Modern Art Exhibition',
    category: 'Art',
    date: 'August 10-20, 2024',
    location: 'SFMOMA',
    price: 35,
    image: 'https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?w=400&h=250&fit=crop',
  },
  {
    id: 5,
    title: 'Food & Wine Festival',
    category: 'Food',
    date: 'September 1, 2024',
    location: 'Ferry Building',
    price: 75,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=250&fit=crop',
  },
  {
    id: 6,
    title: 'Comedy Night Live',
    category: 'Entertainment',
    date: 'July 28, 2024',
    location: 'Punch Line SF',
    price: 45,
    image: 'https://images.unsplash.com/photo-1527224538127-2104bb71c51b?w=400&h=250&fit=crop',
  },
];

export default function Events() {
  return (
    <div className="events-page">
      {/* Hero Section */}
      <section className="events-hero">
        <div className="container">
          <h1>Discover Events</h1>
          <p>Find your next unforgettable experience</p>
        </div>
      </section>

      {/* Events Section */}
      <section className="section">
        <div className="container">
          <div className="events-grid">
            {events.map((event) => (
              <Link to={`/events/${event.id}`} key={event.id} className="event-card">
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
                  <span className="event-category">
                    <Tag size={14} />
                    {event.category}
                  </span>
                </div>
                <div className="event-content">
                  <h3>{event.title}</h3>
                  <div className="event-meta">
                    <span>
                      <Calendar size={16} />
                      {event.date}
                    </span>
                    <span>
                      <MapPin size={16} />
                      {event.location}
                    </span>
                  </div>
                  <div className="event-footer">
                    <span className="event-price">From ${event.price}</span>
                    <span className="btn btn-primary btn-small">Get Tickets</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
