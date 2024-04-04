import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const login = (user) => {
    setUser(user);
  };
  const logout = () => {
    setUser(null);
  };

  //!   Save the user in localstorage start
  localStorage.setItem("user", JSON.stringify(user));
  //!   Save the user in localstorage end
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};