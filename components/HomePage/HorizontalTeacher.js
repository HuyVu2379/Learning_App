import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import CardTeacher from '../Course/CardTeacher';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserById } from '../../redux/slices/userSlice';
const HorizontalTeacher = ({ navigation, data }) => {
    const dispatch = useDispatch();
    const { userDetails, loading, error } = useSelector((state) => state.user);
    const handleGetTeacherDetails = async (userId) => {
        try {
            const result = await dispatch(fetchUserById(userId)).unwrap(); // Lấy dữ liệu trả về trực tiếp
            // console.log(result.data); // Kiểm tra dữ liệu trả về
            navigation.navigate('TeacherProfile', { user: result.data }); // Chuyển tới trang với dữ liệu người dùng
        } catch (error) {
            console.log('Error fetching teacher details:', error);
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {data.map((item, index) => (
                    <TouchableOpacity onPress={() => { handleGetTeacherDetails(item.userId) }} key={index} style={styles.itemContainer}>
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
