import React from 'react';

const Widget = ({ name, text, onRemove }) => {
  return (
    <div className="widget">
      <div className="widget-title">
        <h2>{name}</h2>
        <button onClick={onRemove} aria-label="Remove widget">
          &times;
        </button>
      </div>
      <div className="widget-content">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Widget;
