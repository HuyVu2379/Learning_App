import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from './HomePage/Header';
import Banner from './HomePage/Banner';
import Category from './HomePage/Category';
import PopularCourse from './HomePage/PopularCourse';
import VerticalCarousel from './HomePage/VertitcalCarousel';
import { getAllCategory } from "../services/categoryService"
import { Platform } from 'react-native';
import axios from 'axios';
const Tab = createBottomTabNavigator();
const HomePage = () => {
    let data = {
        titleBanner: "Project Management",
        discount: "20% OFF"
    }
    const [dataCategory, setDataCategory] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const iosUrl = 'http://172.21.71.72:8080';
                const androidUrl = 'http://10.0.2.2:8080';
                const url = Platform.OS === 'ios' ? iosUrl : androidUrl;
                console.log('Fetching categories from:', `${url}/api/category`);
                const response = await axios.get(`${url}/api/category`);
                setDataCategory(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
                setError('Failed to fetch categories. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);
    console.log("data fetched:", dataCategory);

    const [dataPopularCourse, setdataPopularCourse] = useState([]);
    useEffect(() => {
        const fetchDataPopularCourse = async () => {
            try {
                const iosUrl = 'http://172.21.71.72:8080';
                const androidUrl = 'http://10.0.2.2:8080';
                const url = Platform.OS === 'ios' ? iosUrl : androidUrl;
                console.log('Fetching courses from:', `${url}/api/course`);
                const response = await axios.get(`${url}/api/course`);
                setdataPopularCourse(response.data);
            } catch (error) {
                console.error('Error fetching courses:', error);
                setError('Failed to fetch courses. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchDataPopularCourse();
    }, []);
    let dataTopTeacher = [
        {
            title: "Christian Hayes",
            totalRate: 1233,
            certificate: "University of Havard",
            rate: 4.5,
            imageUrl: "https://media.istockphoto.com/id/508628776/photo/sunset-over-kandariya-mahadeva-temple.jpg?s=612x612&w=0&k=20&c=YOpVZmLiY4ccl_aoWRJhfqLpNEDgjyOGuTAKbobCO-U="
        },
        {
            title: "Christian Hayes",
            totalRate: 1233,
            certificate: "University of Havard",
            rate: 4.5,
            imageUrl: "https://media.istockphoto.com/id/508628776/photo/sunset-over-kandariya-mahadeva-temple.jpg?s=612x612&w=0&k=20&c=YOpVZmLiY4ccl_aoWRJhfqLpNEDgjyOGuTAKbobCO-U="
        },
        {
            title: "Christian Hayes",
            totalRate: 1233,
            certificate: "University of Havard",
            rate: 4.5,
            imageUrl: "https://media.istockphoto.com/id/508628776/photo/sunset-over-kandariya-mahadeva-temple.jpg?s=612x612&w=0&k=20&c=YOpVZmLiY4ccl_aoWRJhfqLpNEDgjyOGuTAKbobCO-U="
        },
        {
            title: "Christian Hayes",
            totalRate: 1233,
            certificate: "University of Havard",
            rate: 4.5,
            imageUrl: "https://media.istockphoto.com/id/508628776/photo/sunset-over-kandariya-mahadeva-temple.jpg?s=612x612&w=0&k=20&c=YOpVZmLiY4ccl_aoWRJhfqLpNEDgjyOGuTAKbobCO-U="
        }
    ]
    return (
        <SafeAreaView>
            <ScrollView>
                <Header />
                <Banner data={data} />
                <Category data={dataCategory} />
                <View style={styles.popularCoursesContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>Popular Courses</Text>
                        <Text style={styles.viewMore}>View more</Text>
                    </View>
                    <PopularCourse data={dataPopularCourse} />
                </View>
                <View style={styles.verticalCarouselContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>Recommended for you</Text>
                        <Text style={styles.viewMore}>View more</Text>
                    </View>
                    <VerticalCarousel data={dataPopularCourse} />
                </View>
                <View style={styles.topTeachersContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>Course that inspires</Text>
                        <Text style={styles.viewMore}>View more</Text>
                    </View>
                    <PopularCourse data={dataTopTeacher} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    popularCoursesContainer: {
        marginBottom: 20,
    },
    verticalCarouselContainer: {
        marginBottom: 20,
    },
    topTeachersContainer: {
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
    }
});


export default HomePage;
