import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export const Goti = ({color, gotiValue}) => {
    return (
        <View style={styles.corner}>
            <TouchableOpacity
                // onPress={() => {
                //     if (currentTurn === color && gotiValue > 0) movePiece(color, index);
                // }}
                style={[styles.piece, { backgroundColor: color }]}
            >
                <Text style={styles.pieceText}>{gotiValue}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    pieceText: {
        fontWeight: "bold",
        color: 'white',
    },
    corner: {
        width: '50%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    piece: {
        width: 50,
        height: 50,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },

});