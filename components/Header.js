import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
       
        backgroundColor: "#8854d0",
        alignItems: "center",
        paddingTop: 34,
        width: "100%",
        height:70
    },
    headerText: {
        color: "#fff",
        fontSize:18
    
    }
})

export default Header;