import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
const CardTeacher = ({ data }) => {
    return (
        <TouchableOpacity style={styles.card}>
            <Image source={{ uri: data.imageUrl }} style={styles.image} />
            <View style={styles.content}>
                <View>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.certificate}>{data.certificate}</Text>
                    <Text>{data.rate} <Text style={styles.grey}>({data.totalRate})</Text></Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        padding: 10,
        backgroundColor: 'white',
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#E5E5E5',
    },
    image: {
        width: 200,
        height: 150,
        borderRadius: 10
    },
    content: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    certificate: {
        fontSize: 14,
        color: '#555',
    },
    grey: {
        color: 'grey'
    }
});
export default CardTeacher;