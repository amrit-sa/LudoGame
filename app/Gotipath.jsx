import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Goti } from "./Goti";
import { AppContext } from "@/context/AppContext";

const TopPositions = {
    1: [
        { key: 6, styles: ['box'] },
        { key: 5, styles: ['box'] },
        { key: 4, styles: ['box', 'checkPoint'] },
        { key: 3, styles: ['box'] },
        { key: 2, styles: ['box'] },
        { key: 1, styles: ['box'] },
    ],
    2: [
        { key: 7, styles: ['box'] },
        { key: 53, styles: ['box', 'greenSafePoint'] },
        { key: 54, styles: ['box', 'greenSafePoint'] },
        { key: 55, styles: ['box', 'greenSafePoint'] },
        { key: 56, styles: ['box', 'greenSafePoint'] },
        { key: 57, styles: ['box', 'greenSafePoint'] },
    ],
    3: [
        { key: 8, styles: ['box'] },
        { key: 9, styles: ['box', 'greenSafePoint'] },
        { key: 10, styles: ['box'] },
        { key: 11, styles: ['box'] },
        { key: 12, styles: ['box'] },
        { key: 13, styles: ['box'] },
    ],
};

const BottomPositions = {
    1: [
        { key: 39, styles: ['box'] },
        { key: 38, styles: ['box'] },
        { key: 37, styles: ['box'] },
        { key: 36, styles: ['box'] },
        { key: 35, styles: ['box', 'yellowSafePoint'] },
        { key: 34, styles: ['box'] },
    ],
    2: [
        { key: 67, styles: ['box', 'yellowSafePoint'] },
        { key: 66, styles: ['box', 'yellowSafePoint'] },
        { key: 65, styles: ['box', 'yellowSafePoint'] },
        { key: 64, styles: ['box', 'yellowSafePoint'] },
        { key: 63, styles: ['box', 'yellowSafePoint'] },
        { key: 33, styles: ['box'] },
    ],
    3: [
        { key: 27, styles: ['box'] },
        { key: 28, styles: ['box'] },
        { key: 29, styles: ['box'] },
        { key: 30, styles: ['box', 'checkPoint'] },
        { key: 31, styles: ['box'] },
        { key: 32, styles: ['box'] },
    ]
};

const leftPositions = {
    1: [
        { key: 47, styles: ['box'] },
        { key: 48, styles: ['box','redSafePoint'] },
        { key: 49, styles: ['box'] },
        { key: 50, styles: ['box'] },
        { key: 51, styles: ['box'] },
        { key: 52, styles: ['box'] },
    ],
    2: [
        { key: 46, styles: ['box'] },
        { key: 68, styles: ['box','redSafePoint'] },
        { key: 69, styles: ['box','redSafePoint'] },
        { key: 70, styles: ['box','redSafePoint'] },
        { key: 71, styles: ['box','redSafePoint'] },
        { key: 72, styles: ['box','redSafePoint'] },
    ],
    3: [
        { key: 45, styles: ['box'] },
        { key: 44, styles: ['box'] },
        { key: 43, styles: ['box','checkPoint'] },
        { key: 42, styles: ['box'] },
        { key: 41, styles: ['box'] },
        { key: 40, styles: ['box'] },
    ]
};

const rightPositions = {
    1: [
        { key: 14, styles: ['box'] },
        { key: 15, styles: ['box'] },
        { key: 16, styles: ['box'] },
        { key: 17, styles: ['box', 'checkPoint'] },
        { key: 18, styles: ['box'] },
        { key: 19, styles: ['box'] },
    ],
    2: [
        { key: 58, styles: ['box', 'blueSafePoint'] },
        { key: 59, styles: ['box', 'blueSafePoint'] },
        { key: 60, styles: ['box', 'blueSafePoint'] },
        { key: 61, styles: ['box', 'blueSafePoint'] },
        { key: 62, styles: ['box', 'blueSafePoint'] },
        { key: 20, styles: ['box'] },
    ],
    3: [
        { key: 26, styles: ['box'] },
        { key: 25, styles: ['box'] },
        { key: 24, styles: ['box'] },
        { key: 23, styles: ['box'] },
        { key: 22, styles: ['box', 'blueSafePoint'] },
        { key: 21, styles: ['box'] },
    ]
};


const masterPositions = {
    top: { alignment: 'top', positions: TopPositions, styles: 'pathRowContainer' },
    bottom: { alignment: 'bottom', positions: BottomPositions, styles: 'pathRowContainer' },
    left: { alignment: 'left', positions: leftPositions, styles: 'pathRowsHorizontalContainer' },
    right: { alignment: 'right', positions: rightPositions, styles: 'pathRowsHorizontalContainer' },
}

const GotiPath = ({ position }) => {

    const { gotiPositions } = useContext(AppContext);

    const pathPosition = masterPositions[position];
    const isHorizontal = ['left','right'].includes(pathPosition.alignment);

    return (
        <View style={styles[masterPositions[position]['styles']]}>
            {[1, 2, 3].map(row => {
                return (
                    <View key={row} style={isHorizontal && {flexDirection:'row'}}>
                        {
                            masterPositions?.[position]?.['positions']?.[row]
                                ?.map((item, index) => {
                                    return (
                                        <View
                                            key={item.key}
                                            style={[...item.styles.map(s => styles[s])]}
                                            id={'box-' + item.key}
                                        >
                                            {(gotiPositions[item.key] && gotiPositions[item.key].length>0) && <>
                                                <view>
                                                    {gotiPositions[item.key].map(g => <Goti goti={g} />)}
                                                </view>
                                            </>}
                                        </View>
                                    )
                                })
                        }
                    </View>
                )
            })}
        </View>
    )

    return (
        <></>
    )
}

const styles = StyleSheet.create({
    pathRowContainer: {
        flexDirection: "row"
    },
    pathRowsHorizontalContainer: {

    },
    greenSafePoint: {
        backgroundColor: "green",
    },
    blueSafePoint: {
        backgroundColor: "blue",
    },
    yellowSafePoint: {
        backgroundColor: "yellow",
    },
    redSafePoint: {
        backgroundColor: "red",
    },
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: 120, // Adjust width based on box size and count
        margin: 0,
    },
    box: {
        width: 50,
        height: 50,
        backgroundColor: "lightgray",
        margin: 1,
        borderWidth: 1,
        borderColor: "black",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    checkPoint: {
        backgroundColor: 'purple'
    }
});

export default GotiPath;
