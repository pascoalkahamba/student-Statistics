import { createContext, useCallback } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import usePersistedStorage from "../hooks/usePersistedStorage";
import { light } from "@mui/material/styles/createPalette";

interface GlobalStorageProps {
  children: React.ReactNode;
}

type ThemeMode = "light" | "dark";

export interface GlobalProps {
  themeName: ThemeMode;
  toggleTheme: () => void;
  theme: {
    palette: {
      primary: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
      };
      secondary: {};
    };
  };
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
    <GlobalContext.Provider value={{ themeName, toggleTheme, theme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};
