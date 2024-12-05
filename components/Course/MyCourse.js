import React from 'react';
import { ProgressBar } from 'react-native-paper';
import { View, Text, StyleSheet, Image } from 'react-native';

const MyCourse = ({ data }) => {
    const { courseId, nameCourse = "Course Title", duration = "N/A", progress = 0, imageUrl } = data || {}; // Lấy thông tin khóa học từ data
    const progressValue = Math.max(0, Math.min(progress, 100)) / 100;

    return (
        <View style={styles.container}>
            {imageUrl ? (
                <Image source={{ uri: imageUrl }} style={styles.image} />
            ) : (
                <View style={styles.placeholderImage} />
            )}
            <View style={styles.content}>
                <Text style={styles.title}>{nameCourse}</Text>
                <Text style={styles.duration}>{duration}</Text>
                <View style={styles.progress}>
                    <Text style={styles.actualProgress}>{progress}% Complete</Text>
                    <ProgressBar progress={progressValue} color="#00BDD6" style={styles.progressBar} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        width: '100%',
        borderRadius: 10,
        height: 120,
        backgroundColor: 'white',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        resizeMode: 'cover',
    },
    placeholderImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        backgroundColor: '#ddd',
    },
    content: {
        flex: 1,
        marginLeft: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    duration: {
        fontSize: 14,
        color: '#666',
    },
    progress: {
        marginTop: 5,
    },
    actualProgress: {
        fontSize: 14,
        marginBottom: 5,
    },
    progressBar: {
        height: 10,
        borderRadius: 5,
    },
});

export default MyCourse;
