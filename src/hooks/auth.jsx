import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";
import * as jwtDecode from "jwt-decode";
export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadUserFromLocalStorage() {
      const token = localStorage.getItem("@foodexplorer:token");
      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          if (decodedToken.exp * 1000 > Date.now()) {
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            const userFromStorage = JSON.parse(
              localStorage.getItem("@foodexplorer:user")
            );
            setUser(userFromStorage);
          } else {
            await signOut();
          }
        } catch (error) {
          await signOut();
        }
      }
    }

    loadUserFromLocalStorage();
  }, []);

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;
      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
      localStorage.setItem("@foodexplorer:token", token);
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setUser(user);
      return { user, token };
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar.");
      }
      throw error;
    }
  }

  async function signOut() {
    try {
      localStorage.removeItem("@foodexplorer:token");
      localStorage.removeItem("@foodexplorer:user");
      setUser(null);
    } catch (error) {
      console.error("Error during sign out:", error);
    }
  }

  function isUserAuthenticated() {
    return !!user;
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        isUserAuthenticated,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
