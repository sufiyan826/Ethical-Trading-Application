import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {IMAGES} from '../../Constants/IMAGES';
import {COLORS} from '../../Constants/COLORS';
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButton';
import {useNavigation} from '@react-navigation/native';


const LoginScreen = () => {
    const navigation = useNavigation<any>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);

  const handleInput = (name: string, text: string) => {
    if (name === 'email') setEmail(text);
    if (name === 'password') setPassword(text);
  };

  return (
    <ImageBackground
      source={IMAGES.loginbg}
      style={styles.container}
      resizeMode="cover">

    
      <View style={styles.logoWrapper}>
        <Image source={IMAGES.Ethical} style={styles.logo} />
      </View>

    
      <Text style={styles.title}>Sign In</Text>

     
      <CustomInput
        auth
        name="email"
        value={email}
        handleInput={handleInput}
      />

      <CustomInput
        auth
        name="password"
        value={password}
        secure={secure}
        setSecure={setSecure}
        handleInput={handleInput}
      />

    
      <TouchableOpacity style={styles.forgotWrapper}>
        <Text style={styles.forgotText}>Forgot Password ?</Text>
      </TouchableOpacity>

     
     
<View style={styles.btnWrapper}>
  <TouchableOpacity style={styles.Btn} onPress={()=>navigation.navigate('WellcomeScreen1')}>
    <Text style={styles.btntext}>Submit</Text>
  </TouchableOpacity>
</View>


    
      <Text style={styles.bottomText} onPress={() => navigation.navigate('SignUp')}>
        Don’t have an account{' '}
        <Text style={styles.signupText}>sign up</Text>
      </Text>

    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 70,
  },

  logoWrapper: {
    alignItems: 'center',
  
  },

  logo: {
    width: 180,
    height: 120,
    resizeMode: 'contain',
  },

  logoText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '700',
  },

  logoSubText: {
    color: COLORS.white,
    fontSize: 12,
    letterSpacing: 1,
  },

  title: {
    color: COLORS.white,
    fontSize: 35    ,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 60,
    marginTop:10
  },

  forgotWrapper: {
    alignItems: 'flex-end',
    marginBottom: 25,
  },

  forgotText: {
    color: COLORS.white,
    fontSize: 16,
  },

  bottomText: {
    color: COLORS.white,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },

  signupText: {
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
btnWrapper: {
  alignItems: 'center',
},

Btn: {
  width: 350,
  height: 50,
  backgroundColor: COLORS.white,
  borderRadius: 25,
  alignItems: 'center',
  justifyContent: 'center',
},
btntext: {
  color: COLORS.green2,
  fontSize: 16,
  fontWeight: '600',
},

});
