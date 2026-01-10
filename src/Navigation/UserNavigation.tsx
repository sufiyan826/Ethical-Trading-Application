import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import OnboardingScreen from '../Screens/AuthScreen/OnboardingScreen';
import HomeScreen from '../Screens/UserScreen/HomeScreen';
import Portfolio from '../Screens/UserScreen/Portfolio';
import AIAssistant from '../Screens/UserScreen/AIAssitant';
import ResearchScreen from '../Screens/UserScreen/Research';
import CommunityScreen from '../Screens/UserScreen/Community';
import MicroSoftScreen from '../Screens/UserScreen/MicroSoft';
import AchevementScreen from '../Screens/UserScreen/Achievement';
import WellcomeScreen1 from '../Screens/AuthScreen/WellcomeScreen1';
import Wellcomescreen2 from '../Screens/AuthScreen/Wellcomescreen2';
import WellcomeScreen3 from '../Screens/AuthScreen/Wellcomescreen3';
import WellcomeScreen4 from '../Screens/AuthScreen/Wellcomescreen4';
import LoginScreen from '../Screens/AuthScreen/LoginSceen';
import SignUp from '../Screens/AuthScreen/SignUp';
import BottomNavigation from './BottomNavigation';
import ProfileScreen from '../Screens/UserScreen/ProfileScreen';

// Bottom Tabs

type UserStackParamList = {
  OnboardingScreen: undefined;
  HomeScreen:undefined;
  Portfolio:undefined;
  AIAssistant:undefined;
  Research:undefined;
  Community:undefined;
  MicroSoft:undefined;
  Achevement:undefined;
  WellcomeScreen1:undefined;
  Wellcomescreen2:undefined;
  WellcomeScreen3:undefined;
  WellcomeScreen4:undefined;
  LoginScreen:undefined;
  SignUp:undefined;
  BottomNavigation: undefined;
  ProfileScreen:undefined
};

const Stack = createNativeStackNavigator<UserStackParamList>();

const UserNavigation: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName= 'OnboardingScreen' screenOptions={{ headerShown: false }}>
      {/* Login Screen */}
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
         <Stack.Screen name="WellcomeScreen1" component={WellcomeScreen1} /> 
          <Stack.Screen name="Wellcomescreen2" component={Wellcomescreen2} /> 
          <Stack.Screen name="WellcomeScreen3" component={WellcomeScreen3} /> 
          <Stack.Screen name='WellcomeScreen4' component={WellcomeScreen4} />
          <Stack.Screen name = 'LoginScreen' component={LoginScreen} />
          <Stack.Screen name = 'SignUp'   component={SignUp} />


      {/* Bottom Navigation as Home */}
   <Stack.Screen name="HomeScreen" component={BottomNavigation} />


      {/* Other Screens */}
         <Stack.Screen name="Portfolio" component={Portfolio} />
          <Stack.Screen name="AIAssistant" component={AIAssistant} />
          <Stack.Screen name="Research" component={ResearchScreen} />
          <Stack.Screen name="Community" component={CommunityScreen} />
          <Stack.Screen name="MicroSoft" component={MicroSoftScreen} />
          <Stack.Screen name="Achevement" component={AchevementScreen} />
          <Stack.Screen name='ProfileScreen' component={ProfileScreen} />

    </Stack.Navigator>
  );
};

export default UserNavigation;
