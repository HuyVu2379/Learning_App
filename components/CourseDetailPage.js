import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ActivityIndicator,
} from 'react-native';
import { FontAwesome, Feather, FontAwesome6 } from '@expo/vector-icons';
import CourseDetailNavigator from '../navigators/CourseDetailNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { getCartByUser } from "../redux/slices/cartSlice"
import { useEffect } from 'react';
const CourseDetailPage = ({ navigation }) => {
    const { courseDetail } = useSelector((state) => state.course)
    const course = courseDetail;
    const { loggedInUser } = useSelector((state) => state.user)
    const user = loggedInUser

    if (!course) {
        return (
            <SafeAreaView style={styles.centered}>
                <ActivityIndicator size="large" color="#000" />
                <Text>Loading course details...</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Feather onPress={() => navigation.goBack()} name="arrow-left" size={24} color="black" />
                <Text style={styles.headerTitle}>Course details</Text>
                <View style={styles.headerActions}>
                    <Feather name="bookmark" size={24} color="black" />
                    <FontAwesome6 name="ellipsis-vertical" size={24} color="black" />
                </View>
            </View>

            <Image
                source={{ uri: course.imageUrl }}
                style={styles.banner}
                resizeMode="cover"
            />
            <View style={styles.courseDetailsContainer}>
                <Text style={styles.courseSubtitle}>
                    {course.nameCourse}
                </Text>
                <View style={styles.courseStats}>
                    <FontAwesome name="star" size={16} color="#f5c518" />
                    <Text style={styles.courseRating}>{course.rate} ({course.totalRate})</Text>
                    <Text style={styles.courseLessons}>• {course.totalLesson} lessons</Text>
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
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    headerActions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    banner: {
        height: 200,
        width: '100%',
    },
    courseDetailsContainer: {
        padding: 16,
    },
    courseSubtitle: {
        fontSize: 18,
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
