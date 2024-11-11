"use client";

import { createContext, useState } from "react";

const UserContext = createContext({
  username: "",
  setUsername: (username: string): string | void => username,
});
const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [username, setUsername] = useState("");

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
