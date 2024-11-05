import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Header from "./components/HeaderBanner";
import CourseDetailNavigator from "./CourseDetailNavigator";

export default function Learning(){
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bannerContainer}>
        <Header />
      </View>
      <View style={styles.navigatorContainer}>
        <NavigationContainer>
          <CourseDetailNavigator/>
        </NavigationContainer>
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
    marginBottom: 20, 
  },
  navigatorContainer: {
    flex: 1, 
  },
});
