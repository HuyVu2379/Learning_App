import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AllCourses from '../components/MyCourses/AllCourses';
import OnGoingCourses from '../components/MyCourses/OnGoingCourses';
import CompletedCourses from '../components/MyCourses/CompletedCourses';

const Tab = createMaterialTopTabNavigator();

function MyCourseNavigator() {
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
            <Tab.Screen name="All" component={AllCourses} />
            <Tab.Screen name="On Going" component={OnGoingCourses} />
            <Tab.Screen name="Completed" component={CompletedCourses} />
        </Tab.Navigator>
    );
}

export default MyCourseNavigator;
