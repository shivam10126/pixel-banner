// src/App.js
import React, { useState } from 'react';
import PixelBanner from './PixelBanner';
import "./App.css"

function App() {
  const [text, setText] = useState('HELLO WORLD');

  return (
    <div style={{ textAlign: 'center', padding: '50px 0' }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text"
        style={{ marginBottom: '20px', fontSize: '20px', padding: '10px' }}
      />
      <PixelBanner text={text} />
    </div>
  );
}

export default App;
