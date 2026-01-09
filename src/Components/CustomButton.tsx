import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import {COLORS} from '../Constants/COLORS';
import {ICONS} from '../Constants/IMAGES';

interface Props {
  title?: string;
  onPress?: () => void;
}

const CustomButton: React.FC<Props> = ({
  title = 'Next',
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      
      <Text style={styles.text}>{title}</Text>

      <View style={styles.arrowCircle}>
        <Image source={ICONS.Arrow3} style={styles.arrowIcon} />
      </View>

    </TouchableOpacity>
  );
};

export default CustomButton;


const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.white,
    height: 56,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: '85%',
    alignSelf: 'center',
    marginBottom:25
  },

  text: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: '600',
  },

  arrowCircle: {
    position: 'absolute',
    right: 8,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  arrowIcon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
});
