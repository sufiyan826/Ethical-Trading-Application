import {PersistState} from 'redux-persist/es/types';

interface UserDetails {
  id: string;
  name: string;
  first_name: string;
  last_name: string;
  email: string;
  profile_picture: string;
}

export interface AuthState {
  loginUser: boolean;
  first: boolean;
  userDetails: UserDetails;
  tokenId: string | null;
}

export interface RootState {
  auth: AuthState;
  _persist: PersistState;
}
