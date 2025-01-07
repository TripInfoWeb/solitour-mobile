import {create, StateCreator} from 'zustand';

interface AuthState {
  id: number;
  userStatus: string;
  userImage: {
    id: number;
    address: string;
    createdDate: string;
  };
  nickname: string;
  age: number | null;
  sex: 'male' | 'female' | null;
  email: string;
  phoneNumber: string | null;
  isAdmin: boolean;
}

interface AuthAction {
  initialize: () => void;
  setAuthState: (data: Partial<AuthState>) => void;
}

const initialState: AuthState = {
  id: 0,
  userStatus: '',
  userImage: {
    id: 0,
    address: '',
    createdDate: '',
  },
  nickname: '',
  age: null,
  sex: null,
  email: '',
  phoneNumber: null,
  isAdmin: false,
};

type AuthStoreType = AuthState & AuthAction;

const authStore: StateCreator<AuthStoreType> = set => ({
  ...initialState,
  initialize: () => set({...initialState}),
  setAuthState: (data: Partial<AuthState>) => set({...data}),
});

export const useAuthStore = create<AuthStoreType>()(authStore);
