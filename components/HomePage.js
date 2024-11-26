import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Header from './HomePage/Header';
import Banner from './HomePage/Banner';
import Category from './HomePage/Category';
import HorizontalCourse from './HomePage/HorizontalCourse';
import HorizontalTeacher from './HomePage/HorizontalTeacher';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTeachers } from '../redux/slices/userSlice';

const HomePage = ({ navigation }) => {
    const dispatch = useDispatch();
    const { teachers, loading, error } = useSelector((state) => state.user);

    const [dataCategory, setDataCategory] = useState([
        { id: 1, name: 'Category 1' },
        { id: 2, name: 'Category 2' },
    ]);
    const [dataPopularCourse, setdataPopularCourse] = useState([
        { id: 1, title: 'Course 1', description: 'Learn course 1' },
        { id: 2, title: 'Course 2', description: 'Learn course 2' },
    ]);

    const handleGetAllTeacher = async () => {
        try {
            await dispatch(fetchTeachers());
        } catch (error) {
            console.log('Error fetching teachers:', error);
        }
    };

    useEffect(() => {
        handleGetAllTeacher();
    }, []);

    return (
        <SafeAreaView>
            <ScrollView>
                <Header navigation={navigation} />
                <Banner data={{ titleBanner: 'Project Management', discount: '20% OFF' }} />
                <Category data={dataCategory} />
                <View style={styles.sessionContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>Popular Courses</Text>
                        <Text style={styles.viewMore}>View more</Text>
                    </View>
                    <HorizontalCourse navigation={navigation} data={dataPopularCourse} />
                </View>
                <View style={styles.sessionContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>Top teachers</Text>
                        <Text style={styles.viewMore}>View more</Text>
                    </View>
                    {loading ? (
                        <Text>Loading...</Text>
                    ) : error ? (
                        <Text style={{ color: 'red' }}>Error: {error}</Text>
                    ) : teachers?.length > 0 ? (
                        <HorizontalTeacher navigation={navigation} data={teachers} />
                    ) : (
                        <Text>No teachers available</Text>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sessionContainer: {
        marginBottom: 20,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    viewMore: {
        color: '#1E90FF',
        fontSize: 14,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
});

export default HomePage;
