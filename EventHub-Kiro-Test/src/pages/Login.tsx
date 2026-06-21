import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Login logic will be added in Phase 2
    console.log('Login:', { email, password });
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <h1>Welcome Back</h1>
          <p>Sign in to access your account</p>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="email">
                <Mail size={18} />
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">
                <Lock size={18} />
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="forgot-link">Forgot Password?</a>
            </div>

            <button type="submit" className="btn btn-primary btn-full">
              Sign In
              <ArrowRight size={18} />
            </button>
          </form>

          <p className="auth-footer">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
