import { createContext, useContext } from "react";

// Create the Context contract
export const AuthContext = createContext(null);

// Custom hook to consume the Context cleanly
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};