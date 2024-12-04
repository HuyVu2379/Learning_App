import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import Course from '../Course/Course';
import { useDispatch } from 'react-redux';
import { findCourseById } from '../../redux/slices/courseSlice';

const VerticalCarousel = ({ data, navigation }) => {
    const dispatch = useDispatch();

    // Hàm lấy chi tiết khóa học
    const handleGetCourseDetails = async (courseId) => {
        try {
            await dispatch(findCourseById(courseId));
            navigation.navigate('CourseDetail');
        } catch (error) {
            console.error('Error fetching course details:', error);
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {data && data.length > 0 ? (
                    data.map((item) => (
                        <TouchableOpacity
                            key={item.courseId} // Dùng courseId nếu là duy nhất
                            onPress={() => handleGetCourseDetails(item.courseId)}
                        >
                            <Course data={item} />
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
        padding: 10,
    },
    emptyContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    emptyText: {
        fontSize: 16,
        color: '#888',
    },
});

export default VerticalCarousel;
