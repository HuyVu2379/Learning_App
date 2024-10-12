import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import HomePage from './components/HomePage';
import TabNavigator from './navigators/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import MyCourseNavigator from './navigators/MyCourseNavigator';
export default function App() {
  let data = {
    title: "Christian Hayes",
    certificate: "University of Havard",
    imageUrl: "https://media.istockphoto.com/id/508628776/photo/sunset-over-kandariya-mahadeva-temple.jpg?s=612x612&w=0&k=20&c=YOpVZmLiY4ccl_aoWRJhfqLpNEDgjyOGuTAKbobCO-U=",
    rate: 4.5,
    totalRate: 1233,
  }
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <TabNavigator />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
