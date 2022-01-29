import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

const TürmeType = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <View style={styles.header} >
                <Text style={styles.header_text} >Übung 6</Text>
            </View>
            <View style={styles.footer} >
                <Text style={styles.footer_text} >Stapeln Sie jeweils die gleichgroßen Gefäße aufeinander und stellen Sie dann wieder nebeneinander ab. </Text>
                <Text style={styles.para_text} >Machen Sie die Übung so oft wie möglich in einer Minute</Text>
                <Text style={styles.para_text} >Starten Sie die Uhr, wenn Sie bereit sind</Text>
                
                <TouchableOpacity style={styles.btn_submit} onPress={() => { navigation.navigate('Timer') }} >
                    <Text style={styles.btn_text} >Nächste</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_back} onPress={() => { navigation.navigate('PatientExercise') }} >
                    <Text style={styles.btn_text} >Zurück</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    );
}

export default TürmeType;

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
        paddingBottom: 10,
        textAlign: "center"
    
    },
    btn_submit: {
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 115,
        backgroundColor: '#DBDBCC'
    },
    btn_text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    para_text: {
        fontSize: 18,
        padding: 20,
        textAlign: "center"
    },
   
    
    btn_back: {
        padding: 22,
        textAlign: "center"
    },
   
});