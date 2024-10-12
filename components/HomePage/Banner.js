import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Banner = ({ data }) => {
    return (
        <View style={styles.Banner}>
            <View style={styles.discount}>
                <Text style={styles.discountTitle}>{data.titleBanner}</Text>
                <Text style={styles.discountText}>{data.discount}</Text>
                <TouchableOpacity style={styles.buttonJoinNow}>
                    <Button title="JOIN NOW" color="white" />
                </TouchableOpacity>
            </View>
            <View>
                <Image resizeMode='contain' style={styles.image} source={require('../../assets/image/black-man-reading-book-removebg-preview.png')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Banner: {
        backgroundColor: '#8353E2', // Màu nền tím
        margin: 20,
        padding: 15,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5
    },
    discount: {
        justifyContent: 'space-between',
        gap: 10,
        width: '60%'
    },
    discountTitle: {
        fontSize: 24,
        fontWeight: '400',
        color: 'white'
    },
    discountText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    },
    image: {
        width: 150,
        height: 150,
    },
    buttonJoinNow: {
        width: 120,
        borderRadius: 5,
        backgroundColor: "#00BDD6"
    }
});

export default Banner;
