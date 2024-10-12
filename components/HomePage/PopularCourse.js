import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CardCourse from '../Course/CardCourse';
import CardTeacher from '../Course/CardTeacher';
const PopularCourse = ({ data }) => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {data.map((item, index) => (
                    <View key={index} style={styles.itemContainer}>
                        <CardCourse data={item} />
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});
export default PopularCourse;
