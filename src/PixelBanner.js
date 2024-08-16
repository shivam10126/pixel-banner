// src/PixelBanner.js
import React, { useEffect, useState } from 'react';
import CHAR_MAP from "./char_map";

const PixelBanner = ({ text }) => {
  const [scrollPosition, setScrollPosition] = useState(400); // Start from the right

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prevPosition) => {
        const newPosition = prevPosition - 2; // Adjust speed by changing this value
        const textWidth = text.length * 80; // Calculate the total width of the text
        return newPosition <= -textWidth ? 400 : newPosition; // Reset when text fully exits
      });
    }, 10); // Adjust interval duration to control speed

    return () => clearInterval(interval);
  }, [text]);

  const renderCharacter = (char) => {
    const grid = CHAR_MAP[char.toUpperCase()] || CHAR_MAP[' '];
    return grid.map((row, rowIndex) => (
      <div key={rowIndex} style={{ display: 'flex' }}>
        {row.map((pixel, colIndex) => (
          <div
            key={colIndex}
            style={{
              width: '10px',
              height: '10px',
              backgroundColor: pixel ? '#FF0000' : 'transparent',
              margin: '0.5px',
            }}
          />
        ))}
      </div>
    ));
  };
  const renderCharacter2 = (char) => {
    const grid = CHAR_MAP[char.toUpperCase()] || CHAR_MAP[' '];
    return grid.map((row, rowIndex) => (
      <div key={rowIndex} style={{ display: 'flex' }}>
        {row.map((pixel, colIndex) => (
          <div
            key={colIndex}
            style={{
              width: '10px',
              height: '10px',
              backgroundColor: pixel ? '#FF0000' : 'black',
              margin: '0.5px',
            }}
          />
        ))}
      </div>
    ));
  };

  const renderText = () => {
    return text.split('').map((char, index) => (
      <div key={index}>
        {renderCharacter(char)}
      </div>
    ));
  };

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '463px',  // Width of the window
        height: '120px',  // Height of the window
        margin: '0 auto',  // Center the window horizontally
        border: '2px solid #FFF',  // Optional: Add a border around the window
        backgroundColor: '#333',
        msOverflowX:'hidden'
      }}
    >
      <div
      style={{
        position:'fixed',
        display:'flex'
      }}
      >
        <div>
      {renderCharacter2(" ")}
        </div>
        <div>
      {renderCharacter2(" ")}
        </div>
        <div>
      {renderCharacter2(" ")}
        </div>
        <div>
      {renderCharacter2(" ")}
        </div>
        <div>
      {renderCharacter2(" ")}
        </div>
        <div>
      {renderCharacter2(" ")}
        </div>
      </div>
      
      <div
        style={{
          display: 'flex',
          transform: `translateX(${scrollPosition}px)`,
          whiteSpace: 'nowrap',
        }}
      >
        {renderText()}
      </div>
    </div>
  );
};

export default PixelBanner;
