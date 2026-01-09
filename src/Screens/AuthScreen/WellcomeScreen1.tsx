import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {IMAGES} from '../../Constants/IMAGES';
import AppHeader from '../../Components/AppHeader';
import CustomButton from '../../Components/CustomButton';
import { COLORS } from '../../Constants/COLORS';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');
const options = [
  'Lorem Ipsum',
  'Lorem Ipsum',
  'Lorem Ipsum',
  'Lorem Ipsum',
];

const WellcomeScreen1 = () => {
      const navigation = useNavigation<any>();
  const [selected, setSelected] = useState(0);

  return (
    <ImageBackground
      source={IMAGES.wellcomebg}
      style={styles.container}
      resizeMode="cover">


      <AppHeader />

  
      <Text style={styles.title}>Questionnaire</Text>

      <View style={styles.stepsRow}>
        <View style={styles.stepActive}>
          <Text style={styles.stepTextDark}>01</Text>
        </View>

        <View style={styles.line} />

        <View style={styles.stepCurrent}>
          <Text style={styles.stepTextLight}>02</Text>
        </View>

        <View style={styles.line} />

        <View style={styles.stepInactive}>
          <Text style={styles.stepTextLight}>03</Text>
        </View>
      </View>

      <Text style={styles.question}>
        Q1: Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Text>

      {options.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.optionRow}
          onPress={() => setSelected(index)}>

          <View
            style={[
              styles.radio,
              selected === index && styles.radioActive,
            ]}
          />

          <Text style={styles.optionText}>{item}</Text>
        </TouchableOpacity>
      ))}


     <View style={styles.bottomBtn}>
  <CustomButton
    title="Next"
    onPress={() => navigation.navigate('Wellcomescreen2')}
  />
</View>

    </ImageBackground>
  );
};

export default WellcomeScreen1;

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    paddingHorizontal: width * 0.053,   
    paddingTop: height * 0.075,         
  },

  title: {
    color: COLORS.white,
    fontSize: width * 0.075,       
    fontWeight: '600',
    textAlign: 'center',
    marginTop: height * 0.04,       
  },

  stepsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: height * 0.04,      
  },

  stepActive: {
    width: width * 0.13,           
    height: width * 0.13,
    borderRadius: width * 0.065,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.075,          
  },

  stepCurrent: {
    width: width * 0.13,
    height: width * 0.13,
    borderRadius: width * 0.065,
    backgroundColor: 'rgba(255,255,255,0.10)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.075,
  },

  stepInactive: {
    width: width * 0.13,
    height: width * 0.13,
    borderRadius: width * 0.065,
    backgroundColor: COLORS.green2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.075,
  },

  stepTextDark: {
    color: '#000',
    fontWeight: '600',
  },

  stepTextLight: {
    color: COLORS.white,
    fontWeight: '600',
  },

  line: {
    width: width * 0.24,           
    height: height * 0.0025,      
    backgroundColor: COLORS.gray1,
    marginTop: height * 0.075,       
  },

  question: {
    color: COLORS.white,
    fontSize: width * 0.04,            
    lineHeight: height * 0.037,        
    marginBottom: height * 0.04,       
    marginTop: height * 0.025,       
    marginLeft: width * 0.05,           
  },

  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.022,     
    marginLeft: width * 0.05,           
  },

  radio: {
    width: width * 0.048,            
    height: width * 0.048,
    borderRadius: width * 0.024,
    borderWidth: 1,
    borderColor: COLORS.white,
    marginRight: width * 0.032,      
  },

  radioActive: {
    backgroundColor: COLORS.white,
  },

  optionText: {
    color: COLORS.white,
    fontSize: width * 0.042,           
  },

  bottomBtn: {
    position: 'absolute',
    bottom: height * 0.04,             
    left: width * 0.053,               
    right: width * 0.053,              
  },

});
