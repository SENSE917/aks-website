import { createContext, useContext, useState, ReactNode } from "react";

type Role = "guest" | "admin" | null;

interface AuthContextType {
  role: Role;
  loginAdmin: (email: string, password: string) => boolean;
  loginGuest: () => void;
}

const AdminEmail = "aksinergy";
const AdminPassword = "aks123";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<Role>(null);

  const loginAdmin = (email: string, password: string) => {
    if (email === AdminEmail && password === AdminPassword) {
      setRole("admin");
      return true;
    }
    return false;
  };

  const loginGuest = () => setRole("guest");

  return (
    <AuthContext.Provider value={{ role, loginAdmin, loginGuest }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
