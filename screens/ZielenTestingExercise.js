import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import Circle from '../components/Circle';
import useInterval from '../helper/useInterval';


const ZielenTestingExercise = ({ navigation }) => {

    useEffect(() => {
        console.log("screen called")
        async function changeScreenOrientation() {
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);

        }
        changeScreenOrientation();
    }, []);


    const [timeLeft, setTimeLeft] = useState(60);
    const [scr, setScr] = useState(0);
    const [elements, setElements] = useState(["1", "2", "3", "4", "5", "6", "7", "8"]);
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
            setElements(["1", "2", "3", "4", "5", "6", "7", "8"]);
            setScr(scr + 1);

        }
    }

    onDeleteBTN = () => {
        this.alert(' Ihr Ergebnis wird gespeichert')

    }
    return (
        <View style={styles.container} >
            <Text style={styles.boldText}>Restzeit:  {timeLeft}               Score:{scr}</Text>
            <Text style={styles.look}></Text>
            <View style={styles.game}>
                <Circle addScr={addScr}></Circle>
            </View>
            {
                timeLeft === 0 ? Alert.alert(
                    "Herzlichen Glückwunsch",
                    `Die Zeit ist abgelaufen! Ihr Spielstand ist: ${scr}`,
                    [
                        {
                            text: "Speichern", 
                            onPress: this.onDeleteBTN,                                                 
                            
                        },
                        {
                            text: "Abbrechen",
                            onPress: () => { navigation.navigate('PatientExercise') }
                        }
                    ]
                ) : null
            }
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B6E0EA',
        alignItems: 'center',
    },
    game: {
        flexDirection: 'column',
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

const mapStateToProps = state => {
    return {
        score: state.score
    }
}

const mapDispatchToProps = dispatch => {
    return {
        resetScore: () => dispatch(resetScore())
    }
}

export default ZielenTestingExercise;
