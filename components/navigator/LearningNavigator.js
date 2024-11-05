import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Lessons from './components/Lessons';
import Projects from './components/Projects';
import Q_A from './components/Q&A';

const Tab = createMaterialTopTabNavigator();

function LearningNavigator() {
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
            <Tab.Screen name="Lessons" component={Lessons} />
            <Tab.Screen name="Projects" component={Projects} />
            <Tab.Screen name="QA" component={Q_A} />
        </Tab.Navigator>
    );
}

export default LearningNavigator;
