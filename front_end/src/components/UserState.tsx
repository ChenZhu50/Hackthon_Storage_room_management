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

    // 监听 user 状态变化
    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }, [user]);

    const value = {
        user,
        setUser,
        loggedIn
    };

    return (
        <UserContext.Provider value={value}>
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