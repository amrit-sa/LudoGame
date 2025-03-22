import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { DiceHome } from "./DiceHome";
import DicePath from "./Dicepath";

const LudoGame = () => {
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
      newPositions[color][pieceIndex] += diceValue;
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
    <View style={styles.container}>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        <View style={styles.diceHomeWrapper}>
          <DiceHome
            players={players}
            movePiece={movePiece}
            currentTurn={currentTurn}
            diceValue={diceValue}
            color="red"
          />
        </View>

        <View style={styles.upperDicePath}>
          <DicePath position={'top'}/>
        </View>

        <View style={styles.diceHomeWrapper}>
          <DiceHome
            players={players}
            movePiece={movePiece}
            currentTurn={currentTurn}
            diceValue={diceValue}
            color="green"
          />
        </View>
      </View>

      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        

        <View style={styles.upperDicePath}>
          <DicePath position={'left'}/>
        </View>

        <View style={styles.winningWrapper}>

        </View>

        <View style={styles.upperDicePath}>
          <DicePath position={'right'}/>
        </View>
      </View>

      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        <View style={styles.diceHomeWrapper}>
          <DiceHome
            players={players}
            movePiece={movePiece}
            currentTurn={currentTurn}
            diceValue={diceValue}
            color="orange"
          />
        </View>

        <View style={styles.upperDicePath}>
          <DicePath position={'bottom'}/>
        </View>

        <View style={styles.diceHomeWrapper}>
          <DiceHome
            players={players}
            movePiece={movePiece}
            currentTurn={currentTurn}
            diceValue={diceValue}
            color="blue"
          />
        </View>
      </View>
    </View>


    // <View style={styles.container}>
    //   <Text style={styles.turnIndicator}>{currentTurn.toUpperCase()} Turn</Text>
    //   <Text style={styles.diceValue}>Dice: {diceValue}</Text>
    //   <TouchableOpacity style={styles.diceButton} onPress={rollDice}>
    //     <Text style={styles.diceButtonText}>Roll Dice</Text>
    //   </TouchableOpacity>
    //   <View style={styles.board}>
    //     <View style={styles.row}>
    //       <DiceHome 
    //         players={players}
    //         movePiece={movePiece}
    //         currentTurn={currentTurn}
    //         diceValue={diceValue}
    //         color="red"
    //       />
    //       {/* {renderHome("red")} */}
    //       <View style={styles.path} />
    //       {/* {renderHome("green")} */}
    //       <DiceHome 
    //         players={players}
    //         movePiece={movePiece}
    //         currentTurn={currentTurn}
    //         diceValue={diceValue}
    //         color="green"
    //       />
    //     </View>
    //     <View style={styles.row}>
    //       <View style={styles.path} />
    //       <View style={styles.center}>
    //         <Text style={styles.centerText}>LUDO</Text>
    //       </View>
    //       <View style={styles.path} />
    //     </View>
    //     <View style={styles.row}>
    //     <DiceHome 
    //         players={players}
    //         movePiece={movePiece}
    //         currentTurn={currentTurn}
    //         diceValue={diceValue}
    //         color="blue"
    //       />
    //       <View style={styles.path} />
    //       <DiceHome 
    //         players={players}
    //         movePiece={movePiece}
    //         currentTurn={currentTurn}
    //         diceValue={diceValue}
    //         color="yellow"
    //       />
    //     </View>
    //   </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  diceHomeWrapper: {
    width: 300,
    height: 300,
    backgroundColor: "gray",
    borderRadius: 10,
    marginBottom: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  winningWrapper: {
    width: 150,
    height: 150,
    backgroundColor: "purple",
    borderRadius: 5,
    marginBottom: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  upperDicePath: {

  },
  innerBoxRowOne: {
    flex: 1,
    justifyContent: "space-around"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  turnIndicator: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  diceValue: {
    fontSize: 18,
    marginBottom: 20,
  },
  diceButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  diceButtonText: {
    color: "white",
    fontSize: 16,
  },
  board: {
    width: 300,
    height: 300,
    flexDirection: "column",
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  home: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 10,
  },
  piece: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  pieceText: {
    fontWeight: "bold",
  },
  path: {
    flex: 1,
    backgroundColor: "#e0e0e0",
    margin: 5,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFEB3B",
    margin: 5,
    borderRadius: 10,
  },
  centerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default LudoGame;
