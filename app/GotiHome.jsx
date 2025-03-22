import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Goti } from "./Goti";

export const GotiHome = ({color}) => {
    return (
        <View style={styles.home}>
            <View style={styles.grid}>
                {[1, 2, 3, 4].map((value) => <Goti key={value} color={color} gotiValue={value} /> )}
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    home: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    grid: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },


});
