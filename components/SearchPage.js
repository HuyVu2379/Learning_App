import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Pressable, ScrollView, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import HorizontalCourse from './HomePage/HorizontalCourse';
import { SafeAreaView } from 'react-native-safe-area-context';
import Course from './Course/Course';
import { fetchTopics, fetchCourseFilter } from '../redux/slices/topicSlice'
import { useDispatch, useSelector } from 'react-redux';
const SearchPage = () => {
    const [search, setSearch] = useState('');
    const [activeFilterSession, setActiveFilterSession] = useState(false)
    const [topics, setTopics] = useState(["Java", "SQL", "Javascrip", "Python", "Digital marketing", "Photoshop", "Watercolor"]);
    const [category, setCategory] = useState([
        {
            categoryName: "Business",
            iconName: "linechart"
        },
        {
            categoryName: "Design",
            iconName: "form"
        },
        {
            categoryName: "Code",
            iconName: "codesquareo"
        },
        {
            categoryName: "Movie",
            iconName: "videocamera"
        },
        {
            categoryName: "Language",
            iconName: "earth"
        }
    ]);
    const [courseRecommend, setCourseRecommend] = useState([
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
    ]);
    const dispatch = useDispatch();
    const { courses, allTopic, loadingFilter, errorFilter } = useSelector((state) => state.topic)
    const handleGetTopics = async () => {
        try {
            await dispatch(fetchTopics(3));
        } catch (error) {
            console.log("Error fetch topics");

        }
    }
    const handleFilterCourse = async (nameCourse) => {
        try {
            setActiveFilterSession(true);
            await dispatch(fetchCourseFilter(nameCourse));
            console.log(courses);

        } catch (error) {
            console.log("error search course");
        }
    }
    useEffect(() => {
        handleGetTopics();
    }, []);
    const ListFilter = ({ data }) => {
        return (
            <ScrollView>
                <TouchableOpacity>
                    {data.map((item, index) => {
                        return (
                            <Course data={item} />
                        )
                    })}
                </TouchableOpacity>
            </ScrollView>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.searchBar}>
                    <SearchBar
                        inputStyle={{ backgroundColor: '#F3F4F6' }}
                        containerStyle={{ backgroundColor: 'white', borderRadius: 5, flex: 1, borderBottomWidth: 0, borderTopWidth: 0 }}
                        inputContainerStyle={{
                            backgroundColor: '#F3F4F6',
                        }}
                        lightTheme
                        placeholder='Search Course'
                        onChangeText={text => setSearch(text)}
                        value={search}
                    />
                    <Pressable onPress={() => { handleFilterCourse(search) }} style={styles.filterButton}>
                        <MaterialCommunityIcons name="filter-variant" size={24} color="white" />
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Filter</Text>
                    </Pressable>
                </View>
                {activeFilterSession ? <ListFilter data={courses} /> :
                    <View>
                        <View>
                            <Text style={{ fontWeight: '600', fontSize: 20, paddingVertical: 10 }}>Hot topics</Text>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                {!allTopic ?
                                    topics.map((topic, index) => {
                                        return (
                                            <Pressable style={styles.topic} key={index}>
                                                <Text style={{ color: '#00BDD6' }}>{topic}</Text>
                                            </Pressable>
                                        );
                                    })
                                    : allTopic.map((topic, index) => {
                                        return (
                                            <Pressable style={styles.topic} key={index}>
                                                <Text style={{ color: '#00BDD6' }}>{topic.topicName}</Text>
                                            </Pressable>
                                        );
                                    })
                                }
                            </View>
                        </View>
                        <View>
                            <View style={styles.headerContainer}>
                                <Text style={styles.header}>Categories</Text>
                                <Text style={styles.viewMore}>View more</Text>
                            </View>
                            {
                                category.map((item, index) => {
                                    return (
                                        <Pressable style={styles.categoryBox} key={index}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                                <AntDesign name={item.iconName} size={24} color="#00BDD6" />
                                                <Text style={{ fontSize: 18 }}>{item.categoryName}</Text>
                                            </View>
                                            <AntDesign name="right" size={24} color="black" />
                                        </Pressable>
                                    );
                                })
                            }
                        </View>
                        <View style={styles.popularCoursesContainer}>
                            <View style={styles.headerContainer}>
                                <Text style={styles.header}>Recommended for you</Text>
                                <Text style={styles.viewMore}>View more</Text>
                            </View>
                            <HorizontalCourse data={courseRecommend} />
                        </View>
                    </View>
                }
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    filterButton: {
        backgroundColor: '#00BDD6',
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    topic: {
        borderWidth: 1,
        borderColor: '#00BDD6',
        borderRadius: 50,
        padding: 10,
        marginBottom: 5,
        marginRight: 5,
        marginTop: 5,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    viewMore: {
        color: '#1E90FF',
        fontSize: 14,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    categoryBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: '#E5E5E5',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        borderRadius: 5,
        marginBottom: 7,
    },
    popularCoursesContainer: {
        marginVertical: 20,
    },
});

export default SearchPage;