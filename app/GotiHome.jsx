import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Goti } from "./Goti";
import { AppContext } from "@/context/AppContext";

export const GotiHome = ({ color }) => {
    const { currentTurn } = useContext(AppContext);

    return (
        <View style={[styles.home,
        currentTurn === color && { border: `4px solid ${color}`, backgroundColor: 'white' }

        ]}>
            <View style={styles.grid}>
                {/* {[1, 2, 3, 4].map((value) => (
                    <View style={styles.corner}>
                        <TouchableOpacity
                            style={[styles.gotiHomePlace, { backgroundColor: color }]}
                        >
                           <Goti />
                        </TouchableOpacity>
                    </View>
                ))} */}

                <View style={styles.corner}>
                    <View
                        style={[styles.gotiHomePlace, { borderColor: color }]}
                    >
                        <Goti color={color}/>
                    </View>
                </View>

                <View style={styles.corner}>
                    <View
                        style={[styles.gotiHomePlace, { borderColor: color }]}
                    >
                        <Goti color={color}/>
                    </View>
                </View>

                <View style={styles.corner}>
                    <View
                        style={[styles.gotiHomePlace, { borderColor: color }]}
                    >
                        <Goti color={color}/>
                    </View>
                </View>

                <View style={styles.corner}>
                    <View
                        style={[styles.gotiHomePlace, { borderColor: color } ]}
                    >
                        <Goti color={color}/>
                    </View>
                </View>
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
