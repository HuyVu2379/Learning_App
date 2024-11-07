import { View, SafeAreaView, Text, StyleSheet, ScrollView } from "react-native"
import { useState, useEffect } from "react";
import HorizontalCourse from "../HomePage/HorizontalCourse";
import { Platform } from 'react-native';
import axios from "axios";
const TeacherCourse = () => {
    const [dataPopularCourse, setdataPopularCourse] = useState([]);
    useEffect(() => {
        const fetchDataPopularCourse = async () => {
            try {
                const iosUrl = 'http://192.168.2.9:8080';
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
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.popularCoursesContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>UI/UX Design</Text>
                        <Text style={styles.viewMore}>View all</Text>
                    </View>
                    <HorizontalCourse data={dataPopularCourse} />
                </View>
                <View style={styles.verticalCarouselContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>Graphic Design</Text>
                        <Text style={styles.viewMore}>View all</Text>
                    </View>
                    <HorizontalCourse data={dataPopularCourse} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingVertical: 10
    },
    popularCoursesContainer: {
        marginBottom: 20
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
})
export default TeacherCourse;