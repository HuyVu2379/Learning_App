import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';  // Hoặc có thể sử dụng FontAwesome, MaterialIcons...

const Category = ({ data }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Categories</Text>
            <Text style={styles.viewMore}>View more</Text>

            <View style={styles.grid}>
                {data.map((item, index) => (
                    <TouchableOpacity key={index} style={styles.categoryCard}>
                        <View style={styles.iconContainer}>
                            <Icon name={item.icon} size={30} color="#fff" />
                        </View>
                        <Text style={styles.categoryText}>{item.topic}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    viewMore: {
        position: 'absolute',
        right: 20,
        top: 20,
        color: '#1E90FF',
        fontSize: 14,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    categoryCard: {
        width: '47%',
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        paddingVertical: 10,
        paddingLeft: 10,
        marginBottom: 20,
        alignItems: 'center',
        gap: 10,
        flexDirection: 'row'
    },
    iconContainer: {
        backgroundColor: '#00BFFF',
        borderRadius: 5,
        padding: 15,
    },
    categoryText: {
        fontSize: 16,
        fontWeight: '500',
    },
});

export default Category;
