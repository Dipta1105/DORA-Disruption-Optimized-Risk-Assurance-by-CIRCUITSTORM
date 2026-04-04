"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type User = {
  id: string;
  name: string;
  phone: string;
  platform: string;
  walletBalance: number;
  geoCluster: string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (userData: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check for session in localStorage for the demo
    const savedUser = localStorage.getItem("dora_session");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem("dora_session", JSON.stringify(userData));
    // Also set a cookie for middleware access
    document.cookie = `dora_auth_token=${userData.id}; path=/; max-age=604800`; // 7 days
    router.push("/dashboard");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("dora_session");
    document.cookie = "dora_auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
