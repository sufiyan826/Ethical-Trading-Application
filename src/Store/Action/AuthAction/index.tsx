import API from '../../../Constants/API';
import {showError, showSuccess} from '../../../Constants/FlashMessage';
import {EndPoints} from '../../../Constants/Routes';
import {store} from '../../store';
import {
  setLoginUser,
  setTokenId,
  setUserDetails,
} from '../../Reducers/AuthReducer';

export const LoginUserAPI = async (
  data: any,
  setLoad: (value: boolean) => void,
  navigation: any,
) => {
  setLoad(true);

  try {
    const res = await API.post(EndPoints.login, data);

    console.log('Login Response ->', res?.data);

    if (res?.status === 200 && res?.data?.token) {
      store.dispatch(setTokenId(res.data.token));
      store.dispatch(setUserDetails(res.data.user));
      store.dispatch(setLoginUser());

      showSuccess('Login successful');

      navigation.reset({
        index: 0,
        routes: [{name: 'HomeScreen'}],
      });
    } else {
      showError('Login failed');
    }
  } catch (err: any) {
    console.error('LoginUserAPI error ->', err?.response?.data);

    showError(
      err?.response?.data?.error ||
      err?.response?.data?.message ||
      'Something went wrong'
    );
  } finally {
    setLoad(false);
  }
};



export const SignUpUserAPI = async (
  data: any,
  setLoad: (value: boolean) => void,
  navigation: any,
) => {
  setLoad(true);

  try {
    const res = await API.post(EndPoints.signUp, data);

    if (res?.status === 200) {
      showSuccess('Signup successful');
      navigation.navigate('LoginScreen');
    } else {
      showError('Signup failed');
    }
  } catch (err: any) {
    console.error('SignUpUserAPI error ->', err?.response?.data);
    showError(err?.response?.data?.message || 'Something went wrong');
  } finally {
    setLoad(false);
  }
};
