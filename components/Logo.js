import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const Logo = ({ withName }) => {
    const logoSource = (withName === true) ? require('../assets/logo-with-name.png') : require('../assets/logo.png');
    return (
        <View style={styles.container}>
            <Image source={logoSource} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center', // centers image horizontally
    },
    image: {
        marginBottom: 20,
    },
});

export default Logo;
