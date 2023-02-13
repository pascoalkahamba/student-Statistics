import { createContext, useCallback, useMemo, useState } from "react";
import { ThemeProvider } from "@mui/material";
import { lightTheme } from "../themes/ThemeLight";
import { darkTheme } from "../themes/ThemeDark";
import { Box } from "@mui/system";
import { GlobalStyles } from "../themes/MyStyles";
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

  const theme = useMemo(() => {
    if (themeName === "light") return lightTheme;

    return darkTheme;
  }, [themeName]);

  return (
    <GlobalContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Box
          width={"100vw"}
          height={"100vh"}
          bgcolor={theme.palette.background.default}
        >
          {children}
        </Box>
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};
