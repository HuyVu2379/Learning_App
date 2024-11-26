import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';
import { FontAwesome, Feather, FontAwesome6 } from '@expo/vector-icons';
import CourseDetailNavigator from '../navigators/CourseDetailNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
const CourseDetailPage = ({ navigation }) => {
    console.log("navigation from course");

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Feather onPress={() => navigation.goBack()} name="arrow-left" size={24} color="black" />
                <Text style={styles.headerTitle}>Course details</Text>
                <View style={{ flexDirection: 'row', gap: 15 }}>
                    <Feather name="bookmark" size={24} color="black" />
                    <FontAwesome6 name="ellipsis-vertical" size={24} color="black" />
                </View>
            </View>

            <Image
                source={require('../assets/image/black-man-reading-book-removebg-preview.png')}
                style={styles.banner}
                resizeMode="contain"
            />
            <View style={styles.courseDetailsContainer}>
                <Text style={styles.courseSubtitle}>
                    UX Foundation: Introduction to User Experience Design
                </Text>
                <View style={styles.courseStats}>
                    <FontAwesome name="star" size={16} color="#f5c518" />
                    <Text style={styles.courseRating}>4.5 (1233)</Text>
                    <Text style={styles.courseLessons}>• 12 lessons</Text>
                </View>
            </View>
            <CourseDetailNavigator />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    banner: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    courseDetailsContainer: {
        padding: 16,
    },
    courseSubtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    courseStats: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    courseRating: {
        marginLeft: 4,
        fontSize: 14,
        color: '#333',
    },
    courseLessons: {
        marginLeft: 8,
        fontSize: 14,
        color: '#333',
    },
});

export default CourseDetailPage;