function Header() {
  return (
    <header className="header">
      {/* TOP NAVIGATION */}
      <nav className="top-nav">
        <a className="active" href="#">
          Shop all
        </a>

        <a href="#">Nuts</a>
        <a href="#">Spices</a>
        <a href="#">Dried fruits</a>
        <a href="#">Cake ingredients</a>
        <a href="#">Bulk & shop orders</a>
        <a href="#">Track order</a>
        <a href="#">Help</a>
      </nav>

      {/* MAIN HEADER */}
      <div className="header-main">

        {/* LOGO */}
        <div className="brand">
          <div className="brand-icon">
            <svg
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="20" />

              <path
                d="M20 29V15"
                stroke="white"
                strokeWidth="1.7"
                strokeLinecap="round"
              />

              <path
                d="M20 19C14 19 11 16 11 12"
                stroke="white"
                strokeWidth="1.7"
                fill="none"
                strokeLinecap="round"
              />

              <path
                d="M20 23C26 23 29 20 29 16"
                stroke="white"
                strokeWidth="1.7"
                fill="none"
                strokeLinecap="round"
              />

              <path
                d="M20 15C20 11 23 9 27 9"
                stroke="white"
                strokeWidth="1.7"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="brand-text">
            <strong>Jayarasa</strong>
            <span>MIX & NUT</span>
          </div>
        </div>

        {/* SEARCH */}
        <div className="search-box">
          <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              cx="11"
              cy="11"
              r="7"
              stroke="currentColor"
              strokeWidth="1.8"
            />

            <path
              d="M16.5 16.5L21 21"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>

          <input
            type="text"
            placeholder="Search cashews, cardamom, cake ingredients..."
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="header-actions">

          <button className="account-button">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12"
                cy="8"
                r="3.5"
                stroke="currentColor"
                strokeWidth="1.6"
              />

              <path
                d="M5 21C5 16.8 8 14 12 14C16 14 19 16.8 19 21"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>

            <span>Account</span>
          </button>

          <button className="cart-button">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 8H19L18 20H6L5 8Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />

              <path
                d="M9 8V6C9 4.3 10.3 3 12 3C13.7 3 15 4.3 15 6V8"
                stroke="currentColor"
                strokeWidth="1.6"
              />
            </svg>

            <span>Cart (3)</span>
          </button>

        </div>
      </div>
    </header>
  );
}

export default Header;