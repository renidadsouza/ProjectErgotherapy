import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import PatientExercise from './PatientExercise';
import { useNavigation } from "@react-navigation/core";


const screen = Dimensions.get('window');

const formatNumber = number => `0${number}`.slice(-2);
const getRemaining = (time) => {
    const mins = Math.floor(time / 60);
    const secs = time - mins * 60;
    return { mins: formatNumber(mins), secs: formatNumber(secs) };
}

const Timer = () => {
    const [remainingSecs, setRemainingSecs] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const { mins, secs } = getRemaining(remainingSecs);

    const toggle = () => {
        setIsActive(!isActive);
    }

    const reset = () => {
        setRemainingSecs(0);
        setIsActive(false);
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setRemainingSecs(remainingSecs => remainingSecs + 1);
            }, 1000)
        } else if (!isActive && remainingSecs !== 0) {
            clearInterval(interval)
        }
        return () => clearInterval(interval);
    }, [isActive, remainingSecs])

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar style="light-content" />
            <Text style={styles.timerText}>{`${mins}:${secs}`}</Text>
            <TouchableOpacity onPress={toggle} style={styles.button}>
                <Text style={styles.buttonText}>{isActive ? 'Pause' : 'Start'} </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={reset} style={[styles.button, styles.buttonReset]}>
                <Text style={[styles.buttonText, styles.buttonTextReset]}>Reset </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn_submit} onPress={() => { navigation.navigate('PatientExercise') }} >
                    <Text style={styles.btn_text} >Zurück</Text>
                </TouchableOpacity>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B6E0EA',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        borderWidth: 10,
        borderColor: '#FB1A1A',
        width: screen.width / 2,
        height: screen.width / 2,
        borderRadius: screen.width / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 45,
        color: '#FB1A1A'
    },
    timerText: {
        color: '#07121B',
        fontSize: 90,
        marginBottom: 20
    },
    buttonReset: {
        marginTop: 20,
        borderColor: '#1818E6',
    },
    buttonTextReset: {
        color: '#1818E6'
    },
    btn_submit: {
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 60,
        backgroundColor: '#DBDBCC'
    },
    btn_text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
   
}
});

export default Timer;
