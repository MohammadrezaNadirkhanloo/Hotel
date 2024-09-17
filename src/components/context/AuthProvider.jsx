import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();
const initialState = {
  user: null,
  isAuthen: false,
};
function authReducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        user: "user",
        isAuthen: true,
      };
    case "logout":
      return {
        user: null,
        isAuthen: false,
      };
  }
}

function AuthProvider({ children }) {
  const [{ user, isAuthen }, dispatch] = useReducer(authReducer, initialState);

  function login(email, password) {
    if (email === "user@gmail.com" && password === "1234")
      dispatch({ type: "login" });
  }
  function logout() {
    dispatch({ type: "logout" });
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthen,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export function useAuth() {
  return useContext(AuthContext);
}
