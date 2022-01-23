import React from 'react';
import './style.css';
import BTCTracker from './BTCTracker.js';

export default function App() {
  return (
    <div>
      <h1 className="header">React Bitcoin Tracker</h1>
      <BTCTracker />
    </div>
  );
}
