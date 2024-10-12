import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Course from '../Course/Course';

const VerticalCarousel = ({ data }) => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {data.map((item, index) => (
                    <View key={index}>
                        <Course data={item} />
                    </View>
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
