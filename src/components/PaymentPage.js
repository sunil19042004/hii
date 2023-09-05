import React, { useState } from 'react';
import './PaymentPage.css';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handlePaymentSubmit = () => {
    // Implement your payment processing logic here
    alert(`Payment method selected: ${paymentMethod}`);
  };

  return (
    <div className="payment-page">
      <h1>Payment Page</h1>
      <div className="payment-methods">
        <div className="payment-method">
          <input
            type="radio"
            id="creditCard"
            name="paymentMethod"
            value="Credit Card"
            onChange={() => handlePaymentMethodChange('Credit Card')}
          />
          <label htmlFor="creditCard">Credit Card</label>
        </div>

        <div className="payment-method">
          <input
            type="radio"
            id="paypal"
            name="paymentMethod"
            value="PayPal"
            onChange={() => handlePaymentMethodChange('PayPal')}
          />
          <label htmlFor="paypal">PayPal</label>
        </div>

        <div className="payment-method">
          <input
            type="radio"
            id="stripe"
            name="paymentMethod"
            value="Stripe"
            onChange={() => handlePaymentMethodChange('Stripe')}
          />
          <label htmlFor="stripe">Stripe</label>
        </div>
      </div>

      <button className="submit-button" onClick={handlePaymentSubmit}>
        Submit Payment
      </button>
    </div>
  );
};

export default PaymentPage;
