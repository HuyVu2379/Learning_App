import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { performLogin } from '../../redux/slices/userSlice'; // Đường dẫn đúng tới userSlice

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const { loading, error, loggedInUser } = useSelector((state) => state.user);

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleLogin = async () => {
    try {
      const result = await dispatch(performLogin({ email: username, password }));
      if (result.meta.requestStatus === 'fulfilled') {
        // Lấy dữ liệu người dùng từ kết quả trả về
        const loggedInUser = result.payload;

        // Nếu đăng nhập thành công, điều hướng người dùng và truyền loggedInUser
        navigation.navigate('BottomTab', { loggedInUser });
      } else {
        // Hiển thị thông báo lỗi
        Alert.alert('Login Failed', result.payload || 'Invalid credentials');
      }
    } catch (err) {
      console.error('Login error:', err);
      Alert.alert('Error', 'An error occurred during login.');
    }
  };


  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <LinearGradient colors={['#4423a3', '#aa63cb']} style={styles.background}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>LOGIN</Text>

          <TextInput
            placeholder="Username"
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholderTextColor="#ccc"
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="#ccc"
          />
          <TouchableOpacity
            style={[styles.btn, username && password && styles.btnActive]}
            disabled={!username || !password || loading} // Disable khi loading
            onPress={handleLogin}
          >
            {loading ? (
              <Text style={styles.textBtn}>Loading...</Text>
            ) : (
              <Text style={[styles.textBtn, username && password && styles.textActive]}>
                Log In
              </Text>
            )}
          </TouchableOpacity>

          {error && <Text style={styles.error}>{error}</Text>}

          <Text
            style={styles.link}
            onPress={() => navigation.navigate('ForgotPassword')}
          >
            Forgot your login details? Get help signing in.
          </Text>
          <View style={styles.footer}>
            <Text
              style={styles.link}
              onPress={() => navigation.navigate('Register')}
            >
              Don't have an account? Sign up.
            </Text>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </TouchableWithoutFeedback>
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
  btn: {
    borderWidth: 1,
    height: 50,
    width: '80%',
    borderRadius: 5,
    justifyContent: 'center',
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
    color: 'white',
  },
  footer: {
    borderTopWidth: 1,
    borderColor: 'white',
    width: '100%',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});
