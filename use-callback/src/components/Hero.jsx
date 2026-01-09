const Hero = ({ isLoading, isError, searchTerm, setSearchTerm }) => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <input
          type="text"
          className="hero-input"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {searchTerm && (
          <button className="hero-button" onClick={() => setSearchTerm('')}>
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
