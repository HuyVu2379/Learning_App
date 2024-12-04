import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';
import { handleSaveCourse } from '../../redux/slices/courseSlice';
import { useSelector, useDispatch } from 'react-redux'; // Import useDispatch
import { useNavigation } from '@react-navigation/native';

const Course = ({ data }) => {
    const dispatch = useDispatch(); // Initialize dispatch
    const { loggedInUser } = useSelector((state) => state.user); // Get user data from Redux state
    const navigation = useNavigation(); // To use navigation if needed

    // Function to handle saving the course
    const performSaveCourse = async (courseId, userId) => {
        try {
            // Dispatch the handleSaveCourse action
            let res = await dispatch(handleSaveCourse({ courseId, userId }));
            console.log(res);

            // Check the response status using the errCode
            if (res.payload.errCode === 0) {
                // If success, show the success message
                alert(res.payload.message);
            } else {
                // If there's an error (errCode !== 0), show the error message
                alert(res.payload.message);
            }
        } catch (error) {
            console.error('Error saving course:', error);
            alert('Something went wrong while saving the course');
        }
    };


    return (
        <View style={styles.card}>
            <Image source={{ uri: data.imageUrl }} style={styles.image} />
            <View style={styles.content}>
                <View>
                    <Text style={styles.title}>{data.nameCourse}</Text>
                    <Text style={styles.author}>{data.author}</Text>
                    <Text style={styles.price}>${data.price}</Text>
                    <View style={styles.rate}>
                        <Feather name="star" size={20} color="#F0B749" />
                        <Text>{data.rate} <Text style={styles.grey}>({data.totalRate})</Text> <Text style={styles.grey}>&#8226;</Text> {data.totalLesson} <Text style={styles.grey}>lessons</Text></Text>
                    </View>
                </View>
                <MaterialCommunityIcons
                    onPress={() => performSaveCourse(data.courseId, loggedInUser.userId)}
                    name="bookmark-outline"
                    size={27}
                    color="grey"
                />
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
        width: '70%',
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
    },
    rate: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    }
});

export default Course;
