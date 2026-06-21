import { Search, GitCompare, CalendarCheck } from 'lucide-react';
import './HowItWorks.css';

const steps = [
  {
    icon: Search,
    title: 'Search',
    description: 'Find restaurants by location and cuisine'
  },
  {
    icon: GitCompare,
    title: 'Compare',
    description: 'Read reviews and check availability'
  },
  {
    icon: CalendarCheck,
    title: 'Book',
    description: 'Reserve your table in seconds'
  }
];

function HowItWorks() {
  return (
    <section className="how-it-works" id="about">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">
          Book your perfect dining experience in three simple steps
        </p>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div className="step-card" key={index}>
              <div className="step-icon">
                <step.icon size={36} />
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
