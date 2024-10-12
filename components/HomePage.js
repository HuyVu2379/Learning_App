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
const Tab = createBottomTabNavigator();
const HomePage = () => {
    let data = {
        titleBanner: "Project Management",
        discount: "20% OFF"
    }
    let dataCategory = [
        {
            topic: "Business",
            icon: "business-outline"
        },
        {
            topic: "Design",
            icon: "color-palette-outline"
        },
        {
            topic: "Development",
            icon: "code-slash-outline"
        },
        {
            topic: "Marketing",
            icon: "megaphone-outline"
        },
        {
            topic: "Photography",
            icon: "camera-outline"
        },
        {
            topic: "Music",
            icon: "musical-notes-outline"
        }]

    let dataPopularCourse = [
        {
            title: "Christian Hayes",
            author: "University of Havard",
            price: 20,
            rate: 4.5,
            totalRate: 1233,
            totalLesson: 12,
            imageUrl: "https://media.istockphoto.com/id/508628776/photo/sunset-over-kandariya-mahadeva-temple.jpg?s=612x612&w=0&k=20&c=YOpVZmLiY4ccl_aoWRJhfqLpNEDgjyOGuTAKbobCO-U="
        },
        {
            title: "Christian Hayes",
            author: "University of Havard",
            price: 20,
            rate: 4.5,
            totalRate: 1233,
            totalLesson: 12,
            imageUrl: "https://media.istockphoto.com/id/508628776/photo/sunset-over-kandariya-mahadeva-temple.jpg?s=612x612&w=0&k=20&c=YOpVZmLiY4ccl_aoWRJhfqLpNEDgjyOGuTAKbobCO-U="
        },
        {
            title: "Christian Hayes",
            author: "University of Havard",
            price: 20,
            rate: 4.5,
            totalRate: 1233,
            totalLesson: 12,
            imageUrl: "https://media.istockphoto.com/id/508628776/photo/sunset-over-kandariya-mahadeva-temple.jpg?s=612x612&w=0&k=20&c=YOpVZmLiY4ccl_aoWRJhfqLpNEDgjyOGuTAKbobCO-U="
        },
        {
            title: "Christian Hayes",
            author: "University of Havard",
            price: 20,
            rate: 4.5,
            totalRate: 1233,
            totalLesson: 12,
            imageUrl: "https://media.istockphoto.com/id/508628776/photo/sunset-over-kandariya-mahadeva-temple.jpg?s=612x612&w=0&k=20&c=YOpVZmLiY4ccl_aoWRJhfqLpNEDgjyOGuTAKbobCO-U="
        }
    ]
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
