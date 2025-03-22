import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native"

export const Dice = ({isDisable}) => {
const [diceValue, setDiceValue] = useState(1);

    const rollDice = () => {
        const value = Math.floor(Math.random() * 6) + 1;
        setDiceValue(value);
        return value;
    };

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