import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    TextInput,
    SectionList,
    ScrollView
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialIcons } from "@expo/vector-icons";
import PatientDetails from "../screens/PatientDetails";

const TherapistHome = ({ navigation }) => {

    return (
        <View style={styles.container} >
            <View style={styles.header} >
                <Text style={styles.header_text} >
                    Ihre Patienten
                </Text>
            </View>
            <View style={styles.action}>
            </View>
            <TouchableHighlight onPress={() => { }} style={styles.add_option} underlayColor='grey' >
                <View style={styles.btnContainer} >
                    <Image source={require('../assets/adduser.png')} style={styles.adduser_icon} />
                    <Text style={styles.add_option_text} >Neuen Patienten hinzufügen</Text>
                </View>
            </TouchableHighlight>
            <View style={styles.action}>
            </View>
            <View style={styles.search_option}>
                <Image source={require('../assets/search.png')} style={styles.search_icon} />
                <TextInput style={styles.search_option_text} placeholder="Patienten suchen" placeholderTextColor="grey" >
                </TextInput>
            </View>
            <ScrollView style={styles.small_container} >
                <SectionList
                    sections={[
                        { title: 'A', data: ['Albert'] },
                        { title: 'B', data: ['Ben', 'Brandon'] },
                        { title: 'C', data: ['Clay', 'Christine'] },
                        { title: 'E', data: ['Emily', 'Erick', 'Emma', 'Edward', 'Elsa'] },
                        { title: 'G', data: ['Greta', 'Gerald'] },
                        { title: 'H', data: ['Hubert'] },
                        { title: 'I', data: ['Immanuel', 'Ilda'] }
                    ]}
                    renderItem={({ item }) =>
                        <Text
                            style={styles.item}
                        >{item}</Text>

                    }
                    renderSectionHeader={({ section }) =>
                        <Text style={styles.sectionHeader} >{section.title}
                        </Text>
                    }
                    keyExtractor={(item, index) => index}
                />
            </ScrollView>
        </View>
    );
};

export default TherapistHome;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: null,
        height: null
    },
    header: {
        width: 450,
        
        alignItems: 'center',
        backgroundColor: '#DBDBCC',
        justifyContent: 'center',
        height: 40,
    },
    header_text: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        textAlign:"center"
    },
    add_option: {
        width: 380,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center',
        height: 30,
        flexDirection: 'row',
        marginTop: 10
    },
    add_option_text: {
        fontSize: 18,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        textAlign: "center"
    },
    search_option: {
        width: 380,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 10,
        borderWidth: 1,
        height: 40
    },
    search_option_text: {
        fontSize: 18,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: 450
    },
    action: {
        flexDirection: 'row',
        paddingBottom: 5
    },
    adduser_icon: {
        width: 25,
        height: 25,
        position: 'absolute',
        left: 2,
        marginLeft: -50
    },
    btnContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center'
    },
    search_icon: {
        width: 25,
        height: 25,
        position: 'absolute',
        left: 2,
        marginLeft: 20
    },
    small_container: {
        width: 380
    },
    sectionHeader: {
        paddingTop: 5,
        paddingLeft: 35,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'grey'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        marginLeft: 30
    }
});