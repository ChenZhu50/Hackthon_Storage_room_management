import React, { createContext, useContext, useState, useEffect } from 'react'

interface UserContextType {
  user: any | null;
  setUser: (user: any | null) => void;
  loggedIn: () => boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserState = ({ children }) => {
    const [user, setUser] = useState(null);
    
    const loggedIn = (): boolean => {
        return user !== null;
    }
    const functions = {
      loggedIn, 
      setUser,
      user
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