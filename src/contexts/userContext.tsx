"use client";

import { Student } from "@/firebase/student";
import { createContext, useContext, useState } from "react";

// Default, user is null.
interface UserContextValue {
  user: Student | null;
  setUser: React.Dispatch<React.SetStateAction<Student | null>>;
}

const UserContext = createContext<UserContextValue | undefined>(undefined);

function UserProvider({ children }: { children: any }) {
  const [user, setUser] = useState<Student | null>(null);
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
  console.log(userContext.user);
  return { user: userContext.user, setUser: userContext.setUser };
}

export { UserProvider, useUserContext };
