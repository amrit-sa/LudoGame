import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Goti from "./Goti";
import { AppContext } from "@/context/AppContext";
import { GOTIES } from '@/utils/constants';
import Dice from "./Dice";
import redGoti from '@/assets/images/red-goti.png';
const Pevelion = () => {
    const { currentTurn, gamePosition } = useContext(AppContext);
    // const [gotiA, gotiB, gotiC, gotiD] = GOTIES[currentTurn];

    return (
        // <View style={[styles.home,
        // currentTurn === color ? { boxShadow: `0 0 6px 13px ${color} inset`, backgroundColor: 'white' }
        //     : {boxShadow: `0 0 0px 13px ${color} inset`, backgroundColor: 'white'}
        // ]}>
        //     <View style={styles.grid}>

        //         {GOTIES[color].map((goti,index) => {
        //             return (
        //                 <View style={styles.corner} key={goti+index}>
        //                     <View
        //                         // style={[styles.gotiHomePlace, { boxShadow : `0 0 1px 1px ${color}` }]}
        //                     >
        //                         {(gamePosition[goti]['position'] === goti) && <Goti color={color} goti={gamePosition[goti]} />}
        //                     </View>
        //                 </View>
        //             )
        //         })}

        //     </View>
        // </View>
        <View style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            position: 'absolute',  // Add this
            bottom: 10,           // Add this
            width: '100%'
        }}>
            <View style={[styles.bottomRow]}>
                {/* <View style={{ display: 'flex', flexDirection: 'row', alignItems:'normal', justifyContent: 'space-around' }}> */}
                <View className="user-info-bottom-box" style={styles.playerBox}>
                    <Image source={redGoti} style={{ width: 20, height: 40 }} />
                    <Text style={{ color: '#000000', fontSize: 16 }}>Amrit</Text>
                </View>

                <View style={styles.diceBox}><Dice /></View>

                <View className="user-info-bottom-box" style={styles.playerBox}>
                    <Text style={{ color: '#000000', fontSize: 16 }}>Computer</Text>
                    <Image source={redGoti} style={{ width: 20, height: 40 }} />
                </View>
                {/* </View> */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    diceBox: {
        padding: 8,  // Changed from percentage to fixed value
    },
    playerBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '35%',
        borderWidth: 1,           // Changed from border
        borderColor: '#000000',   // Added explicit border color
        borderRadius: 10,         // Changed from string to number
        padding: 10,
        backgroundColor: '#FFFFFF' // Added white background
    },
    bottomRow: {
        height: 75,
        display: 'flex',
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        shadowColor: 'yellow',    // Replace boxShadow with proper RN shadow
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,             // For Android shadow
        width: '95%',
        backgroundColor: '#FFFFFF',
        borderRadius: 1
    },
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

export default Pevelion;
