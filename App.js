import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import HomePage from './components/HomePage';
import TabNavigator from './navigators/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import MyCourseNavigator from './navigators/MyCourseNavigator';
import CourseDetailPage from './components/CourseDetailPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LearningPage from './components/LearningPage'
import TeacherProfile from './components/TeacherProfile';
import CartPage from './components/CartPage'
import LoginScreen from './components/Login/LoginPage';
import RegisterScreen from './components/Login/SignupPage'
import { Provider } from 'react-redux';
import { store } from './redux/store';
const Stack = createNativeStackNavigator();
export default function App({ navigation }) {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LoginPage" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="RegisterPage" component={RegisterScreen} options={{ headerShown: false }} />
          <Stack.Screen name="BottomTab" component={TabNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="CourseDetail" component={CourseDetailPage} options={{ headerShown: false }} />
          <Stack.Screen name="LearningPage" component={LearningPage} options={{ headerShown: false }} />
          <Stack.Screen name="TeacherProfile" component={TeacherProfile} options={{ headerShown: false }} />
          <Stack.Screen name="CartPage" component={CartPage} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
