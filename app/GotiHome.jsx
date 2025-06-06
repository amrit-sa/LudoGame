import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Goti from "./Goti";
import { AppContext } from "@/context/AppContext";
import { GOTIES } from '@/utils/constants';

const GotiHome = ({ color }) => {
    const { currentTurn, gamePosition } = useContext(AppContext);
    const [gotiA, gotiB, gotiC, gotiD] = GOTIES[color];

    return (
        <View style={[styles.home,
        currentTurn === color ? { boxShadow: `0 0 6px 13px ${color} inset`, backgroundColor: 'rgb(179 179 179)' }
            : {boxShadow: `0 0 0px 13px ${color} inset`, backgroundColor: 'rgb(63 61 61)'}
        ]}>
            <View style={styles.grid}>

                {GOTIES[color].map((goti,index) => {
                    return (
                        <View style={styles.corner} key={goti+index}>
                            <View
                                // style={[styles.gotiHomePlace, { boxShadow : `0 0 1px 1px ${color}` }]}
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
        width: 30,
        height: 30,
        // borderRadius: '50%',
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "black",
        // border: `4px solid`,
        
    },
});

export default GotiHome;
