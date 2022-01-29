import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class PatientMgmtScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>PatientMgmtScreen</Text>
            </View>
        );
    }
}

export default PatientMgmtScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});