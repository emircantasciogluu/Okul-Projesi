import { createContext, useState, useEffect } from "react";
import { fetchCurrentUser } from "./services/authService";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token") || "");
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);

      fetchCurrentUser(token)
        .then((data) => setUser(data))
        .catch(() => setUser(null));
    } else {
      localStorage.removeItem("token");
      setUser(null);
    }
  }, [token]);

  const logout = () => {
    setToken("");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, setToken, user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
