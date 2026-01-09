import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import { IMAGES } from '../../Constants/IMAGES';
import { COLORS } from '../../Constants/COLORS';
import {useNavigation} from '@react-navigation/native';

const OnboardingScreen: React.FC = () => {
    const navigation = useNavigation<any>();
  return (
    <ImageBackground
      source={IMAGES.onboardimgbg}
      style={styles.container}
      resizeMode="cover"
    >
      <StatusBar translucent backgroundColor="transparent" />

    
<View style={styles.overlay} pointerEvents="none" />


      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
 
          <Image
            source={IMAGES.Ethical}
            style={styles.logo}
            resizeMode="contain"
          />

        
          <Text style={styles.title}>Empower</Text>
          <Text style={styles.subtitle}>
            Your Trade With{'\n'}Complete Knowledge
          </Text>

          
       
  <TouchableOpacity style={styles.button}onPress={() => {
  console.log('Pressed');
  navigation.navigate('LoginScreen');
}}>
    <View style={styles.arrowCircle}>
      <Text style={styles.arrow}>➜</Text>
    </View>

    <Text style={styles.buttonText}>Get Started</Text>
  </TouchableOpacity>

        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default OnboardingScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 90, 40, 0.75)',
  },

  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 80,    
  },

  scrollContent: {
    flexGrow: 1,
  },

  logo: {
    width: 250,
    height: 250,
    marginBottom: 70, 
    alignSelf: 'center', 
  },  

  title: {
    color: '#FFFFFF',
    fontSize: 22,
    fontStyle: 'italic',
    textAlign: 'left',
    marginTop:150,
  },

  subtitle: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 36,
    textAlign: 'left',
  },

button: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#FFFFFF',
  width: '95%',
  paddingVertical: 18,
  paddingHorizontal: 16,
  borderRadius: 40,
  justifyContent: 'center',
  alignSelf: 'center',
  marginTop: 24,   
},



  buttonText: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: '600',
    
  },

arrowCircle: {
  width: 40,
  height: 40,
  borderRadius: 21,
  backgroundColor: COLORS.black,
  justifyContent: 'center',
  alignItems: 'center',

  position: 'absolute',
  left: 8,
},

  arrow: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    
  },
});
