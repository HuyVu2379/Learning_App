import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Header from "./Learning/HeaderLearning";
import learningNavigator from "../navigators/LearningNavigator";

const Learning = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bannerContainer}>
        <Header />
      </View>
      <View style={styles.navigatorContainer}>
        <learningNavigator/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bannerContainer: {
    marginBottom: 20, // Thêm khoảng cách giữa banner và navigator
  },
  navigatorContainer: {
    flex: 1, // Đảm bảo navigator chiếm toàn bộ không gian còn lại
  },
});
