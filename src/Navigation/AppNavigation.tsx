import React from 'react';
import {useSelector} from 'react-redux';
import UserNavigation from '../Navigation/UserNavigation';

export default function AppNavigation() {
  const loginUser = useSelector((state: any) => state.auth.loginUser);

  return <UserNavigation isLoggedIn={loginUser} />;
}
