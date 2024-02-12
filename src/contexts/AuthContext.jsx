import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [userName, setUserName] = useState("");
  
  useEffect(() => {
    const userNameInLocalStorage = localStorage.getItem("userName");
    if (userNameInLocalStorage) {
      setUserName(userNameInLocalStorage);
      setAuth(true);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ auth, setAuth, userName, setUserName }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
