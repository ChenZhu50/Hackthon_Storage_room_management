import React, { createContext, useContext, useState, useEffect } from 'react'

interface UserContextType {
  user: any | null;
  setUser: (user: any | null) => void;
  loggedIn: () => boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserState = ({ children }) => {
    const [user, setUser] = useState<any | null>(() => {
        // 从 localStorage 初始化用户状态
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });
    
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
    if (context === undefined) {
        throw new Error('useUser must be used within a UserState provider');
    }
    return context;
}