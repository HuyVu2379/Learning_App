import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({ navigation }) => {
    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.greeting}>Hello, Rosie!</Text>
                <Text style={styles.subText}>What do you want to learn today?</Text>
            </View>
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('CartPage')} style={styles.icon}>
                    <Icon name="cart-outline" size={24} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                    <Icon name="notifications-outline" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#00bfff', // Màu nền xanh da trời
        padding: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    greeting: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
    },
    subText: {
        color: '#fff',
        marginTop: 5,
    },
    iconContainer: {
        flexDirection: 'row',
    },
    icon: {
        marginLeft: 20,
    },
});

export default Header;
