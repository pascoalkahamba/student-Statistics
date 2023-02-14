import { createContext, useCallback } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import usePersistedStorage from "../hooks/usePersistedStorage";

interface GlobalStorageProps {
  children: React.ReactNode;
}

type ThemeMode = "light" | "dark";

export interface GlobalProps {
  themeName: ThemeMode;
  toggleTheme: () => void;
}

export const GlobalContext = createContext<GlobalProps | null>(null);

export const GlobalStorage = ({ children }: GlobalStorageProps) => {
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
    <GlobalContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};
