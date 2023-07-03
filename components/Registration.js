import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, TextInput, Alert } from 'react-native';
import Logo from '../components/Logo';
//import * as SQLite from 'expo-sqlite';

//const db = SQLite.openDatabase('UserDatabase.db');

export default function Registration() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');

    /*useEffect(() => {
        db.transaction(function (txn) {
            txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='users'",
                [],
                function (tx, res) {
                    if (res.rows.length == 0) {
                        txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS users(user_id INTEGER PRIMARY KEY AUTOINCREMENT, username VARCHAR(20), password VARCHAR(30))',
                            []
                        );
                    }
                }
            );
        });
    }, []);*/

    const handleRegister = () => {
        if (!email || !password || !confirmpassword) {
            Alert.alert('Error', 'You must fill out all fields.');
            return;
        }

        /*db.transaction(
            function (tx) {
                tx.executeSql(
                    'INSERT INTO users (username, password) VALUES (?,?)',
                    [username, password],
                    (tx, results) => {
                        if (results.rowsAffected > 0) {
                            Alert.alert('Success', 'User registered successfully');
                        } else {
                            Alert.alert('Error', 'Registration failed');
                        }
                    }
                );
            },
            (error) => {
                Alert.alert('Error', 'Registration failed');
            }
        );*/
    };

    return (
        <View style={styles.container}>
            <Logo withName={ true } />
            <Text style={styles.title}>Create a Member</Text>
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder="Password"
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                onChangeText={setConfirmPassword}
                value={confirmpassword}
                placeholder="Confirm Password"
                secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Create Member</Text>
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

