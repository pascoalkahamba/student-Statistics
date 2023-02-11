import { createContext, useState } from "react";

interface GlobalStorageProps {
  children: React.ReactNode;
}

export interface GlobalProps {
  name: string;
  setState: React.Dispatch<React.SetStateAction<undefined>>;
}

export const GlobalContext = createContext<GlobalProps | null>(null);

export const GlobalStorage = ({ children }: GlobalStorageProps) => {
  const [state, setState] = useState();
  return (
    <GlobalContext.Provider value={{ name: "Pascoal", setState }}>
      {children}
    </GlobalContext.Provider>
  );
};
