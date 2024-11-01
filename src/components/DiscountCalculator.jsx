import React, { useState } from 'react';
import '../App.css';

function DiscountCalculator() {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [finalPrice, setFinalPrice] = useState(null);

  const calculateDiscount = () => {
    const discountAmount = (originalPrice * discountPercentage) / 100;
    setFinalPrice(originalPrice - discountAmount);
  };

  const resetFields = () => {
    setOriginalPrice('');
    setDiscountPercentage('');
    setFinalPrice(null);
  };

  return (
    <div className="discount-calculator">
      <h1>Discount Calculator</h1>
      <div>
        <label>
          Original Price:
          <input
            type="number"
            value={originalPrice}
            onChange={(e) => setOriginalPrice(e.target.value)}
            placeholder="Enter original price"
          />
        </label>
      </div>
      <div>
        <label>
          Discount Percentage:
          <input
            type="number"
            value={discountPercentage}
            onChange={(e) => setDiscountPercentage(e.target.value)}
            placeholder="Enter discount %"
          />
        </label>
      </div>
      <div className="button-group">
        <button onClick={calculateDiscount} className="calculate-button">Calculate Discount</button>
        <button onClick={resetFields} className="reset-button">Reset</button>
      </div>
      {finalPrice !== null && (
        <div>
          <h2>Final Price: ${finalPrice.toFixed(2)}</h2>
          <div className="info">
            Note: The final price is calculated by subtracting the discount from the original price.
          </div>
        </div>
      )}
    </div>
  );
}

export default DiscountCalculator;
