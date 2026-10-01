function SearchBar() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="search-wrapper">
      <div className="container">
        <form className="travel-search" onSubmit={handleSubmit}>

          <div className="search-field">
            <span className="search-icon">⌖</span>

            <div>
              <label>Destination</label>

              <select defaultValue="">
                <option value="" disabled>
                  Where would you like to go?
                </option>

                <option>Sigiriya</option>
                <option>Ella</option>
                <option>Kandy</option>
                <option>Galle</option>
                <option>Yala</option>
                <option>Mirissa</option>
              </select>
            </div>
          </div>

          <div className="search-field">
            <span className="search-icon">◷</span>

            <div>
              <label>Duration</label>

              <select defaultValue="">
                <option value="" disabled>
                  Select duration
                </option>

                <option>3 - 5 Days</option>
                <option>6 - 8 Days</option>
                <option>9 - 12 Days</option>
                <option>13+ Days</option>
              </select>
            </div>
          </div>

          <div className="search-field">
            <span className="search-icon">✦</span>

            <div>
              <label>Experience</label>

              <select defaultValue="">
                <option value="" disabled>
                  Choose experience
                </option>

                <option>Culture</option>
                <option>Wildlife</option>
                <option>Beaches</option>
                <option>Adventure</option>
                <option>Nature</option>
              </select>
            </div>
          </div>

          <button className="primary-btn search-btn" type="submit">
            Find Your Journey
          </button>

        </form>
      </div>
    </div>
  );
}

export default SearchBar;