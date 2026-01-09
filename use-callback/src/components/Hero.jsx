const Hero = ({ isLoading, isError }) => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <input type="text" className="hero-input" placeholder="Search..." />
        <button className="hero-button">Clear</button>
        {isLoading && <p className="hero-loading">Loading...</p>}
        {isError && <p className="hero-error">Error</p>}
      </div>
    </div>
  );
};

export default Hero;
