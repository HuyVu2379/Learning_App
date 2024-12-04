import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomePage from '../components/HomePage';
import MyCoursePage from '../components/MyCoursePage';
import UserProfilePage from '../components/UserProfilePage';
import SearchPage from '../components/SearchPage';
import { useSelector } from 'react-redux';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    const loggedInUser = useSelector((state) => state.user.loggedInUser);
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home-outline';
                    } else if (route.name === 'My Courses') {
                        iconName = 'book-outline';
                    }
                    else if (route.name === `User's Profile`) {
                        iconName = 'person-outline';
                    }
                    else {
                        iconName = 'search-outline';
                    }

                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#00bfff',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen
                options={{ headerShown: false }}
                name="Home"
                component={HomePage}
                initialParams={{ loggedInUser }}
            />
            <Tab.Screen
                options={{ headerShown: false }}
                name='Search'
                component={SearchPage}
            />
            <Tab.Screen
                name="My Courses"
                component={MyCoursePage}
            />
            <Tab.Screen
                options={{ headerShown: false }}
                name="User's Profile"
                component={UserProfilePage}
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;
