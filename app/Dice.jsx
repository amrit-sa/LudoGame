import { AppContext } from "@/context/AppContext";
import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native"

export const Dice = ({ isDisable }) => {

    const { diceValue, rollDice } = useContext(AppContext);


    return (
        <TouchableOpacity
            onPress={rollDice}
            disabled={isDisable}
        >
            <View style={styles.dice}>
                <Text style={styles.text}>{diceValue}</Text>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    dice: {
        width: 70,
        height: 70,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        border: '4px solid black'
    },
    text: {
        fontSize: 30,
    }

});