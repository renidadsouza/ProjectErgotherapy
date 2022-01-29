import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from "react-native";

const PatientID = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <View style={styles.header} >
                <Text style={styles.header_text} >Hallo Stefan!</Text>
            </View>
            <View style={styles.footer} >
                <Text style={styles.footer_text} >Bitte Ihre ID eingeben</Text>
                <TextInput placeholder="ID" placeholderTextColor="grey" style={styles.footer_input} >
                </TextInput>
                <TouchableOpacity style={styles.btn_submit} onPress={() => { navigation.navigate('PatientWeekDay') }} >
                    <Text style={styles.btn_text} >SPEICHERN UND WEITER</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PatientID;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        width: 450,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        backgroundColor: '#DBDBCC',
        height: 300
    },
    header_text: {
        fontSize: 38,
        fontWeight: 'bold'
    },
    footer: {
        width: 450,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 0,
        backgroundColor: '#fff',
        height: 800,
        paddingTop: 30
    },
    footer_text: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    footer_input: {
        padding: 20,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        height: 60,
        paddingLeft: 135
    },
    btn_submit: {
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 250,
        backgroundColor: '#DBDBCC'
    },
    btn_text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    }
});