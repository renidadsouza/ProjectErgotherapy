import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import Fruit2 from '../components/Fruit2'
import useInterval from '../helper/useInterval';


const KreuzenSmallExercise = ({navigation}) => {
    useEffect(() => {
        console.log("screen called")
        async function changeScreenOrientation() {
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);

        }
        changeScreenOrientation();
    }, []);



  const [timeLeft, setTimeLeft] = useState(60);
  //const [isGameOver, setGameOver] = useState(false);
  const [scr, setScr] = useState(0);
  const [elements, setElements] = useState(["1"]);



  useInterval(() => {
    // Your custom logic here
    if (timeLeft > 0) {
      setTimeLeft(timeLeft - 1);
    }
  }, 1000);


  const addScr = (number) => {
    let copy = [...elements];
    const newArr = elements.filter(el => el !== number);
    setElements(newArr);

    if (elements.length === 1) {
      setScr(1);
      setElements(["1"]);
      setScr(scr + 1);

    }
  }


  return (
    <View style={styles.container} >
      <Text style={styles.boldText}>Restzeit:  {timeLeft}               Score:{scr}</Text>
      <Text style={styles.look}></Text>
      <View style={styles.game}>
        <Fruit2 addScr={addScr}></Fruit2>

      </View>

      {/* </TouchableOpacity> */}
      {
        timeLeft === 0 ? Alert.alert(
          "Alert Title",
          `Die Zeit ist abgelaufen! Ihr Spielstand ist: ${scr}`,
          [
            {
              text: "Speichern",
              onPress: () => console.log('pressed')
            },
            {
                text: "Abbrechen",
                onPress : () => { navigation.navigate('PatientExercise') }
            },
          ]
        ) : null
      }



    </View>
  )

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEDBD0',

    alignItems: 'center',
    //justifyContent:'center',
  },
  game: {
    flexDirection: 'column',
    // width: 300,
    // flexWrap: 'wrap',
    padding: 30,
    alignItems: 'center'
   

  },
  boldText: {
    fontWeight: 'bold',
    paddingTop: 10,
    flexDirection: 'row',
    textAlign: 'center'

  },
  
});



export default KreuzenSmallExercise;