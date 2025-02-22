import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext();
export const UserState = ({ children }) => {
    const [user, setUser] = useState(null);
    const loggedIn = (): boolean => {
      return user ? true : false;
    }
    const functions = {};
  return (
    <UserContext.Provider value={functions}>
        {children}
    </UserContext.Provider>
  )
}
export const useUser = () => {
    return useContext(UserContext);
}