import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import {AntDesign,Feather,Ionicons,FontAwesome6} from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="left" size={24} color="black" />
        <Text style={styles.textTitle}>UX Foundation</Text>
        <View style={styles.headerRight}>
          <Feather name="bookmark" size={24} color="black" />
          <Ionicons name="ellipsis-vertical-sharp" size={15} color="black" />
        </View>
      </View>
      <View style={styles.containerBanner}>
        <View>
          <Image source={require('../assets/banner.png')}
                  style={{height:150,width:'100%',resizeMode:'contain'}}/>
        </View>
        <Text style={styles.textBanner}>UX Foundation: Introduction to User</Text>
        <Text style={styles.textBanner}>Experience Design</Text>
        <View style={[styles.interaction,{gap:15,alignContent:'center'}]}>
          <View style={styles.interaction}>
            <FontAwesome6 name="heart" size={24} color="red" />
            <Text>231 Like</Text>
          </View>
          <View style={styles.interaction}>
            <AntDesign name="sharealt" size={24} color="black" />
            <Text>16 share</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },  
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  headerRight: {
    flexDirection: "row",
  },
  containerBanner:{
    flex:1,
  },
  interaction:{
    flexDirection:'row'
  },
  textBanner:{
    fontSize:18,
    fontWeight:"bold"
  }
});
