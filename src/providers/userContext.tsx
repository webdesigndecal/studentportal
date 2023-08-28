"use client";

import { Student } from "@/firebase/student";
import { getLocalStorageUser } from "@/server/localStorage";
import { createContext, useContext, useEffect, useState } from "react";

// Default, user is null.
interface UserContextValue {
  user: Student | null;
  setUser: React.Dispatch<React.SetStateAction<Student | null>>;
}

const UserContext = createContext<UserContextValue | undefined>(undefined);

function UserProvider({ children }: { children: any }) {
  const [user, setUser] = useState<Student | null>(null);
  useEffect(() => {
    const userFromLocalStorage = getLocalStorageUser();
    setUser(userFromLocalStorage);
  }, []);
  useEffect(() => setUser(user), [user]);

  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      {children}
    </UserContext.Provider>
  );
}

function useUserContext() {
  const userContext = useContext(UserContext);
  if (userContext === undefined) {
    throw new Error("useUserContext must be inside an onboarding provider");
  }
  return { user: userContext.user, setUser: userContext.setUser };
}

export { UserProvider, useUserContext };
