import React, { useState } from "react";

export default function SearchBar() {
  const [q, setQ] = useState("");
  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Search logged: " + q + "\n(In demo this just alerts; in real app we store keywords.)");
    setQ("");
  };
  return (
    <form className="search" onSubmit={onSearch}>
      <input placeholder="Search the academy..." value={q} onChange={(e) => setQ(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
}
