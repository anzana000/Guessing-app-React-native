import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = props => {
    return (
        <TextInput {...props} style={{...styles.input,...props.style}}/>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        textAlign: "center",
        marginVertical:18
        
    }
});

export default Input;