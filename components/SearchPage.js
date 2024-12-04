import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SearchBar } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import HorizontalCourse from "./HomePage/HorizontalCourse";
import { SafeAreaView } from "react-native-safe-area-context";
import Course from "./Course/Course";
import { fetchTopics, fetchCourseFilter } from "../redux/slices/topicSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPopularCourse,
  fetchRecommendCourse,
} from "../redux/slices/courseSlice";

const SearchPage = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [activeFilterSession, setActiveFilterSession] = useState(false);
  const [topics, setTopics] = useState([
    "Java",
    "SQL",
    "Javascrip",
    "Python",
    "Digital marketing",
    "Photoshop",
    "Watercolor",
  ]);
  const { categories, loadingCategory, errorCategory } = useSelector(
    (state) => state.category
  );
  const { popularCourse, loadingCourse, errorCourse } = useSelector(
    (state) => state.course
  );
  
  const dispatch = useDispatch();
  const { courses, allTopic, loadingFilter, errorFilter } = useSelector(
    (state) => state.topic
  );

  const handleGetCourseRecommendYou = async () => {
    try {
      await dispatch(fetchPopularCourse());
    } catch (error) {
      console.log("Error get courses", error);
    }
  };

  const handleGetTopics = async () => {
    try {
      await dispatch(fetchTopics(3));
    } catch (error) {
      console.log("Error fetching topics", error);
    }
  };

  const handleFilterCourse = async (nameCourse) => {
    try {
      setActiveFilterSession(true);
      await dispatch(fetchCourseFilter(nameCourse));
    } catch (error) {
      console.log("Error filtering courses", error);
    }
  };

  useEffect(() => {
    handleGetTopics();
    handleGetCourseRecommendYou();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.searchBar}>
          <SearchBar
            inputStyle={{ backgroundColor: "#F3F4F6" }}
            containerStyle={{
              backgroundColor: "white",
              borderRadius: 5,
              flex: 1,
              borderBottomWidth: 0,
              borderTopWidth: 0,
            }}
            inputContainerStyle={{
              backgroundColor: "#F3F4F6",
            }}
            placeholder="Search Course"
            lightTheme
            onChangeText={(text) => setSearch(text)}
            value={search}
          />

          <Pressable
            onPress={() => {
              handleFilterCourse(search);
            }}
            disabled={!search.trim()}
            style={[
              styles.filterButton,
              { backgroundColor: search.trim() ? "#00BDD6" : "#B0B0B0" },
            ]}
          >
            <MaterialCommunityIcons
              name="filter-variant"
              size={24}
              color="white"
            />
            <Text style={{ color: "white", fontWeight: "bold" }}>Filter</Text>
          </Pressable>
        </View>
        {activeFilterSession ? (
          courses ? (
            <ListFilter data={courses} />
          ) : (
            <Text>Course not found</Text>
          )
        ) : (
          <View>
            <View>
              <Text
                style={{ fontWeight: "600", fontSize: 20, paddingVertical: 10 }}
              >
                Hot topics
              </Text>
              <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {(allTopic && allTopic.length > 0 ? allTopic : topics).map(
                  (topic, index) => (
                    <Pressable
                      onPress={() => {
                        handleFilterCourse(topic.topicName);
                      }}
                      style={styles.topic}
                      key={index}
                    >
                      <Text style={{ color: "#00BDD6" }}>
                        {topic.topicName || topic}
                      </Text>
                    </Pressable>
                  )
                )}
              </View>
            </View>
            <View>
              <View style={styles.headerContainer}>
                <Text style={styles.header}>Categories</Text>
                <Text style={styles.viewMore}>View more</Text>
              </View>
              {categories.map((item, index) => (
                  <Pressable style={styles.categoryBox} key={index}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <Text style={{ fontSize: 18 }}>{item.nameCategory}</Text>
                    </View>
                    <AntDesign name="right" size={24} color="black" />
                  </Pressable>
              ))}
            </View>
            <View style={styles.popularCoursesContainer}>
              <View style={styles.headerContainer}>
                <Text style={styles.header}>Recommended for you</Text>
                <Text style={styles.viewMore}>View more</Text>
              </View>
              <HorizontalCourse data={popularCourse} navigation={navigation} />
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  filterButton: {
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  topic: {
    borderWidth: 1,
    borderColor: "#00BDD6",
    borderRadius: 50,
    padding: 10,
    marginBottom: 5,
    marginRight: 5,
    marginTop: 5,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  viewMore: {
    color: "#1E90FF",
    fontSize: 14,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  categoryBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    shadowColor: "#000",
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
