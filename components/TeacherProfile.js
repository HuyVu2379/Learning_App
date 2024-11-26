import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, Image } from 'react-native';
import TeacherProfileNavigator from '../navigators/TeacherProfileNavigator';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
const TeacherProfile = ({ navigation, route }) => {
    const { user } = route.params || {}; // Lấy dữ liệu user từ route.params

    // Xử lý trường hợp user không tồn tại
    if (!user) {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 16 }}>User data not available</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <AntDesign onPress={() => navigation.goBack()} name="left" size={24} color="black" />
                <Text style={styles.title}>Teacher's profile</Text>
                <Ionicons name="ellipsis-vertical-sharp" size={24} color="black" />
            </View>
            <View style={{ alignItems: 'center' }}>
                <Image style={styles.background} source={{ uri: 'https://dulichminhanh.com.vn/wp-content/uploads/2024/09/dai-lo-ngo-dong.jpg' }} />
                <Image style={styles.avatar} source={{ uri: user.avartar || 'https://example.com/default-avatar.png' }} />
            </View>
            <View style={styles.nameUser}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>{user.name}</Text>
                <Text style={{ fontSize: 18, color: 'grey' }}>{user.certificate}</Text>
                <View style={styles.location}>
                    <Ionicons name="location-outline" size={24} color="grey" />
                    <Text style={{ fontSize: 14, color: 'grey' }}>New York - 09:30 AM</Text>
                </View>
            </View>
            <View style={styles.navigatorContainer}>
                <TeacherProfileNavigator />
            </View>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 30
    },
    bannerContainer: {
        marginBottom: 20, // Thêm khoảng cách giữa banner và navigator
    },
    navigatorContainer: {
        flex: 1, // Đảm bảo navigator chiếm toàn bộ không gian còn lại
        marginTop: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    background: {
        height: 200,
        width: '95%',
        borderRadius: 10,
    },
    avatar: {
        position: 'absolute',
        bottom: -50,
        left: '36%',
        width: 120,
        height: 120,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: 'white',
    },
    nameUser: {
        marginTop: 50,
        alignItems: 'center',
    },
    location: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    header: {
        paddingHorizontal: 10,
        height: 50,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    }
});

export default TeacherProfile;
