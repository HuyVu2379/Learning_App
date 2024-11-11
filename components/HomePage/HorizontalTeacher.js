import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import CardTeacher from '../Course/CardTeacher';
const HorizontalTeacher = ({ navigation, data }) => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {data.map((item, index) => (
                    <TouchableOpacity onPress={() => navigation.navigate("TeacherProfile")} key={index} style={styles.itemContainer}>
                        <CardTeacher data={item} />
                    </TouchableOpacity>
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
export default HorizontalTeacher;
