import React from 'react';

export const Tile = ({ item }) => {
  const titles = Object.values(item);

  return (
    <div className='tile-container'>
      {titles.map((title, index) => {
        return <p className={index === 0 ? "tile-title" : "tile"} key={index}>{title}</p>
      })}
    </div>
  );
};