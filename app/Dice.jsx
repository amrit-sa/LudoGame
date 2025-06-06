import { AppContext } from "@/context/AppContext";
import React, { useContext, useState, useEffect, useRef } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Animated } from "react-native";
import { Audio } from 'expo-av';

// const diceSound = new Audio.Sound.createAsync(
//     require('@/assets/sounds/dice-rolling-1.mp3'),
//     { shouldPlay: false },
//     (error) => {
//         if (error) {
//             // console.error('Failed to load the sound', error);
//         }
//     }
// );


const Dice = ({ isDisable }) => {
    const { diceValue, rollDice } = useContext(AppContext);
    const [isRolling, setIsRolling] = useState(false);
    const prevDiceValue = useRef(0);
    const [sound, setSound] = useState();

    useEffect(() => {
        loadSound();
        return () => {
            if (sound) {
                sound.unloadAsync();
            }
        };
    }, []);

    async function loadSound() {
        const { sound } = await Audio.Sound.createAsync(
            require('@/assets/sounds/dice-rolling-1.mp3')
        );
        setSound(sound);
    }

    async function playSound() {
        if (sound) {
            try {
                await sound.replayAsync();
            } catch (error) {
                console.error('Failed to play sound', error);
            }
        }
    }

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

    const handleDiceClickEvent = async() => {
        await playSound();
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
                        style={[{ width: 50, height: 50 }, animatedStyle]}
                    />
                ) : (diceValue === 0) ?
                    <Image source={diceRolling} style={{ width: 45, height: 40 }} />
                    : (
                        <Image source={diceImages[diceValue]} style={{ width: 40, height: 40, borderRadius: 5 }} />
                    )
                }

            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    dice: {
        width: 45,
        height: 45,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 4,
        borderColor: 'black',
    },
    text: {
        fontSize: 10,
    },
});

export default Dice;
