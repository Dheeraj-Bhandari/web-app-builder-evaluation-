import { Target, Heart, Users, Award } from 'lucide-react';
import './About.css';

const teamMembers = [
  {
    name: 'Alex Thompson',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
  },
  {
    name: 'Sarah Mitchell',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
  },
  {
    name: 'David Kim',
    role: 'Head of Operations',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
  },
  {
    name: 'Emily Chen',
    role: 'Head of Marketing',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
  },
];

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To connect people with unforgettable experiences by making event discovery and ticket booking effortless.',
  },
  {
    icon: Heart,
    title: 'Our Passion',
    description: 'We believe in the power of live experiences to create memories, build communities, and inspire joy.',
  },
  {
    icon: Users,
    title: 'Our Community',
    description: 'Over 500,000 event-goers trust EventHub to find their next adventure, concert, or conference.',
  },
  {
    icon: Award,
    title: 'Our Promise',
    description: 'We are committed to providing secure payments, instant tickets, and exceptional customer support.',
  },
];

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About EventHub</h1>
          <p>Connecting people with experiences that matter since 2020</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                EventHub was founded in 2020 with a simple vision: to make discovering and 
                attending events as easy and enjoyable as possible. What started as a small 
                startup in a garage has grown into one of the leading event ticketing platforms.
              </p>
              <p>
                Our founders, passionate event-goers themselves, experienced firsthand the 
                frustration of complicated booking processes and hidden fees. They set out 
                to create a platform that puts the customer first, with transparent pricing, 
                instant ticket delivery, and a seamless user experience.
              </p>
              <p>
                Today, we partner with thousands of event organizers worldwide, from local 
                venues to major arenas, to bring you the best events in music, sports, 
                technology, arts, and more.
              </p>
            </div>
            <div className="story-image">
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop" 
                alt="EventHub Team" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">What Drives Us</h2>
          <p className="section-subtitle">
            Our core values guide everything we do at EventHub.
          </p>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <value.icon size={28} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            The passionate people behind EventHub who make it all happen.
          </p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-value">10K+</span>
              <span className="stat-label">Events Listed</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">500K+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">100+</span>
              <span className="stat-label">Cities Covered</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">99.9%</span>
              <span className="stat-label">Uptime</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
