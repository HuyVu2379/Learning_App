import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import Banner from './HomePage/Banner';
import MyCoursePageNavigator from '../navigators/MyCourseNavigator';

const MyCoursePage = () => {
    const data = {
        titleBanner: "Courses that boost your career!",
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.bannerContainer}>
                <Banner data={data} />
            </View>
            <View style={styles.navigatorContainer}>
                <MyCoursePageNavigator />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    bannerContainer: {
        marginBottom: 20, // Thêm khoảng cách giữa banner và navigator
    },
    navigatorContainer: {
        flex: 1, // Đảm bảo navigator chiếm toàn bộ không gian còn lại
    },
});

export default MyCoursePage;
