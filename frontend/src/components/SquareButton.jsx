import React from 'react'; 
import './SquareButton.css';

function SquareButton({ onClick, children }) {
  return (
    <button className="SquareButton" onClick={onClick}>
      {children}
    </button>
  );
}

export default SquareButton;