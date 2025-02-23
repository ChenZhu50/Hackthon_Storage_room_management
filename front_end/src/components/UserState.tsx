import React, { createContext, useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

interface UserContextType {
  user: any | null;
  setUser: (user: any | null) => void;
  loggedIn: () => boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserState = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    
    const loggedIn = (): boolean => {
        return user !== null;
    }
    const signOut = () => {
      setUser(null);
      navigate('/');
    }
    const fetchClubId = () => {
      if (!user) return '';
      return user._id;
    }
    const functions = {
      loggedIn, 
      setUser,
      user,
      signOut,
      fetchClubId
    };
  return (
    <UserContext.Provider value={functions}>
        {children}
    </UserContext.Provider>
  )
}
export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserState provider');
    }
    return context;
}