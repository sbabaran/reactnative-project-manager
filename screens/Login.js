import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Logo from "../components/modules/Logo";
import TextField from "../components/modules/TextField";

export default function Login() {
    const ADMIN_EMAIL = 'admin@test.com';
    const ADMIN_PSWD = 'admin123';
    const [email, setEmail] = useState(ADMIN_EMAIL);
    const [password, setPassword] = useState(ADMIN_PSWD);
    const navigation = useNavigation();

    const handleLogin = async () => {
        // Add validation for email and password
        // console.log(`Logging in with email: ${email} and password: ${password}`);
        if (email === ADMIN_EMAIL && password === ADMIN_PSWD) {
            try {
                await AsyncStorage.setItem('user', JSON.stringify({ email, password }));
                navigation.navigate('Registration');
            } catch (error) {
                Alert.alert('Failed to valdate login credentials.');
            }
        } else {
            Alert.alert('Invalid credentials.');
        }
    };
    
    return (
        <View style={styles.container}>
            <Logo withName="false"/>
            <Text style={styles.title}>Login to continue</Text>
            <TextField props={{ placeholder: 'Email Address', keyboardType: 'email-address', input: {email} } }/>
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder="Password"
                secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
        textAlign: "center",
        fontWeight: "600",
    },
    input: {
        height: 58,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10,
        padding: 15,
        borderRadius: 5,
        fontSize: 18,
        borderColor: "black",
    },
    button: {
        backgroundColor: "#105DA5", // Change this to your desired color
        padding: 15,
        alignItems: "center",
        borderRadius: 5,
        marginTop: 15,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
    },
    image: {
        marginBottom: 25,
        margin: "auto",
    },
});
