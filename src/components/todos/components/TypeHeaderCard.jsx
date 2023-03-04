import React from 'react';

const TypeHeaderCard = ({ barColor, title, count }) => {
  return (
    <div className="todos__typeCard">
      <div style={{ background: barColor }} className="bar"></div>
      <div className="flex items-center ml-10 mt-10">
        <b>{title}</b>
        <div className="todos__count">{count}</div>
      </div>
    </div>
  );
};


export default TypeHeaderCard;