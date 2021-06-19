import React from 'react';
import { Tile } from '../tile/Tile.js';

export const TileList = ({ list }) => {
  return (
    <div>
      {list.map((item) => {
        return <Tile item={item} />
      })}
    </div>
  );
};