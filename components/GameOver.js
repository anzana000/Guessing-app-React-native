import React from "react";
import { View, Text, StyleSheet, Button, Image,ScrollView } from "react-native";
import Buttons from "./Buttons";
import DefaultStyles from "./constants/DefaultStyles";
import Colors from "./constants/colors";

const GameOver = props => {
    return (
        <ScrollView>
        <View style={styles.screen}>
            <Text style = {DefaultStyles.title}>The Game is over !</Text>
            <Image source={require("../assets/Teasing_preview.png")} style={ styles.image}/>
            {/* <Image source={require("../assets/Teasing_preview.png")} style={ styles.image}/> */}
        
            
           <Text style = {styles.resultContainer}>It took <Text style = {styles.highlight}>{props.rounds} </Text>rounds to guess the number <Text style = {styles.highlight}>{props.userNumber}</Text></Text>
            <Buttons onPress={props.newGameHandler}>NEW GAME</Buttons> 
            </View>
            </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        height: 200,
        width: 200,
        marginVertical:30
    },
    resultContainer: {
        fontSize: 18,
        marginVertical:13
    },
    highlight: {
        fontWeight: "bold",
        color: Colors.secondary,
        fontSize:21
    }

});

export default GameOver;