import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitMessage('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    
    setTimeout(() => setSubmitMessage(''), 5000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Office',
      content: ['123 Event Street', 'San Francisco, CA 94102'],
    },
    {
      icon: Phone,
      title: 'Phone',
      content: ['(555) 123-4567', '(555) 987-6543'],
    },
    {
      icon: Mail,
      title: 'Email',
      content: ['hello@eventhub.com', 'support@eventhub.com'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat - Sun: 10:00 AM - 4:00 PM'],
    },
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Have questions? We'd love to hear from you.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2>Send us a Message</h2>
              <p>Fill out the form below and we'll get back to you as soon as possible.</p>
              
              {submitMessage && (
                <div className="success-message">
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we help you?"
                    rows={5}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>Reach out to us through any of the following channels.</p>

              <div className="info-cards">
                {contactInfo.map((info, index) => (
                  <div key={index} className="info-card">
                    <div className="info-icon">
                      <info.icon size={24} />
                    </div>
                    <div className="info-content">
                      <h3>{info.title}</h3>
                      {info.content.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="map-placeholder">
            <MapPin size={48} />
            <p>Map Placeholder</p>
            <span>123 Event Street, San Francisco, CA 94102</span>
          </div>
        </div>
      </section>
    </div>
  );
}
