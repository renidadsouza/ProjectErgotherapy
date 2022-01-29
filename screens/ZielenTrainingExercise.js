import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { OrientationLocker, PORTRAIT, LANDSCAPE } from "react-native-orientation-locker";
import Circle from '../components/Circle';
import useInterval from '../helper/useInterval';


const ZielenTrainingExercise = ({ navigation }) => {


    const [timeLeft, setTimeLeft] = useState(60);
    //const [isGameOver, setGameOver] = useState(false);
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

    const restScr = () => {
        setTimeLeft(60);
        setScr(0);
    }





    return (
        <View style={styles.container} >
            <Text style={styles.boldText}>Restzeit:  {timeLeft}               Score:{scr}</Text>
            <Text style={styles.look}></Text>
            <View style={styles.game}>
                <Circle addScr={addScr}></Circle>
            </View>
            <View>
            <OrientationLocker
        orientation={PORTRAIT}
        onChange={orientation => console.log('onChange', orientation)}
        onDeviceChange={orientation => console.log('onDeviceChange', orientation)}
      />
            </View>
            {/* </TouchableOpacity> */}
            {
                timeLeft === 0 ? Alert.alert(
                    "Alert Title",
                    `Zeit hoch! Ihr Spielstand ist: ${scr}`,
                    [
                        {
                            text: "Save",
                            onPress: () => console.log("Cancel Pressed")
                        },
                        { text: "Next", onPress: restScr }
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
        //justifyContent:'center',
    },
    game: {
        flexDirection: 'column',
        // width: 300,
        // flexWrap: 'wrap',
        padding: 30,
        alignItems: 'center'
        // },
        // mid:{
        //   fontWeight: 'bold',
        //   marginTop: 0,
        //   textAlign: 'center',
        //   padding: 5,
        //   marginTop:0

    },
    boldText: {
        fontWeight: 'bold',
        paddingTop: 10,
        flexDirection: 'row',
        textAlign: 'center'

    },
    // look: {
    //   fontWeight:'bold',
    //   padding: 2,
    // },

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

export default ZielenTrainingExercise;

