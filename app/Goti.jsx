import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import redGoti from '@/assets/images/red-goti.png';
import greenGoti from '@/assets/images/green-goti.png';
import yellowGoti from '@/assets/images/yellow-goti.png';
import blueGoti from '@/assets/images/blue-goti.png';
import { AppContext } from "@/context/AppContext";

const getGotiImage = (color) => {
    switch (color) {
        case "red":
            return redGoti;
        case "green":
            return greenGoti;
        case "yellow":
            return yellowGoti;
        case "blue":
            return blueGoti;
        default:
            return redGoti;
    }
}

export const Goti = ({ goti }) => {

    const { color } = goti;
    const { currentTurn, diceValue, movePiece } = useContext(AppContext);

    return (

        <TouchableOpacity
            onPress={() => {
                if (currentTurn === goti.color && diceValue > 0) movePiece(goti);
            }}
        >
            <Image source={getGotiImage(color)} style={{ width: 20, height: 40 }} />
            {/* <Text>{gotiValue > 0? gotiValue : ""}</Text> */}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    pieceText: {
        // fontWeight: "bold",
        // color: 'white',
    },
    corner: {
        // width: '50%',
        // height: '50%',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    piece: {
        // width: 50,
        // height: 50,
        // borderRadius: 15,
        // justifyContent: "center",
        // alignItems: "center",
    },

});