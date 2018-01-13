import React from 'react';

import './styles.css';

const LoadingIndicator = () => (
  <div className="loading-indicator">
    <div className="loading-indicator__circle" />
    <div className="loading-indicator__circle" />
    <div className="loading-indicator__circle" />
    <div className="loading-indicator__circle" />
  </div>
);

export default LoadingIndicator;
