import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Overview from './components/Overview';
import Lessons from './components/Lessons';
import Review from './components/Review';

const Tab = createMaterialTopTabNavigator();

function CourseDetailNavigator() {
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
            <Tab.Screen name="Overview" component={Overview} />
            <Tab.Screen name="Lessons" component={Lessons} />
            <Tab.Screen name="Review" component={Review} />
        </Tab.Navigator>
    );
}

export default CourseDetailNavigator;
