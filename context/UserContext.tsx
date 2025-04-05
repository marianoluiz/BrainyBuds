import { createContext, ReactNode, useState, useContext } from "react";

interface UserContextType {
  username: string;
  setUsername: (name: string) => void;
}
// This is the context object created, container for the shared state (username and setUsername)
const UserContext = createContext< UserContextType | undefined>(undefined);

// This is a React component that wraps your app (or part of it) and provides the username and setUsername state to all components inside it.
export const UserProvider = ({children}: {children: ReactNode}) => {
  const [username, setUsername] = useState<string>("");

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};

// custom hook for accessing
export const useUser = () => {
  const context = useContext(UserContext);

  if(!context) {
    throw new Error("useUser must be used within UserProvider");
  }

  return context;
}