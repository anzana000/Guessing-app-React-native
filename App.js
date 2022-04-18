import React,{useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/Header";
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import GameOver from "./components/GameOver";





export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);



  const newGame = () => {
    setGuessRounds(0)
    setUserNumber(null);
  }

  const guessRoundHandler = rounds => {
    setGuessRounds(rounds);
  }
  const startScreenHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }
  let content = <StartScreen onStartGame={ startScreenHandler}/>;
  if (userNumber && guessRounds<=0) {
    content = <GameScreen userChoice={ userNumber} guessRoundHandler={ guessRoundHandler}/>
  } else if (guessRounds > 0) {
    content = <GameOver rounds={guessRounds} userNumber={userNumber} newGameHandler={ newGame}/>
  }
  
  return (
    <View style={styles.container}>
     <Header title = "Guess a number"/>
     {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  }
});
