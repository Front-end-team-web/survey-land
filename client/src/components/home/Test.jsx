import React from 'react';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to My App</h1>
        <p>Your gateway to amazing experiences</p>
        <button>Get Started</button>
      </section>

      {/* Features Grid */}
      <section className="features">
        <div className="feature-card">
          <h3>Fast</h3>
          <p>Lightning-speed performance</p>
        </div>
        <div className="feature-card">
          <h3>Secure</h3>
          <p>Bank-grade encryption</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;