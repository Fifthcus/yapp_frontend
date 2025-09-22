import { AuthContext } from "@/contexts/AuthProvider";
import { useContext } from "react";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('The useAuth hook must be used within AuthProvider.');
  }
  return context;
};

export default useAuth;