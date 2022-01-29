import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

const TippenType = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <View style={styles.header} >
                <Text style={styles.header_text} >Übung 2</Text>
            </View>
            <View style={styles.footer} >
                <Text style={styles.footer_text} >Sie beginnen mit dem</Text>
                <Text style={styles.footer_smalltext} >Testing</Text>
                <Text style={styles.para_text} >Starten Sie Ihre Übung mit Testen. Der Test erscheint einmal pro Woche</Text>
                <Text style={styles.footer_disabled_text} >Training</Text>
                <Text style={styles.para_text} >Trainieren Sie auf der Grundlage Ihrer Testergebnisse Ihre Handfunktion</Text>
                <TouchableOpacity style={styles.btn_submit} onPress={() => { navigation.navigate('TippenTesting') }} >
                    <Text style={styles.btn_text} >Nächste</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_back} onPress={() => { navigation.navigate('PatientExercise') }} >
                    <Text style={styles.btn_text} >Zurück</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default TippenType;

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
        height: 200
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
        fontWeight: 'bold',
        paddingBottom: 10
    },
    footer_smalltext: {
        fontSize: 22,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        color: '#216869'
    },
    btn_submit: {
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 80,
        backgroundColor: '#DBDBCC'
    },
    btn_text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    para_text: {
        fontSize: 18,
        padding: 30,
        textAlign: "center"
    },
    footer_disabled_text: {
        fontSize: 22,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        color: '#808080'
    },
    btn_back: {
        padding: 20
    }
});