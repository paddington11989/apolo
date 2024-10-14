



// src/App.js
import React, { useState } from 'react';
import ProductDetail from './productDetail';

const App = () => {
  const [barcodeId, setBarcodeId] = useState('365'); // По умолчанию ID = 365

  const handleChange = (e) => {
    setBarcodeId(e.target.value);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Детали продукта</h1>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="barcodeId">Введите ID продукта: </label>
        <input
          type="text"
          id="barcodeId"
          value={barcodeId}
          onChange={handleChange}
          style={{ marginLeft: '10px' }}
        />
      </div>
      <ProductDetail barcodeId={barcodeId} />
    </div>
  );
};

export default App;

