import React from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../Constants/COLORS';
import {ICONS} from '../Constants/IMAGES';

type CustomInputTypes = {
  name: 'email' | 'password' | 'confirmPassword' | string;
  value?: string;
  auth?: boolean;
  secure?: boolean;
  handleInput: (name: string, text: string) => void;
  setSecure?: (value: boolean) => void;
} & TextInputProps;

const CustomInput = ({
  name,
  value,
  handleInput,
  secure,
  setSecure,
  placeholder,
}: CustomInputTypes) => {

  const isEmail = name === 'email';
  const isPassword = name === 'password' || name === 'confirmPassword';

 
  const leftIcon = isEmail
    ? ICONS.email
    : isPassword
    ? ICONS.Lock
    : null;

  const inputPlaceholder =
    placeholder ||
    (name === 'email'
      ? 'Email'
      : name === 'password'
      ? 'Password'
      : name === 'confirm Password'
      ? 'Confirm Password'
      : '');

  return (
    <View style={styles.container}>
 
      {leftIcon && (
        <Image source={leftIcon} style={styles.leftIcon} />
      )}

      <TextInput
        value={value}
        onChangeText={text => handleInput(name, text)}
        placeholder={inputPlaceholder}
        placeholderTextColor={COLORS.white}
        style={styles.input}
        secureTextEntry={isPassword && secure}
        autoCapitalize="none"
      />

      {isPassword && (
        <TouchableOpacity onPress={() => setSecure?.(!secure)}>
          <Image source={ICONS.eye} style={styles.eyeIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.35)',
    borderRadius: 30,
    paddingHorizontal: 16,
    height: 50,
    marginVertical: 10,
  },

  leftIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 10,
    tintColor: COLORS.white,
  },

  input: {
    flex: 1,
    fontSize: 15,
    color: COLORS.white,
  },

  eyeIcon: {
    width: 20,
    height: 20,
    tintColor: COLORS.white,
  },
});
