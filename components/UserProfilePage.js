import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import VerticalCarousel from './HomePage/VertitcalCarousel';
import { useSelector, useDispatch } from 'react-redux';
const UserProfilePage = ({ navigation }) => {
    const { loggedInUser } = useSelector((state) => state.user);
    const user = loggedInUser
    let dataSaveCourses = [
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
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.title}>User's profile</Text>
                    <Entypo name="dots-three-vertical" size={24} color="grey" />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Image style={styles.background} source={{ uri: 'https://dulichminhanh.com.vn/wp-content/uploads/2024/09/dai-lo-ngo-dong.jpg' }} />
                    <Image style={styles.avatar} source={{ uri: user.avartar }} />
                </View>
                <View style={styles.nameUser}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>{user.name}</Text>
                    <Text style={{ fontSize: 18, color: 'grey' }}>{user.certificate}</Text>
                </View>
                <View style={styles.allCourse}>
                    <View style={styles.courses}>
                        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>25</Text>
                        <Text style={{ color: 'grey', fontWeight: 'bold' }}>Save</Text>
                    </View>
                    <View style={styles.courses}>
                        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>24</Text>
                        <Text style={{ color: 'grey', fontWeight: 'bold' }}>On Going</Text>
                    </View>
                    <View style={[styles.courses, { borderRightWidth: 0 }]}>
                        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>98</Text>
                        <Text style={{ color: 'grey', fontWeight: 'bold' }}>Complete</Text>
                    </View>
                </View>
                <Text style={{ fontWeight: '600', fontSize: 20, marginLeft: 10 }}>Save Courses</Text>
                <ScrollView style={{ height: 400, marginTop: 10 }} nestedScrollEnabled={true}>
                    <VerticalCarousel navigation={navigation} data={dataSaveCourses} />
                </ScrollView>
            </ScrollView >
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 10
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
        borderRadius: 80,
        borderWidth: 2,
        borderColor: 'white',
    },
    nameUser: {
        marginTop: 50,
        alignItems: 'center',
    },
    allCourse: {
        height: 50,
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 30,
    },
    courses: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderRightColor: 'grey',
    },
})
export default UserProfilePage

