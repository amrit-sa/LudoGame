import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Goti } from "./Goti";
import { AppContext } from "@/context/AppContext";
import { GOTIES } from '@/utils/constants';

export const GotiHome = ({ color }) => {
    const { currentTurn, gamePosition } = useContext(AppContext);
    const [gotiA, gotiB, gotiC, gotiD] = GOTIES[color];

    return (
        <View style={[styles.home,
        currentTurn === color && { border: `4px solid ${color}`, backgroundColor: 'white' }

        ]}>
            <View style={styles.grid}>

                {GOTIES[color].map((goti) => {
                    return (
                        <View style={styles.corner}>
                            <View
                                style={[styles.gotiHomePlace, { borderColor: color }]}
                            >
                                {(gamePosition[goti]['position'] === goti) && <Goti color={color} goti={gamePosition[goti]} />}
                            </View>
                        </View>
                    )
                })}

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
    corner: {
        width: '50%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    gotiHomePlace: {
        width: 50,
        height: 50,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        border: `4px solid`
    },
});
