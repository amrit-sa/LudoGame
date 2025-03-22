// context/AppContext.js
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [value, setValue] = useState("Hello from Context!");
  const [players, setPlayers] = useState({
    red: [0, 0, 0, 0],
    blue: [0, 0, 0, 0],
    green: [0, 0, 0, 0],
    yellow: [0, 0, 0, 0],
  });
  const [currentTurn, setCurrentTurn] = useState("red");
  const [diceValue, setDiceValue] = useState(1);
  

  const rollDice = () => {
    const value = Math.floor(Math.random() * 6) + 1;
    setDiceValue(value);
    return value;
};

  const movePiece = (color, pieceIndex) => {
    setPlayers((prevPlayers) => {
      const newPositions = { ...prevPlayers };
      newPositions[color][pieceIndex] += gotiValue;
      return newPositions;
    });
    nextTurn();
  };

  const nextTurn = () => {
    const colors = ["red", "blue", "green", "yellow"];
    const nextIndex = (colors.indexOf(currentTurn) + 1) % colors.length;
    setCurrentTurn(colors[nextIndex]);
  };

  return (
    <AppContext.Provider value={{ 
        value,setValue,
        players, setPlayers,
        currentTurn, setCurrentTurn,
        diceValue, setDiceValue,
        rollDice,
        movePiece,
        nextTurn,
     }}>
      {children}
    </AppContext.Provider>
  );
};
