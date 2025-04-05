import { AppContext } from "@/context/AppContext";
import React, { useContext, useState, useEffect, useRef } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Animated } from "react-native";

export const Dice = ({ isDisable }) => {
    const { diceValue, rollDice } = useContext(AppContext);
    const [isRolling, setIsRolling] = useState(false);
    const prevDiceValue = useRef(0);

    const diceImages = {
        '0': require('@/assets/images/dice_one.jpg'),
        '1': require('@/assets/images/dice_one.jpg'),
        '2': require('@/assets/images/dice_two.jpg'),
        '3': require('@/assets/images/dice_three.jpg'),
        '4': require('@/assets/images/dice_four.jpg'),
        '5': require('@/assets/images/dice_five.jpg'),
        '6': require('@/assets/images/dice_six.jpg'),
    };
    const diceRolling = require('@/assets/images/dice_rolling_white.png');

    const rotation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (diceValue !== 0) {
            // prevDiceValue.current = diceValue;
            // setIsRolling(true);
            // Animated.timing(rotation, {
            //     toValue: 1,
            //     duration: 300, // 1 second per rotation
            //     useNativeDriver: true,
            // }).start();
            setTimeout(() => {
                setIsRolling(false);
                rotation.setValue(0);
            // rollDice();
            }, 500); // 1 second after rolling
        }
    }, [diceValue]);

    const rotateInterpolate = rotation.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "900deg"],
    });

    const animatedStyle = {
        transform: [{ rotate: rotateInterpolate }],
    };

    const handleDiceClickEvent = () => {

        setIsRolling(true);
        Animated.loop(
            Animated.timing(rotation, {
                toValue: 1,
                duration: 300, // 1 second per rotation
                useNativeDriver: true,
            })
        ).start();
        setTimeout(() => {
            setIsRolling(false);
            rotation.setValue(0);
            rollDice();
        }, 500); // 1 second after rolling
    }

    return (
        <TouchableOpacity
            onPress={diceValue === 0 ? handleDiceClickEvent : null}
            disabled={isDisable}
        >
            <View>
                {isRolling ? (
                    <Animated.Image
                        source={diceRolling}
                        style={[{ width: 100, height: 90 }, animatedStyle]}
                    />
                ) : (diceValue === 0) ?
                    <Image source={diceRolling} style={{ width: 80, height: 70 }} />
                    : (
                        <Image source={diceImages[diceValue]} style={{ width: 50, height: 50 }} />
                    )
                }

            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    dice: {
        width: 70,
        height: 70,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 4,
        borderColor: 'black',
    },
    text: {
        fontSize: 30,
    },
});
