import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import {IMAGES, ICONS} from '../../Constants/IMAGES';
import {COLORS} from '../../Constants/COLORS';

import {LogoutUserAPI} from '../../Store/Action/AuthAction';
import {logOut} from '../../Store/Reducers/AuthReducer';
import { showError } from '../../Constants/FlashMessage';

const {width, height} = Dimensions.get('window');

type RootStackParamList = {
  Achevement: undefined;
  LoginScreen: undefined;
};

const ProfileScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();


  const handleLogout = async () => {
    try {
      await LogoutUserAPI();

      dispatch(logOut()); 

      navigation.reset({
        index: 0,
        routes: [{name: 'LoginScreen'}],
      });
    } catch (error) {
      console.log('Logout error ->', error);

      showError('Logout Failed: Something went wrong while logging out');
    }
  };

  return (
    <ImageBackground
      source={IMAGES.Homebg2}
      style={styles.imagebg}
      resizeMode="cover">

      <View style={styles.panel}>

      
        <View style={styles.topRow}>
          <Image source={IMAGES.user} style={styles.avatar} />

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={ICONS.closeicon} style={styles.closeIcon} />
          </TouchableOpacity>
        </View>

       
        <View style={styles.infoRow}>
          <Image source={ICONS.usericon} style={styles.infoIcon} />
          <Text style={styles.infoText}>Ahmed</Text>
        </View>

        <View style={styles.infoRow}>
          <Image source={ICONS.email} style={styles.infoIcon} />
          <Text style={styles.infoText}>Ahmed123@gmail.com</Text>
        </View>

        <View style={styles.infoRow}>
          <Image source={ICONS.Lock} style={styles.infoIcon} />
          <Text style={styles.infoText}>Password</Text>
        </View>

        <Text style={styles.sectionTitle}>AI Preferences</Text>

        <View style={styles.divider} />

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Achevement')}>
          <Image source={ICONS.PowerIcon} style={styles.menuIcon} />
          <Text style={styles.menuText}>Gamification</Text>
        </TouchableOpacity>

        <View style={styles.menuItem}>
          <Image source={ICONS.setting} style={styles.menuIcon} />
          <Text style={styles.menuText}>Settings</Text>
        </View>

        <View style={styles.menuItem}>
          <Image source={ICONS.language} style={styles.menuIcon} />
          <Text style={styles.menuText}>Language</Text>
        </View>

        <View style={{flex: 1}} />

        <TouchableOpacity style={styles.menuItem1} onPress={handleLogout}>
          <Image source={ICONS.logout} style={styles.menuIcon} />
          <Text style={styles.menuText}>Log Out</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  imagebg: {
    flex: 1,
  },

  panel: {
    width: width * 0.75,
    height: '100%',
    backgroundColor: 'rgba(255,255,255,0.08)',
    paddingTop: height * 0.06,
    paddingHorizontal: width * 0.06,
  },

  topRow: {
    flexDirection: 'row',
    alignItems: 'center',   
    justifyContent:'space-between',
    marginBottom: height * 0.05,
    marginTop:20
  },

  avatar: {
    width: width * 0.26,
    height: width * 0.26,
    borderRadius: width * 0.13,
  },

  closeIcon: {
    width: 22,
    height: 22,
    tintColor:   COLORS.white,
    marginLeft:220,
    marginBottom:28
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.022,
  },

  infoIcon: {
    width: 20,
    height: 20,
    tintColor: COLORS.white,
    marginRight: 14,
  },

  infoText: {
    color: COLORS.white,
    fontSize: 18,
  },

  divider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginVertical: height * 0.03,
  },

  sectionTitle: {
    color: COLORS.slowhgray,
    fontSize: 20,
    // marginBottom: height * 0.02,
    marginTop:10
  },

  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.030,
  },

  menuIcon: {
    width: 20,
    height: 20,
    tintColor: COLORS.slowhgray,
    marginRight: 14,
  },

  menuText: {
    color: COLORS.white,
    fontSize: 20,
  },
  menuItem1:{
      flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.080,
  }
});
