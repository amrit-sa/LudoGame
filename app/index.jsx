import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import GotiHome from "./GotiHome";
import GotiPath from "./Gotipath";
import Dice from "./Dice";
import { AppContext } from "@/context/AppContext";
import Pevelion from "./Pevelion";
import WinningZone from "./WinningZone";

const LudoGame = () => {
  const { currentTurn } = useContext(AppContext);

  return (
    <>
      <View style={[styles.container]}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={styles.gotiHomeWrapper}>
            <GotiHome
              color="red"
            />
          </View>

          <View style={styles.upperGotiPath}>
            <GotiPath position={'top'} />
          </View>

          <View style={styles.gotiHomeWrapper}>
            <GotiHome
              color="green"
            />
          </View>
        </View>

        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: -1 }}>


          <View style={[styles.upperGotiPath, { marginLeft: 8}]}>
            <GotiPath position={'left'} />
          </View>

          {/* <View style={[styles.winningWrapper, { backgroundColor: currentTurn, boxShadow: `0 0 2px 6px ${currentTurn} inset` }]}> */}
            {/* <Dice /> */}
          {/* </View> */}
          <WinningZone />

          <View style={[styles.upperGotiPath, { marginRight: 8}]}>
            <GotiPath position={'right'} />
          </View>
        </View>

        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={styles.gotiHomeWrapper}>
            <GotiHome
              color="yellow"
            />
          </View>

          <View style={styles.upperGotiPath}>
            <GotiPath position={'bottom'} />
          </View>

          <View style={styles.gotiHomeWrapper}>
            <GotiHome
              color="blue"
            />
          </View>
        </View>
      </View>

      <Pevelion />
    </>
    // <View style={styles.container}>
    //   <Text style={styles.turnIndicator}>{currentTurn.toUpperCase()} Turn</Text>
    //   <Text style={styles.gotiValue}>Goti: {gotiValue}</Text>
    //   <TouchableOpacity style={styles.gotiButton} onPress={rollGoti}>
    //     <Text style={styles.gotiButtonText}>Roll Goti</Text>
    //   </TouchableOpacity>
    //   <View style={styles.board}>
    //     <View style={styles.row}>
    //       <GotiHome 
    //         players={players}
    //         movePiece={movePiece}
    //         currentTurn={currentTurn}
    //         gotiValue={gotiValue}
    //         color="red"
    //       />
    //       {/* {renderHome("red")} */}
    //       <View style={styles.path} />
    //       {/* {renderHome("green")} */}
    //       <GotiHome 
    //         players={players}
    //         movePiece={movePiece}
    //         currentTurn={currentTurn}
    //         gotiValue={gotiValue}
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
    //     <GotiHome 
    //         players={players}
    //         movePiece={movePiece}
    //         currentTurn={currentTurn}
    //         gotiValue={gotiValue}
    //         color="blue"
    //       />
    //       <View style={styles.path} />
    //       <GotiHome 
    //         players={players}
    //         movePiece={movePiece}
    //         currentTurn={currentTurn}
    //         gotiValue={gotiValue}
    //         color="yellow"
    //       />
    //     </View>
    //   </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  gotiHomeWrapper: {
    width: 150,
    height: 150,
    backgroundColor: "black",
    // borderRadius: 10,
    marginBottom: 1,
    shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  winningWrapper: {
    width: 75,
    height: 75,
    backgroundColor: "white",
    // borderRadius: 5,
    // marginBottom: 0,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // elevation: 1,
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
  },
  upperGotiPath: {
    
  },
  innerBoxRowOne: {
    flex: 1,
    justifyContent: "space-around"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(8 13 69)",
  },
  turnIndicator: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  gotiValue: {
    fontSize: 18,
    marginBottom: 20,
  },
  gotiButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  gotiButtonText: {
    color: "white",
    fontSize: 16,
  },
  board: {
    width: 200,
    height: 200,
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
    width: 20,
    height: 20,
    borderRadius: 8,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    margin: 3,
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
