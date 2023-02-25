import { createContext, useCallback, useState } from "react";
import {
  createTheme,
  CssBaseline,
  ThemeProvider as GlobalTheme,
} from "@mui/material";
import { ThemeProvider } from "styled-components";
import usePersistedStorage from "../hooks/usePersistedStorage";

interface GlobalStorageProps {
  children: React.ReactNode;
}

export type ThemeMode = "light" | "dark";

export interface GlobalProps {
  themeName: ThemeMode;
  toggleTheme: () => void;
  open: boolean;
  value: number;
  errorMessage: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

export const GlobalContext = createContext<GlobalProps | null>(null);

export const GlobalStorage = ({ children }: GlobalStorageProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [themeName, setThemeName] = usePersistedStorage<ThemeMode>(
    "theme",
    "light"
  );

  const toggleTheme = useCallback(() => {
    setThemeName((otherTheme) => (otherTheme === "light" ? "dark" : "light"));
  }, []);

  const theme = createTheme({
    palette: {
      mode: themeName,
    },
  });

  return (
    <GlobalContext.Provider
      value={{
        themeName,
        errorMessage,
        toggleTheme,
        open,
        value,
        setOpen,
        setValue,
        setErrorMessage,
      }}
    >
      <GlobalTheme theme={theme}>
        <CssBaseline />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </GlobalTheme>
    </GlobalContext.Provider>
  );
};
