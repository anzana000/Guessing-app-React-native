import React,{useState} from "react";
import { View, Text, TextInput, Button, StyleSheet,TouchableWithoutFeedback,ScrollView,Keyboard,KeyboardAvoidingView,Alert} from "react-native";
import Input from "./Input";
import Buttons from "./Buttons";
import Colors from "../../guessing-number-app/components/constants/colors";
import DefaultStyles from "./constants/DefaultStyles";

const StartScreen = props => {
    const [enteredValue, setEnteredValue] = useState("");
    const [seletedNumber, setSelectedNumber] = useState();
    const [confirmed, setConfirmed] = useState(false);
    
    const InputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ""));
    }

    const resetInput = () => {
        setEnteredValue("");
        setConfirmed(false);
    }

    const confirmInput = () => {
        const choosenNumber = parseInt(enteredValue);
        if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
            Alert.alert("Invalid Number", "Number should be between 1 and 99", [{
                text: "Okay", style: "destructive", onPress: resetInput
}])
            return;
        }
        setConfirmed(true);
        setSelectedNumber(choosenNumber);
        setEnteredValue("");
        Keyboard.dismiss();
    }

    let confirmedOutput;
    if (confirmed) {
        confirmedOutput = <View><View style = {styles.confirmContainer}>
            <Text style = {styles.confirmText}>You selected</Text>
            <Text style = {styles.selectedNumber}>{ seletedNumber}</Text>
        </View>
            <Buttons onPress={ () => props.onStartGame(seletedNumber)}>START GAME</Buttons>
        </View>
    }
    return (<ScrollView>
        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.startScreen}>
            <Text style = {DefaultStyles.title}>Start a New Game!</Text>
            <View style = {styles.inputContainer}>
                <Text>Select a Number</Text>
                <Input style={styles.input} blurOnSubmit keyboardType="number-pad" maxLength={2} onChangeText={InputHandler} value={ enteredValue}/>
                <View style = {styles.buttonContainer}>
                    <View style={styles.button}><Button title="Reset" onPress={resetInput} color={ Colors.secondary}/></View> 
                    <View style={styles.button}><Button title="Confirm" onPress={confirmInput} color={ Colors.primary}/></View>  
                </View>
                </View>
                { confirmedOutput}
            </View>
            </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    startScreen: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
    },
    inputContainer: {
        marginVertical: 20,
        width: 300,
        maxWidth: "80%",
        alignItems: "center",
        elevation: 9,
        backgroundColor: "white",
        padding: 20,
        borderRadius: 8,
    },
    buttonContainer: {
        width:"100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    button: {
        width: 100,
        
    }
    ,
    input: {
        width:60
    },
    confirmContainer: {
        marginVertical:25,
        width:170,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center"
    },

    selectedNumber: {
        fontWeight:"bold",
        borderColor: Colors.primary,
        borderRadius: 100,
        borderWidth: 1,
        width: 50,
        padding: 10,
        textAlign: "center",
        fontSize:22
    },
    confirmText: {
        fontSize:19
    }


})

export default StartScreen;