import React from "react";
import { View, Text, TouchableOpacity,TouchableNativeFeedback,Platform, StyleSheet,Dimensions } from "react-native";
import Colors from "./constants/colors";

const Buttons = props => {
    let ButtonComponent = TouchableOpacity;
    if (Platform.OS === "android" && Platform.Version >= 21) {
        ButtonComponent = TouchableNativeFeedback;
    }
    return (
        <View style = {styles.buttonContainer}>
        <ButtonComponent activeOpacity={0.6} onPress = {props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
            </ButtonComponent>
            </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 20,
        overflow:"hidden"
    },
    button: {
        backgroundColor: Colors.primary,
        // width: 150,
        width:Dimensions.get("window").width > 400 ? 100 : 150,
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 16,
    },
    buttonText: {
        color: "white",
        textAlign:"center"
    }
})

export default Buttons;