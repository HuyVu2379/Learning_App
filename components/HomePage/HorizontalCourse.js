import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import CardCourse from '../Course/CardCourse';
import { useDispatch } from 'react-redux';
import { findCourseById } from "../../redux/slices/courseSlice";

const HorizontalCourse = ({ navigation, data }) => {
    const dispatch = useDispatch();

    // Lấy chi tiết khóa học
    const handleGetCourseDetails = async (courseId) => {
        try {
            await dispatch(findCourseById(courseId));
            navigation.navigate("CourseDetail");
        } catch (error) {
            console.error('Error fetching course details:', error);
            alert('Failed to load course details. Please try again later.');
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {data && data.length > 0 ? (
                    data.map((item) => (
                        <TouchableOpacity
                            onPress={() => handleGetCourseDetails(item.courseId)}
                            key={item.courseId}
                            style={styles.itemContainer}
                        >
                            <CardCourse data={item} />
                        </TouchableOpacity>
                    ))
                ) : (
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>No courses available.</Text>
                    </View>
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    itemContainer: {
        marginRight: 16, // Khoảng cách giữa các item
    },
    emptyContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    emptyText: {
        fontSize: 16,
        color: '#888',
    },
});

export default HorizontalCourse;
