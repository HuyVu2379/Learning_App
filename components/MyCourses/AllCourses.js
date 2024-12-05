import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMyCourses } from '../../redux/slices/courseSlice';
import MyCourse from '../Course/MyCourse';

const AllCourses = ({ navigation }) => {
    const dispatch = useDispatch();
    const { myCourse, loadingCourse, errorCourse } = useSelector((state) => state.course);
    const { loggedInUser } = useSelector((state) => state.user)

    useEffect(() => {
        dispatch(fetchMyCourses(loggedInUser.userId));
    }, [dispatch]);

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('CourseDetail')} style={styles.itemContainer}>
            <MyCourse data={item.course} />
        </TouchableOpacity>
    );


    if (loadingCourse) {
        return <ActivityIndicator size="large" color="#0000ff" style={{ flex: 1, justifyContent: 'center' }} />;
    }

    if (errorCourse) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Error: {errorCourse}</Text>
            </View>
        );
    }

    return (
        <View style={styles.listContainer}>
            <FlatList
                keyExtractor={(item, index) => (item.id ? item.id.toString() : index.toString())}
                data={myCourse || []}
                renderItem={renderItem}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        padding: 10,
        backgroundColor: '#f5f5f5',
        flex: 1,
    },
    itemContainer: {
        alignItems: 'center',
        marginBottom: 10,
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        fontSize: 16,
    },
});

export default AllCourses;
