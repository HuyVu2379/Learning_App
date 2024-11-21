import React, {useState} from 'react';
import { SafeAreaView ,View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <LinearGradient
      colors={['#4423a3', '#aa63cb']}
      style={styles.background}
    > 
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>LOGIN</Text>
        <TextInput placeholder="Username" style={styles.input} value={username} onChangeText={setUsername}/>
        <TextInput placeholder="Password" style={styles.input} secureTextEntry value={password} onChangeText={setPassword}/>
        <TouchableOpacity style={[styles.btn , username && password && styles.btnActive]} disabled={!password}>
          <Text style={[styles.textBtn, username && password && styles.textActive]}>Log In</Text>
        </TouchableOpacity>
        <Text style={styles.link} onPress={() => navigation.navigate('ForgotPassword')}>
          Forgot your login details? Get help singin in.
        </Text>
        <View style={styles.footer}>
          <Text style={styles.link} onPress={() => navigation.navigate('Register')}>
            Don't have an account? Sign up.
          </Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background:{
    flex:1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },
  title: {
    fontFamily:'Roboto',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color:'#ffffff',
  },
  input: {
    fontFamily:'Roboto',
    borderWidth: 1,
    height:50,
    width:'80%',
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    color:"#ffffff",
    fontSize:14,
  },
  btn:{
    borderWidth:1,
    height:50,
    width:'80%',
    borderRadius:5,
    justifyContent:'center',
    borderColor:'#D1D1D1',
  },  
  btnActive: {
    borderColor:'white'
  },
  textBtn:{
    fontFamily:'Roboto',
    fontSize:14,
    textAlign:'center',
    color:'#D1D1D1',
  },
  textActive:{
    color:'white',
  },
  link: {
    fontFamily:'Roboto',
    marginTop: 20,
    textAlign: 'center',
    color: 'white',
  },
  footer:{
    borderTopWidth:1,
    borderColor:'white',
    width:'100%',
    position:'absolute',
    bottom:20,
    alignSelf:'center',
  }
});
