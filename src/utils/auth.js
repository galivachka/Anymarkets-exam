import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthUserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = (user) => setUser(user);
  const logOut = () => setUser(null);

  return (
    <>
      <AuthContext.Provider value={{ user, login, logOut }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export const AuthUser = () => useContext(AuthContext);
