import React, { createContext } from "react";

type ChildrenProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface GlobalProps {
  name: string;
}

export const GlobalContext = createContext<GlobalProps | null>(null);

export const GlobalStorage = ({ children }: ChildrenProps) => {
  return (
    <GlobalContext.Provider value={{ name: "Pascoal" }}>
      {children}
    </GlobalContext.Provider>
  );
};
