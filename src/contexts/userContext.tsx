"use client";

import { createContext, useContext, useState } from "react";

type User = {
  studentId: string;
};

// Default, user is null.
interface UserContextValue {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const UserContext = createContext<UserContextValue | undefined>(undefined);

function UserProvider({ children }: { children: any }) {
  const [user, setUser] = useState<User | null>(null);
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

export type { User };
export { UserProvider, useUserContext };
