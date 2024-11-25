import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showInputs, setShowInputs] = useState(false); // Trạng thái nút toggle

  const isFormComplete = username && email && password && confirmPassword;

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert(`Sign Up Successful!\nUsername: ${username}\nEmail: ${email}`);
    navigation.navigate('Login');
  };

  return (
    <LinearGradient
      colors={['#4423a3', '#aa63cb']}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>SIGN UP</Text>
        <TextInput
          placeholder="Username"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          placeholder="Confirm Password"
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        <View style={styles.checkContainer}>
          <TouchableOpacity
            style={[styles.checkButton, showInputs && styles.checkButtonActive]}
            onPress={() => setShowInputs(!showInputs)}
          >
          {showInputs && <Text style={styles.checkMark}>✔</Text>}
          </TouchableOpacity>
            <Text style={styles.textCheck}>Teacher</Text>
          </View>
          {showInputs && (
            <View style={styles.inputsContainer}>
              <TextInput
                style={styles.input}
                placeholder="Expertise"
              />
              <TextInput
                style={styles.input}
                placeholder="Certificate"
              />
            </View>
          )}
        
        <TouchableOpacity
          style={[styles.btn, isFormComplete ? styles.btnActive : styles.btnInactive]}
          onPress={handleSignUp}
          disabled={!isFormComplete}
        >
          <Text style={[styles.textBtn, isFormComplete && styles.textActive]}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
            Already have an account? Login.
          </Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#ffffff',
  },
  input: {
    fontFamily: 'Roboto',
    borderWidth: 1,
    height: 50,
    width: '80%',
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    color: '#ffffff',
    fontSize: 14,
  },
  inputsContainer: {
    width:'100%',
    marginLeft:65,
    justifyContent:'center',
    alignContent:'center',
  },
  btn: {
    borderWidth: 1,
    height: 50,
    width: '80%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnInactive: {
    borderColor: '#D1D1D1',
  },
  btnActive: {
    borderColor: 'white',
  },
  textBtn: {
    fontFamily: 'Roboto',
    fontSize: 14,
    textAlign: 'center',
    color: '#D1D1D1',
  },
  textActive: {
    color: 'white',
  },
  link: {
    fontFamily: 'Roboto',
    marginTop: 20,
    textAlign: 'center',
    justifyContent:'center',
    color: 'white',
  },
  footer: {
    borderTopWidth: 1,
    borderColor: 'white',
    width: '100%',
    position: 'absolute',
    bottom: 15,
    alignSelf: 'center',
  },
  checkContainer:{
    flexDirection:'row',
    alignSelf: 'flex-end',
    marginRight: 35,
  },
  checkButton: {
    borderWidth: 1,
    height:15,
    width:15,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkButtonActive: {
    backgroundColor: '#fff',
  },
  checkMark: {
    color: '#4423a3',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textCheck:{
    marginLeft:10,
    fontFamily: 'Roboto',
    textAlign: 'center',
    color: 'white',
  },
});
