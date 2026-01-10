import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import {IMAGES} from '../../Constants/IMAGES';
import {COLORS} from '../../Constants/COLORS';
import CustomInput from '../../Components/CustomInput';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

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

      <ScrollView showsVerticalScrollIndicator={false}>

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
          <TouchableOpacity
            style={styles.Btn}
            onPress={() => navigation.navigate('WellcomeScreen1')}>
            <Text style={styles.btntext}>Submit</Text>
          </TouchableOpacity>
        </View>

        <Text
          style={styles.bottomText}
          onPress={() => navigation.navigate('SignUp')}>
          Don’t have an account{' '}
          <Text style={styles.signupText}>sign up</Text>
        </Text>

      </ScrollView>
    </ImageBackground>
  );
};

export default LoginScreen;


const styles = StyleSheet.create({
   container: {
    flex: 1,
    paddingHorizontal: width * 0.06,   
    paddingTop: height * 0.080,        
  },

  logoWrapper: {
    alignItems: 'center',
  },

  logo: {
    width: width * 0.48,                
    height: height * 0.16,             
    resizeMode: 'contain',
  },

  logoText: {
    color: COLORS.white,
    fontSize: width * 0.05,            
    fontWeight: '700',
  },

  logoSubText: {
    color: COLORS.white,
    fontSize: width * 0.03,            
    letterSpacing: 1,
  },

  title: {
    color: COLORS.white,
    fontSize: width * 0.09,            
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: height * 0.07,        
    marginTop: height * 0.015,
  },

  forgotWrapper: {
    alignItems: 'flex-end',
    marginBottom: height * 0.03,        
  },

  forgotText: {
    color: COLORS.white,
    fontSize: width * 0.04,         
  },

  bottomText: {
    color: COLORS.white,
    fontSize: width * 0.04,          
    textAlign: 'center',
    marginTop: height * 0.025,
  },

  signupText: {
    fontWeight: '700',
    textDecorationLine: 'underline',
  },

  btnWrapper: {
    alignItems: 'center',
  },

  Btn: {
    width: width * 0.86,               
    height: height * 0.058,             
    backgroundColor: COLORS.white,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btntext: {
    color: COLORS.green2,
    fontSize: width * 0.04,             
    fontWeight: '600',
  },

});
