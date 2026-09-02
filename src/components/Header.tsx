import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth";
import SearchBar from "./SearchBar";

export default function Header() {
  const { user, loginAs, logout } = useAuth();
  return (
    <header className="header">
      <div className="brand">
        <img src="/logo-fm.png" alt="Flanders Make" className="logo" />
        <Link to="/"><h1>Flanders Make Academy</h1></Link>
      </div>
      <nav>
        <Link to="/"><span>Home</span></Link>
        <Link to="/path/tp-digitalization"><span>Transition paths</span></Link>
        <Link to="/company"><span>Company view</span></Link>
        <Link to="/admin"><span>Coordinator</span></Link>
      </nav>
      <SearchBar />
      <div className="auth">
        {user ? (
          <>
            <span>{user.name}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <button onClick={() => loginAs("employee")}>Sign in as employee</button>
            <button onClick={() => loginAs("company")}>Sign in as company</button>
            <button onClick={() => loginAs("admin")}>Sign in as admin</button>
          </>
        )}
      </div>
    </header>
  );
}
