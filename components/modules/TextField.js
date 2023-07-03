import React, { useState } from "react";
import { StyleSheet, TextInput} from "react-native";

const TextField = ({ props }) => {
    return (
        <TextInput
            style={styles.input}
            value={props.input}
            placeholder={props.placeholder}
            keyboardType={props.keyboardType}
            autoCapitalize="none"
        />
    );
}

//email-address

const styles = StyleSheet.create({
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
});

export default TextField;