import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
const Course = ({ data }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: data.imageUrl }} style={styles.image} />
            <View style={styles.content}>
                <View>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.author}>{data.author}</Text>
                    <Text style={styles.price}>${data.price}</Text>
                    <Text>{data.rate} <Text style={styles.grey}>({data.totalRate})</Text> <Text style={styles.grey}>&#8226;</Text> {data.totalLesson} <Text style={styles.grey}>lessons</Text></Text>
                </View>
                <MaterialCommunityIcons name="bookmark-outline" size={27} color="grey" />
            </View>
        </View>
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
        marginBottom: 10,
        backgroundColor: 'white',
        width: '100%',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#E5E5E5',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10
    },
    content: {
        padding: 10,
        flexDirection: 'row',
        width: '76%',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    author: {
        fontSize: 14,
        color: '#555',
    },
    price: {
        color: '#46CFE1',
        fontSize: 18,
        fontWeight: '600'
    },
    grey: {
        color: 'grey'
    }
});
export default Course;