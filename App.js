import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import HomePage from './components/HomePage';
import TabNavigator from './navigators/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import MyCourseNavigator from './navigators/MyCourseNavigator';
import CourseDetailPage from './components/CourseDetailPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LearningPage from './components/LearningPage'
const Stack = createNativeStackNavigator();
export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BottomTab" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="CourseDetail" component={CourseDetailPage} options={{ headerShown: false }} />
        <Stack.Screen name="LearningPage" component={LearningPage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
