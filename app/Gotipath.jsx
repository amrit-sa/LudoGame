import React from "react";
import { View, StyleSheet } from "react-native";


const GotiPath = ({ position }) => {
    const renderBoxes = () => {
        let boxes = [];
        for (let i = 0; i < 6; i++) {
            boxes.push(
                <View key={i} style={styles.box} />
            );
        }
        return boxes;
    };

    if (position == 'top') {
        return (
            <View style={styles.pathRowContainer}>
                <View >
                    <View key={6} style={styles.box} >{6}</View>
                    <View key={5} style={[styles.box, styles.checkPoint]} >{5}</View>
                    <View key={4} style={styles.box} >{4}</View>
                    <View key={3} style={styles.box} >{3}</View>
                    <View key={2} style={styles.box} >{2}</View>
                    <View key={1} style={styles.box} >{1}</View>
                </View>
                <View >
                    <View key={7} style={styles.box} >{7}</View>
                    <View key={52} style={[styles.box, styles.greenSafePoint]} >{52}</View>
                    <View key={53} style={[styles.box, styles.greenSafePoint]} >{53}</View>
                    <View key={54} style={[styles.box, styles.greenSafePoint]} >{54}</View>
                    <View key={55} style={[styles.box, styles.greenSafePoint]} >{55}</View>
                    <View key={56} style={[styles.box, styles.greenSafePoint]} >{56}</View>
                </View>
                <View >
                    <View key={8} style={styles.box} >{8}</View>
                    <View key={9} style={[styles.box, styles.greenSafePoint]} >{9}</View>
                    <View key={10} style={styles.box} >{10}</View>
                    <View key={11} style={styles.box} >{11}</View>
                    <View key={12} style={styles.box} >{12}</View>
                    <View key={13} style={styles.box} >{13}</View>
                </View>
            </View>
        )
    } else if (position === 'bottom') {
        return (
            <View style={styles.pathRowContainer}>
                <View >
                    <View key={38} style={styles.box} >{38}</View>
                    <View key={37} style={styles.box} >{37}</View>
                    <View key={36} style={styles.box} >{36}</View>
                    <View key={35} style={styles.box} >{35}</View>
                    <View key={34} style={[styles.box, styles.yellowSafePoint]} >{34}</View>
                    <View key={33} style={styles.box} >{33}</View>
                </View>
                <View >
                    <View key={66} style={[styles.box, styles.yellowSafePoint]} >{66}</View>
                    <View key={65} style={[styles.box, styles.yellowSafePoint]} >{65}</View>
                    <View key={64} style={[styles.box, styles.yellowSafePoint]} >{64}</View>
                    <View key={63} style={[styles.box, styles.yellowSafePoint]} >{63}</View>
                    <View key={62} style={[styles.box, styles.yellowSafePoint]} >{62}</View>
                    <View key={33} style={styles.box} >{33}</View>
                </View>
                <View >
                    <View key={27} style={styles.box} >{27}</View>
                    <View key={28} style={styles.box} >{28}</View>
                    <View key={29} style={styles.box} >{29}</View>
                    <View key={30} style={styles.box} >{30}</View>
                    <View key={31} style={[styles.box, styles.checkPoint]} >{31}</View>
                    <View key={32} style={styles.box} >{32}</View>
                </View>
            </View>
        )
    }else if (position === 'left') {
        return (
            <View style={styles.pathRowsHorizontalContainer}>
                <View style={{flexDirection:"row"}}>
                    <View key={46} style={styles.box} >{46}</View>
                    <View key={47} style={[styles.box, styles.redSafePoint]} >{47}</View>
                    <View key={48} style={styles.box} >{48}</View>
                    <View key={49} style={styles.box} >{49}</View>
                    <View key={50} style={styles.box} >{50}</View>
                    <View key={51} style={styles.box} >{51}</View>
                </View>
                <View style={{flexDirection:"row"}}>
                    <View key={45} style={styles.box} >{45}</View>
                    <View key={67} style={[styles.box, styles.redSafePoint]} >{67}</View>
                    <View key={68} style={[styles.box, styles.redSafePoint]} >{68}</View>
                    <View key={69} style={[styles.box, styles.redSafePoint]} >{69}</View>
                    <View key={70} style={[styles.box, styles.redSafePoint]} >{70}</View>
                    <View key={71} style={[styles.box, styles.redSafePoint]} >{71}</View>
                </View>
                <View style={{flexDirection:"row"}}>
                    <View key={44} style={styles.box} >{44}</View>
                    <View key={43} style={[styles.box, styles.checkPoint]} >{43}</View>
                    <View key={42} style={styles.box} >{42}</View>
                    <View key={41} style={styles.box} >{41}</View>
                    <View key={40} style={styles.box} >{40}</View>
                    <View key={39} style={styles.box} >{39}</View>
                </View>
            </View>
        )
    }else if (position === 'right') {
        return (
            <View style={styles.pathRowsHorizontalContainer}>
                <View style={{flexDirection:"row"}}>
                    <View key={14} style={styles.box} >{14}</View>
                    <View key={15} style={styles.box} >{15}</View>
                    <View key={16} style={styles.box} >{16}</View>
                    <View key={17} style={styles.box} >{17}</View>
                    <View key={18} style={[styles.box, styles.checkPoint]} >{18}</View>
                    <View key={19} style={styles.box} >{19}</View>
                </View>
                <View style={{flexDirection:"row"}}>
                    <View key={61} style={[styles.box, styles.blueSafePoint]} >{61}</View>
                    <View key={60} style={[styles.box, styles.blueSafePoint]} >{60}</View>
                    <View key={59} style={[styles.box, styles.blueSafePoint]} >{59}</View>
                    <View key={58} style={[styles.box, styles.blueSafePoint]} >{58}</View>
                    <View key={57} style={[styles.box, styles.blueSafePoint]} >{57}</View>
                    <View key={20} style={styles.box} >{20}</View>
                </View>
                <View style={{flexDirection:"row"}}>
                    <View key={26} style={styles.box} >{26}</View>
                    <View key={25} style={styles.box} >{25}</View>
                    <View key={24} style={styles.box} >{24}</View>
                    <View key={23} style={styles.box} >{23}</View>
                    <View key={22} style={[styles.box, styles.blueSafePoint]} >{22}</View>
                    <View key={21} style={styles.box} >{21}</View>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.pathRowContainer}>
            
        </View>
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
        backgroundColor: "orange",
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
