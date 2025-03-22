// components/Board.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Rect } from 'react-native-svg';
import Piece from './Piece';

const Board = () => {
  const boardSize = 300;
  const cellSize = boardSize / 15;

  const renderCells = () => {
    let cells = [];
    for (let i = 0; i < 15; i++) {
      for (let j = 0; j < 15; j++) {
        cells.push(
          <Rect
            key={`cell-${i}-${j}`}
            x={j * cellSize}
            y={i * cellSize}
            width={cellSize}
            height={cellSize}
            fill={(i + j) % 2 === 0 ? '#FFD700' : '#FFA500'}
            stroke="#000"
            strokeWidth="1"
          />
        );
      }
    }
    return cells;
  };

  return (
    <View style={styles.container}>
      <Svg height={boardSize} width={boardSize}>
        {renderCells()}
        <Piece color="red" x={cellSize * 2} y={cellSize * 2} />
        <Piece color="blue" x={cellSize * 12} y={cellSize * 2} />
        <Piece color="green" x={cellSize * 2} y={cellSize * 12} />
        <Piece color="yellow" x={cellSize * 12} y={cellSize * 12} />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Board;