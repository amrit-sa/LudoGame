import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import Goti from "./Goti";

const WinningZone = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../assets/images/winningZone.png")} // Path to your image
                style={styles.winningZone}
            >
                {/* Optional content inside the winning zone */}
                {/* <View style={styles.innerBox}>
                    <Goti goti={{
                        "color": "yellow",
                        "id": "Y-D",
                        "position": 35,
                        "isHome": false
                    }} />
                </View> */}
            </ImageBackground>
        </View>
    );
};

export default WinningZone;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    winningZone: {
        width: 75, // Set the size of the square
        height: 75,
        justifyContent: "center",
        alignItems: "center", // Center any content inside the square
    },
    innerBox: {
        width: 50,
        height: 50,
        backgroundColor: "rgba(255, 255, 255, 0.5)", // Semi-transparent inner content
        borderRadius: 10,
    },
});
