import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Header from './HomePage/Header';
import Banner from './HomePage/Banner';
import Category from './HomePage/Category';
import HorizontalCourse from './HomePage/HorizontalCourse';
import HorizontalTeacher from './HomePage/HorizontalTeacher';
import VerticalCarousel from './HomePage/VertitcalCarousel'
import { useSelector, useDispatch } from 'react-redux';
import { fetchTeachers } from '../redux/slices/userSlice';
import { fetchAllCategory } from '../redux/slices/categorySlice';
import { fetchPopularCourse, fetchInspiresCourse } from '../redux/slices/courseSlice';
const HomePage = ({ navigation }) => {
    const dispatch = useDispatch();
    const { teachers, loadingTeacher, errorTeacher } = useSelector((state) => state.user);
    const { popularCourse, loadingCourse, errorCourse } = useSelector((state) => state.course);
    const { inspiresCourse } = useSelector((state) => state.course);


    const handleGetInpiresCourse = async () => {
        try {
            await dispatch(fetchInspiresCourse({ categoryId: 2, limit: 3 }));
        } catch (error) {
            console.log('Error fetching popular course:', error);
        }
    };
    const handleGetPopularCourse = async () => {
        try {
            await dispatch(fetchPopularCourse());
        } catch (error) {
            console.log('Error fetching popular course:', error);
        }
    };
    const handleGetAllTeacher = async () => {
        try {
            await dispatch(fetchTeachers());
        } catch (error) {
            console.log('Error fetching teachers:', error);
        }
    };
    const { categories, loadingCategory, errorCategory } = useSelector((state) => state.category);

    useEffect(() => {
        dispatch(fetchAllCategory(6));
    }, [dispatch]);

    useEffect(() => {
        handleGetAllTeacher();
        handleGetPopularCourse();
        handleGetInpiresCourse();
    }, []);

    return (
        <SafeAreaView>
            <ScrollView>
                <Header navigation={navigation} />
                <Banner data={{ titleBanner: 'Project Management', discount: '20% OFF' }} />
                {loadingCategory ? (<Text>Loading...</Text>) :
                    errorCategory ? (<Text style={{ color: 'red' }}>Error: {errorCategory}</Text>)
                        : (<Category data={categories} />)}
                <View style={styles.sessionContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>Popular Courses</Text>
                        <Text style={styles.viewMore}>View more</Text>
                    </View>
                    <HorizontalCourse navigation={navigation} data={popularCourse} />
                </View>
                <View style={styles.sessionContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>Recommended for you</Text>
                        <Text style={styles.viewMore}>View more</Text>
                    </View>
                    <HorizontalCourse navigation={navigation} data={popularCourse} />
                </View>
                <View style={styles.sessionContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>Course that inspires</Text>
                        <Text style={styles.viewMore}>View more</Text>
                    </View>
                    <VerticalCarousel navigation={navigation} data={inspiresCourse} />
                </View>
                <View style={styles.sessionContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>Top teachers</Text>
                        <Text style={styles.viewMore}>View more</Text>
                    </View>
                    {loadingTeacher ? (
                        <Text>Loading...</Text>
                    ) : errorTeacher ? (
                        <Text style={{ color: 'red' }}>Error: {errorTeacher}</Text>
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
