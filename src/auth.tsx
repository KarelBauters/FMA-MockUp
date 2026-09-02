import React, { createContext, useContext, useState } from "react";

type Role = "guest" | "employee" | "company" | "admin";
type User = { name: string; role: Role; companyId?: string } | null;

const AuthContext = createContext({
  user: null as User,
  loginAs: (role: Role) => {},
  logout: () => {}
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(() => {
    const raw = localStorage.getItem("fm_user");
    return raw ? JSON.parse(raw) : null;
  });

  const loginAs = (role: Role) => {
    const u: User =
      role === "employee"
        ? { name: "Sofie (employee)", role, companyId: "company-1" }
        : role === "company"
        ? { name: "ACME NV (owner)", role, companyId: "company-1" }
        : role === "admin"
        ? { name: "FMA Coordinator", role }
        : null;
    setUser(u);
    if (u) localStorage.setItem("fm_user", JSON.stringify(u));
    else localStorage.removeItem("fm_user");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("fm_user");
  };

  return <AuthContext.Provider value={{ user, loginAs, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
