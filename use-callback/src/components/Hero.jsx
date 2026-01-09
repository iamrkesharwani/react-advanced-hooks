const Hero = ({ isLoading, isError, searchTerm, onSearchChange }) => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <input
          type="text"
          className="hero-input"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />

        {searchTerm && (
          <button className="hero-button" onClick={() => onSearchChange('')}>
            Clear
          </button>
        )}

        {isLoading && <p className="hero-loading">Loading...</p>}
        {isError && <p className="hero-error">Error</p>}
      </div>
    </div>
  );
};

export default Hero;
