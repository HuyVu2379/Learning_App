import React from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import MyCourse from '../Course/MyCourse';

const AllCourses = ({ navigation }) => {
    const DATA = [
        {
            id: '1',
            title: "React Native",
            duration: "5 hrs 30 mins",
            actualProgress: 70,
            imageUrl: "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/426563098_262508453544559_2272911557108388347_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=o_zJZK9cG_UQ7kNvgENAEIx&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=AiwrpNqybVbxXIxSDeti-fv&oh=00_AYCZFuevLqip0_3zo2aflUQAVJJwYUzQG7SG57IPSr2dog&oe=670C7BEF", // Đường dẫn hình ảnh mẫu
        },
        {
            id: '2',
            title: "JavaScript",
            duration: "6 hrs",
            actualProgress: 80,
            imageUrl: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp", // Đường dẫn hình ảnh mẫu
        },
        {
            id: '3',
            title: "Python",
            duration: "4 hrs 15 mins",
            actualProgress: 60,
            imageUrl: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp", // Đường dẫn hình ảnh mẫu
        },
        // Thêm nhiều đối tượng hơn nếu cần
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('LearningPage')} style={styles.itemContainer}>
            <MyCourse data={item} />
        </TouchableOpacity>
    );

    return (
        <View style={styles.listContainer}>
            <FlatList
                keyExtractor={(item) => item.id}
                data={DATA}
                renderItem={renderItem}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        padding: 10,
        backgroundColor: '#f5f5f5',
        flex: 1,
    },
    itemContainer: {
        alignItems: 'center',
        marginBottom: 10,
    },
});

export default AllCourses;
