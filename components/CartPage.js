import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, Modal, TouchableOpacity, ScrollView, Image } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Course from './Course/Course';
import { CheckBox } from '@rneui/themed';
import Entypo from '@expo/vector-icons/Entypo';
import { Button } from 'react-native-elements';
function CartPage({ navigation }) {
    const [isSelected, setSelection] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false); // Trạng thái modal
    const ItemCart = ({ data }) => {
        return (
            <View style={styles.courseBox}>
                <View style={styles.courseContent}>
                    <View style={styles.checkBox}>
                        <CheckBox
                            checked={isSelected}
                            onPress={() => setSelection(!isSelected)}
                        />
                    </View>
                    <Course data={data} />
                </View>
                <TouchableOpacity
                    style={styles.discountBox}
                    onPress={() => setModalVisible(true)}
                >
                    <Text>Voucher giảm giá</Text>
                </TouchableOpacity>
            </View>
        )
    }
    const data = {
        imageUrl: 'https://www.softwebsolutions.com/wp-content/uploads/2021/08/React-Native.png',
        title: 'Introduction to Python',
        author: 'John Doe',
        price: 19.90,
        rate: 4.5,
        totalRate: 199,
        totalLesson: 299
    };
    const dataDiscount = {
        imageUrl: 'https://www.softwebsolutions.com/wp-content/uploads/2021/08/React-Native.png',
    }
    const DiscountItem = ({ data }) => {
        return (
            <View style={styles.discountItemBox}>
                <View>
                    <Image style={styles.imageDiscount} source={{ uri: data.imageUrl }} />
                </View>
                <View style={styles.discountDetails}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Đón tết giá rẻ</Text>
                    <Text>Giảm 10%</Text>
                    <Text>NSD: 27/11/2024</Text>
                    <Text>NHH: 1/1/2024</Text>
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <AntDesign onPress={() => { navigation.goBack() }} name="arrowleft" size={24} color="black" />
                <Text style={{ fontSize: 17 }}>Giỏ hàng(90)</Text>
                <Entypo name="dots-three-vertical" size={24} color="black" />
            </View>
            <ScrollView style={styles.courseContainer}>
                <ItemCart data={data} />
            </ScrollView>
            <View style={styles.totalPriceBox}>
                <Text style={styles.totalText}>Tổng cộng: 500,000 VND</Text>
                <TouchableOpacity style={styles.checkoutButton}>
                    <Text style={styles.checkoutText}>Thanh toán</Text>
                </TouchableOpacity>
            </View>
            <Modal
                transparent={true}
                visible={isModalVisible}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <TouchableOpacity
                        style={styles.overlayTouchable}
                        onPress={() => setModalVisible(false)}
                    />
                    <View style={styles.modalContent}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 20 }}>Chọn khuyến mãi</Text>
                        <ScrollView>
                            <DiscountItem data={dataDiscount} />
                        </ScrollView>
                        <TouchableOpacity style={styles.buttonAcceptDiscount} onPress={() => setModalVisible(false)}>
                            <Button title={"Đồng ý"} />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: 'white',
    },
    courseContainer: {
        flex: 1, // Chiếm toàn bộ không gian bên trên footer
    },
    checkBox: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    courseBox: {
        marginTop: 10,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    courseContent: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    discountBox: {
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        margin: 10,
        backgroundColor: '#f8f8f8',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    overlayTouchable: {
        flex: 1,
    },
    modalContent: {
        height: '70%',
        backgroundColor: 'white',
        padding: 20,
        justifyContent: 'space-between'
    },
    totalPriceBox: {
        height: 80,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    totalText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    checkoutButton: {
        backgroundColor: '#ff6f61',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    checkoutText: {
        color: 'white',
        fontWeight: 'bold',
    },
    buttonAcceptDiscount: {
    },
    discountItemBox: {
        width: '100%',
        flexDirection: 'row',
        padding: 10,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 5,
        gap: 10
    },
    imageDiscount: {
        height: 100,
        width: 100,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 5
    },
    discountDetails: {
        justifyContent: 'space-between'
    }
});

export default CartPage;
