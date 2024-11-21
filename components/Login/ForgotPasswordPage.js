import React, { useState } from 'react';
import { SafeAreaView ,View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    if (email) {
      Alert.alert('Yêu cầu đặt lại mật khẩu', `Link đặt lại mật khẩu đã được gửi đến ${email}.`);
      navigation.navigate('Login');
    } else {
      Alert.alert('Lỗi', 'Vui lòng nhập địa chỉ email hợp lệ.');
    }
  };

  return (
    <LinearGradient
      colors={['#4423a3', '#aa63cb']}
      style={styles.background}
    > 
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>FORGOT PASSWORD</Text>
      <TextInput
        placeholder="YOUR EMAIL"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TouchableOpacity style={[styles.btn, email && styles.btnActive]} onPress={handleResetPassword} disabled={!email}>
        <Text style={[styles.textBtn, email && styles.textActive]}>Send Your Email</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
          Return
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
