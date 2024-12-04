import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, Modal, TouchableOpacity, ScrollView, Image } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Course from './Course/Course';
import Entypo from '@expo/vector-icons/Entypo';
import { Button } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { handleGetAllCourseInCart, handleRemoveCourseInCart } from "../redux/slices/cartSlice";
import { handleRegisterCourse } from "../redux/slices/courseSlice"; // Import registerCourse action

function CartPage({ navigation }) {
    const dispatch = useDispatch();
    const [isModalVisible, setModalVisible] = useState(false);
    const { listCourse } = useSelector((state) => state.cart);
    const { userCart } = useSelector((state) => state.cart);
    const { loggedInUser } = useSelector((state) => state.user); // Assume you have user info in the store

    // Tổng giá trị ban đầu
    const [totalPrice, setTotalPrice] = useState(0);

    const handleFetchAllCourse = async () => {
        try {
            await dispatch(handleGetAllCourseInCart(userCart.cartId));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleFetchAllCourse();
    }, [dispatch]);

    // Tính toán lại totalPrice khi danh sách khóa học thay đổi
    useEffect(() => {
        let total = 0;
        listCourse?.forEach(cartItem => {
            cartItem.courses?.forEach(course => {
                total += course.price; // Cộng giá của khóa học vào tổng giá trị
            });
        });
        setTotalPrice(total); // Cập nhật totalPrice
    }, [listCourse]); // Khi danh sách khóa học thay đổi, tính lại totalPrice

    // Xóa khóa học khỏi giỏ hàng
    const handleRemoveCourse = (courseId) => {
        dispatch(handleRemoveCourseInCart({ cartId: userCart.cartId, courseId })); // Gọi action xóa khóa học
        handleFetchAllCourse();
    };

    // Register all courses in the cart when user clicks "Thanh toán"
    const handleCheckout = async () => {
        try {
            // Iterate over the courses in the cart and register each one
            for (const cartItem of listCourse) {
                for (const course of cartItem.courses) {
                    await dispatch(handleRegisterCourse({ courseId: course.courseId, userId: loggedInUser.userId })); // Register course
                    handleRemoveCourse(course.courseId)
                }
            }

        } catch (error) {
            console.log("Error during course registration:", error);
        }
    };

    const ItemCart = ({ data }) => {
        return (
            <View style={styles.courseBox}>
                <View style={styles.courseContent}>
                    <Course data={data} />
                </View>
                <TouchableOpacity
                    style={styles.discountBox}
                    onPress={() => setModalVisible(true)}
                >
                    <Text>Voucher giảm giá</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.removeButton}
                    onPress={() => handleRemoveCourse(data.courseId)} // Xóa khóa học khi nhấn nút
                >
                    <Text style={styles.removeText}>Xóa</Text>
                </TouchableOpacity>
            </View>
        );
    };

    const dataDiscount = {
        imageUrl: 'https://www.softwebsolutions.com/wp-content/uploads/2021/08/React-Native.png',
    };

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
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <AntDesign onPress={() => { navigation.goBack() }} name="arrowleft" size={24} color="black" />
                <Text style={{ fontSize: 17 }}>
                    Giỏ hàng ({listCourse?.[0]?.courses?.length || 0})
                </Text>

                <Entypo name="dots-three-vertical" size={24} color="black" />
            </View>

            <ScrollView style={styles.courseContainer}>
                {Array.isArray(listCourse) && listCourse.length > 0
                    ? listCourse.map((cartItem, index) =>
                        cartItem.courses?.map((course, courseIndex) => (
                            <ItemCart key={`${index}-${courseIndex}`} data={course} />
                        ))
                    )
                    : <Text style={{ textAlign: 'center', marginTop: 20 }}>No courses in the cart.</Text>
                }
            </ScrollView>

            <View style={styles.totalPriceBox}>
                <Text style={styles.totalText}>Tổng cộng: {totalPrice.toLocaleString()} VND</Text>
                <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
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
        marginTop: 40
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: 'white',
    },
    courseContainer: {
        flex: 1,
        marginBottom: 80
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
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    removeButton: {
        backgroundColor: '#ff6f61',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },
    removeText: {
        color: 'white',
        fontWeight: 'bold',
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
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    totalText: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    checkoutButton: {
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 40,
        backgroundColor: '#3c7f8c',
        borderRadius: 5,
    },
    checkoutText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    discountItemBox: {
        flexDirection: 'row',
        padding: 10,
        marginBottom: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
    },
    imageDiscount: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginRight: 10,
    },
    discountDetails: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonAcceptDiscount: {
        marginTop: 20,
    },
});

export default CartPage;
