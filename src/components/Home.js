
import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [cartCount, setCartCount] = useState(0);
  const [showProductDetails, setShowProductDetails] = useState(false);

  const handleCartClick = () => {
    setCartCount(cartCount + 1);
  };

  const toggleProductDetails = () => {
    setShowProductDetails(!showProductDetails);
  };

  return (
    <div className="home-page">
      <h1>Welcome to our Online Store</h1>
      <div className="buttons">
        <button className="search-button">Search</button>
        <button className="cart-button" onClick={handleCartClick}>
          Cart ({cartCount})
        </button>
        <button className="product-details-button" onClick={toggleProductDetails}>
          Product Details
        </button>
      </div>
      {showProductDetails && (
        <div className="product-details">
          <h2>Product Details</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec quam sit amet libero
            semper interdum.
          </p>
          <ul>
            <li>Product: Example Product</li>
            <li>Price: $19.99</li>
            <li>Description: This is an example product description.</li>
          </ul>
        </div>
      )}
      <div className="contact-details">
        <h2>Contact Details</h2>
        <p>
          For any inquiries or assistance, please contact us:
        </p>
        <address>
          Email: <a href="mailto:info@example.com">info@example.com</a><br />
          Phone: <a href="tel:+123456789">+1 (234) 567-89</a><br />
          Address: 123 Main Street, City, Country
        </address>
      </div>
    </div>
  );
};

export default Home;
