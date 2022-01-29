import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

const PatientDetails = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>PatientDetails</Text>
        </View>
    );

}

export default PatientDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});