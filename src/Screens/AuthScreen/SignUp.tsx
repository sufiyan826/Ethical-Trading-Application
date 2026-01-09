import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {IMAGES, ICONS} from '../../Constants/IMAGES';
import {COLORS} from '../../Constants/COLORS';
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButton';

const SignUpScreen = () => {
  const navigation = useNavigation<any>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secure1, setSecure1] = useState(true);
  const [secure2, setSecure2] = useState(true);

  const handleInput = (name: string, text: string) => {
    if (name === 'email') setEmail(text);
    if (name === 'password') setPassword(text);
    if (name === 'confirmPassword') setConfirmPassword(text);
  };

  return (
    <ImageBackground
      source={IMAGES.loginbg}
      style={styles.container}
      resizeMode="cover">

 
      <View style={styles.logoWrapper}>
        <Image source={IMAGES.Ethical} style={styles.logo} />
      </View>

  
      <Text style={styles.title}>Sign Up</Text>

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
        secure={secure1}
        setSecure={setSecure1}
        handleInput={handleInput}
      />

      <CustomInput
        auth
        name="confirmPassword"
        value={confirmPassword}
        secure={secure1}
        setSecure={setSecure1}
        handleInput={handleInput}
        placeholder="Password"
      />

 <View style={styles.btnWrapper}>
   <TouchableOpacity style={styles.Btn} onPress={()=>navigation.navigate('HomeScreen')}>
     <Text style={styles.btntext}>Submit</Text>
   </TouchableOpacity>
 </View>
 

      <TouchableOpacity
        onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.bottomText}>
          Already have an account{' '}
          <Text style={styles.signupText}>sign In</Text>
        </Text>
      </TouchableOpacity>

     

    
   

    </ImageBackground>
  );
};

export default SignUpScreen;

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

  title: {
    color: COLORS.white,
    fontSize: 35,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 60,
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
  marginTop:40,
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
