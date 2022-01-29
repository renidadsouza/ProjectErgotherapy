import React, { Component, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    Dimensions,
    Platform,
    TextInput,
    StatusBar
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import { AuthContext } from '../components/context';
import { useTheme } from "react-native-paper";

const TherapistLogin = ({ navigation }) => {

    const [data, setData] = React.useState({
        emailid: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
    });

    const { colors } = useTheme();

    const { tlogin } = React.useContext(AuthContext);

    const textInputChange = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                emailid: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                emailid: val,
                check_textInputChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                password: val
            });
        } else {
            setData({
                ...data,
                password: val
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const loginHandle = (emailid, password) => {
        tlogin(emailid, password);
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#DBDBCC" />
            <View style={styles.header}>
                <Text style={styles.text_header}>Login</Text>
            </View>

            <Animatable.View transition="fadeInUpBig" style={[styles.footer, { backgroundColor: colors.background }]} >
                <Text style={[styles.text_footer, { color: colors.text }]} >E-Mail-Addresse</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color={colors.text}
                        size={20}
                    />
                    <TextInput
                        placeholder="ihre Emailaddresse"
                        placeholderTextColor="#666666"
                        style={[styles.textInput, { color: colors.text }]}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                    />
                    {data.check_textInputChange ?
                        <Animatable.View animation="bounceIn" >
                            <Feather
                                name="check-circle"
                                color="black"
                                size={20} />
                        </Animatable.View>
                        : null}
                </View>

                <Text style={[styles.text_footer, { color: colors.text, marginTop: 35 }]}>Passwort</Text>
                <View style={styles.action}>
                    <Feather
                        name="lock"
                        color={colors.text}
                        size={20}
                    />
                    <TextInput
                        placeholder="ihr passwort"
                        placeholderTextColor="#666666"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={[styles.textInput, { color: colors.text }]}
                        autoCapitalize="none"
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        {data.secureTextEntry ?
                            <Feather name="eye-off"
                                color="grey"
                                size={20} />
                            :
                            <Feather name="eye"
                                color="grey"
                                size={20}
                            />
                        }
                    </TouchableOpacity>
                </View>
                <View style={styles.button} >
                    <TouchableOpacity style={[styles.tlogin, {
                        borderColor: 'black',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                        onPress={() => { loginHandle(data.emailid, data.password), navigation.navigate('TherapistDetails') }}
                    >
                        <Text style={[styles.textSubmit, {
                            color: 'black'
                        }]} >WEITER</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

export default TherapistLogin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DBDBCC'
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    text_header: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
        alignItems: 'center',
        justifyContent: 'center'
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
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#DBDBCC'
    },
    tlogin: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#DBDBCC'
    },
    button: {
        alignItems: 'center',
        marginTop: 200
    },
    textSubmit: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});