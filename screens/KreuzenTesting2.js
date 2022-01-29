import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from "react-native";
import KreuzenSmallExercise from "./KreuzenSmallExercise";

const KreuzenTesting2 = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <View style={styles.header} >
                <Text style={styles.header_bigtext} >Testing</Text>
                <Text style={styles.header_smalltext} >Woche: 1 Tag: 1 Übung: 3</Text>
            </View>
            <View style={styles.footer} >
                <Image source={require('../assets/kreuzentestingSmall.png')} style={styles.img_style} ></Image>
                <Text style={styles.para_text} >Schneiden Sie die Früchte eine Minute lang so oft wie möglich</Text>
                <TouchableOpacity style={styles.btn_submit} onPress={() => { navigation.navigate('KreuzenSmallExercise') }} >
                    <Text style={styles.btn_text} >Los geht's!</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_back} onPress={() => { navigation.navigate('KreuzenType') }} >
                    <Text style={styles.btn_text} >Zurück</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default KreuzenTesting2;

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
    header_bigtext: {
        fontSize: 38,
        fontWeight: 'bold'
    },
    header_smalltext: {
        fontSize: 28,
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
    btn_submit: {
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 120,
        backgroundColor: '#DBDBCC'
    },
    btn_text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        
    },
    para_text: {
        fontSize: 20,
        padding: 30,
        textAlign: "center",
        margin: 20

    },
    img_style: {
        marginTop: -80,
        width: 250, 
        maxHeight:120,
        flex:1 , 
        
    },
    btn_back: {
        padding: 22
    }
});