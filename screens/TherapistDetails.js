import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from "react-native";
import * as Animatable from 'react-native-animatable';
import { useTheme } from "react-native-paper";
import { Picker } from '@react-native-picker/picker';

const TherapistDetails = ({ navigation }) => {

    const { colors } = useTheme();
    const [selectedTitle, setSelectedTitle] = useState();

    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Hallo!</Text>
                <Text style={styles.text_small_header}>Bitte geben Sie Ihre Daten ein</Text>
            </View>
            <Animatable.View style={[styles.footer, { backgroundColor: colors.background }]} transition="fadeInUp">
                <Text style={[styles.text_footer, { color: colors.text }]} >Anrede</Text>
                <Picker
                    selectedValue={selectedTitle}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedTitle(itemValue)
                    }>
                    <Picker.Item label="Frau" value="frau" />
                    <Picker.Item label="Herr" value="herr" />
                </Picker>
                <Text style={[styles.text_footer, { color: colors.text }]} >Vorname</Text>
                <View style={styles.action}>
                </View>
                <TextInput
                    style={styles.placeholder_text}
                    placeholder="Ihre Vorname"
                    placeholderTextColor="#666666"
                />
                <Text style={[styles.text_footer, { color: colors.text }]} >Nachname</Text>
                <View style={styles.action}>
                </View>
                <TextInput
                    style={styles.placeholder_text}
                    placeholder="Ihre Nachname"
                    placeholderTextColor="#666666"
                />
                <Text style={[styles.text_footer, { color: colors.text }]} >Praxis</Text>
                <View style={styles.action}>
                </View>
                <TextInput
                    style={styles.placeholder_text}
                    placeholder="Ihre Praxis"
                    placeholderTextColor="#666666"
                />

                <View style={styles.button} >
                    <TouchableOpacity style={styles.further_btn} onPress={() => { navigation.navigate('TherapistHome') }}>
                        <Text style={styles.textSubmit} >SPEICHERN UND WEITER</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
}

export default TherapistDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DBDBCC',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    header: {
        flex: 1,
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingBottom: 50,
        width: null,
        fontWeight: 'bold',
        paddingTop: 60,
        textAlign:"center"
    },
    text_header: {
        alignItems: 'center',
        justifyContent: 'center',
        
        color: 'black',
        fontWeight: 'bold',
        fontSize: 35,
        textAlign:"center"
    },
    text_small_header: {
        alignItems: 'center',
        
        color: 'black',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: "center",
        margin: 10
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 130,
        paddingVertical: 30
    },
    text_footer: {
        color: 'black',
        fontSize: 18,
        width: 300
    },
    action: {
        flexDirection: 'row',
        paddingBottom: 5
    },
    placeholder_text: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 9,
        borderBottomColor: "black",
        borderBottomWidth: 1,
        paddingBottom: 5
    },
    button: {
        alignItems: "center",
        marginTop: 200
    },
    further_btn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: -140,
        backgroundColor: '#DBDBCC'

    },
    textSubmit: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "black"
    }
});