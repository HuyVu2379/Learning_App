import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Course from '../Course/Course';

const VerticalCarousel = ({ data, navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {data.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => navigation.navigate('CourseDetail', { courseId: item.id, courseName: item.title })}
                    >
                        <Course data={item} />
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    viewMore: {
        color: '#1E90FF',
        fontSize: 14,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default VerticalCarousel;
