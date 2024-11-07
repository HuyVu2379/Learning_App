import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AllCourses from '../components/MyCourses/AllCourses';
import OnGoingCourses from '../components/MyCourses/OnGoingCourses';
import CompletedCourses from '../components/MyCourses/CompletedCourses';
import TeacherCourse from '../components/TeacherProfile/TeacherCourse';
const Tab = createMaterialTopTabNavigator();

function TeacherProfileNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#00bfff',
                tabBarInactiveTintColor: 'gray',
                tabBarIndicatorStyle: {
                    backgroundColor: '#00bfff',
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: 'bold',
                },
                tabBarStyle: {
                    backgroundColor: '#f8f9fa',
                },
            }}
        >
            <Tab.Screen name="OVERVIEW" component={AllCourses} />
            <Tab.Screen name="COURSES" component={TeacherCourse} />
            <Tab.Screen name="REVIEW" component={CompletedCourses} />
        </Tab.Navigator>
    );
}

export default TeacherProfileNavigator;
