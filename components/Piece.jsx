// components/Piece.js
import React from 'react';
import { Circle } from 'react-native-svg';

const Piece = ({ color, x, y }) => {
  return <Circle cx={x} cy={y} r="10" fill={color} />;
};

export default Piece;