import React,{useState,useRef,useEffect} from "react";
import { View, Text, StyleSheet, Button, Alert,ScrollView,Dimensions } from "react-native";
import Buttons from "./Buttons";
import Colors from "./constants/colors";
import DefaultStyles from "./constants/DefaultStyles";
import { Ionicons } from "@expo/vector-icons";


 const generateRandom = (min,max,exclude) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        const randomNumber = Math.floor(Math.random() * (max - min)) + min;
        if (randomNumber === exclude) {
            return generateRandom(min, max, exclude);
        } else {
            return randomNumber;
        }
}

const listItem = (value,rounds) => {
    return (<View key={value} style = {styles.listItem}>
        <Text>#{rounds}</Text>
         <Text>{value}</Text>
    </View>);
}

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandom(1, 100, props.userChoice));
    const [pastGuesses,setPastGuesses] = useState([])

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    useEffect(() => {
        if (currentGuess === props.userChoice) {
            props.guessRoundHandler(pastGuesses.length);
        }
    },[currentGuess,props.guessRoundHandler,props.userChoice])

    const nextguessHandler = direction => {
        if (direction === "lower" && currentGuess < props.userChoice || direction === "greater" && currentGuess > props.userChoice) {
            Alert.alert("Don't Lie!", "You know this is wrong", [{
                text: "Sorry", style: "cancel"
            }]);
            return;
        }

        if (direction === "lower") {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess + 1;
        }

        const nextNumber = generateRandom(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setPastGuesses(currGuess => [nextNumber, ...currGuess]);
    }
   
    return (
        <View style = {styles.screen}>
            <Text style = {DefaultStyles.title}>Opponent's guess</Text>
           <Text style = {styles.guess}>{currentGuess}</Text>
            <View style = {styles.buttonContainer}>
                <Buttons onPress={nextguessHandler.bind(this,"lower")}><Ionicons name="ios-remove" size={24} color="white" /></Buttons>
                 <Buttons  onPress={nextguessHandler.bind(this,"greater")}><Ionicons name="add" size={24} color="white" /></Buttons>
            </View>
            <View style = "list">
            <ScrollView>
                {pastGuesses.map((guess, index) => listItem(guess, pastGuesses.length - index)
                )}
            </ScrollView></View>
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        marginVertical:130,
        flex: 1,
        justifyContent: "center",
       alignItems:"center"
    },
    guess: {
        borderColor:Colors.primary,
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        padding: 10,
         borderRadius: 100,
        borderWidth: 1,
        width: 50,
    },
    buttonContainer: {
        marginVertical: 20,
        // width: 400,
        width: Dimensions.get("window").width > 400 ? 500 : 400, 
        height: 100,
        maxWidth: "90%",
        alignItems: "center",
        elevation: 9,
        backgroundColor: "white",
        // padding: 20,
        padding: Dimensions.get("window").width / 20,
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    someText:{
        fontSize: 22,
        marginVertical: 10,
        fontWeight:"bold"
    },
    list: {
        flex:1
    },
    listItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
        marginVertical: 10,
        borderWidth: 1,
        borderColor: Colors.primary,
       
        width: 355,
        padding: 15,
        borderRadius: 8,
    }
  
});

export default GameScreen;