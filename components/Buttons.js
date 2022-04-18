import React from "react";
import { View, Text, TouchableOpacity, StyleSheet,Dimensions } from "react-native";
import Colors from "./constants/colors";

const Buttons = props => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress = {props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
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