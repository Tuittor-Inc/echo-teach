import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: string;
  name: string;
  email: string;
  picture: string;
  firstName?: string;
  lastName?: string;
}

interface UserState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// Load user from localStorage on app start
const loadUserFromStorage = (): UserState => {
  try {
    const savedUser = localStorage.getItem('tuittor_user');
    if (savedUser) {
      const user = JSON.parse(savedUser);
      return {
        user,
        isAuthenticated: true,
        isLoading: false,
      };
    }
  } catch (error) {
    console.error('Error loading user from localStorage:', error);
  }
  
  return {
    user: null,
    isAuthenticated: false,
    isLoading: false,
  };
};

const initialState: UserState = loadUserFromStorage();

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
      // Save to localStorage
      localStorage.setItem('tuittor_user', JSON.stringify(action.payload));
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
      // Remove from localStorage
      localStorage.removeItem('tuittor_user');
    },
  },
});

export const { setUser, setLoading, logout } = userSlice.actions;
export default userSlice.reducer;
