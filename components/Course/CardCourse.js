import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';
const CardCourse = ({ data }) => {
    const [isBookmark, setIsBookmark] = useState(false);

    const handlerBookmark = () => {
        setIsBookmark(!isBookmark);
    }
    return (
        <View style={styles.card}>
            <Image source={{ uri: data.imageUrl }} style={styles.image} />
            <View style={styles.content}>
                <View style={styles.titleContent}>
                    <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{data.nameCourse}</Text>
                    <TouchableOpacity onPress={handlerBookmark}>
                        <MaterialCommunityIcons name="bookmark-outline" size={27} color={isBookmark ? "blue" : "black"} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.author}>{data.author}</Text>
                <Text style={styles.price}>${data.price}</Text>
                <View style={styles.rate}><Feather name="star" size={20} color="#F0B749" />
                    <Text>{data.rate} <Text style={styles.grey}>({data.totalRate})</Text> <Text style={styles.grey}>&#8226;</Text> {data.totalLesson} <Text style={styles.grey}>lessons</Text></Text>
                </View>
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
        backgroundColor: 'white',
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#E5E5E5',
        width: 220,
        height: 270
    },
    image: {
        width: 200,
        height: 150,
        borderRadius: 10
    },
    content: {
        paddingVertical: 10,
        justifyContent: "space-between"
    },
    titleContent: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
    ,
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        width: '90%'
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
    },
    rate: {
        flexDirection: 'row',
        alignItems: 'center', gap: 10
    }
});
export default CardCourse;