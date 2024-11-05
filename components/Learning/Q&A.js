import { View,Text, SafeAreaView, StyleSheet, FlatList,Image} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
export default function App() {
  const DATA = [
    {
      "id": 1,
      "userName": "Jane Barry",
      "avatar": require("../assets/man.png"),
      "timeAgo": "A day ago",
      "content": "Deserunt minim incididunt cillum nostrud do voluptate exceptuer exceptuer minim ex minim est",
      "likes": 23,
      "comments": 5
    },
    {
      "id": 2,
      "userName": "Thomas",
      "avatar": require("../assets/man.png"),
      "timeAgo": "A day ago",
      "content": "Deserunt minim incididunt cillum nostrud do voluptate exceptuer exceptuer minim ex minim est",
      "likes": 23,
      "comments": 5
    },
  ];

  const post = ({item}) =>(
    <View style={{borderWidth:1, padding: 5,borderRadius:10, borderColor:"grey",margin:5}}>
      <View style={{flexDirection:'row',paddingLeft:10}}>
        <Image source={item.avatar}
                style={{height:50,width:50}}/>
        <View style={{justifyContent:'center',padding:10}}>
          <Text style={{fontWeight:'bold'}}>{item.userName}</Text>
          <Text style={{color:'#00000094'}}>{item.timeAgo}</Text>
        </View> 
      </View>
        <Text>{item.content}</Text>
      <View>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <View style={[styles.row,{alignItems:'center'}]}>
          <AntDesign name="hearto" size={20} color="black" />
          <Text>{item.likes}</Text>
        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons name="comment-alert-outline" size={20} color="black" />
          <Text style={{color:'#00000094'}}>{item.comments} comments</Text>
        </View>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id.toString()}
        renderItem={post}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
  },
  row:{
    flexDirection:'row'
  }
})  

