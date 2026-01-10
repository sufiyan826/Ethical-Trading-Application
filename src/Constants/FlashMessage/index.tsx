import Entypo from 'react-native-vector-icons/Entypo';
import {showMessage} from 'react-native-flash-message';
import {SIZES} from '../SIZES';

export const showSuccess = (message: string) => {
  return showMessage({
    message: message,
    type: 'success',
    color: 'white',
    icon: props => (
      <Entypo
        name="check"
        color={'white'}
        style={{marginRight: 5}}
        size={SIZES.width * 0.06}
      />
    ),
    textStyle: {fontSize: SIZES.width * 0.05},
    style: {alignItems: 'center'},
  });
};

export const showError = (message: string) => {
  return showMessage({
    message: message,
    type: 'danger',
    color: 'white',
    icon: props => (
      <Entypo
        name="cross"
        color={'white'}
        style={{marginRight: 5}}
        size={SIZES.width * 0.06}
      />
    ),
    textStyle: {fontSize: SIZES.width * 0.05},
    style: {alignItems: 'center'},
  });
};

export const isValidEmail = (email: string): boolean => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return !regex.test(email);
};
