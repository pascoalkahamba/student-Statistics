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

interface StudentsDataProps {
  discipline: string;
  note: number;
}

interface FeedBackProps {
  kind: KindProps;
  message: string;
}

export type ThemeMode = "light" | "dark";

type KindProps = "error" | "success" | "info" | "warning";

export interface GlobalProps {
  themeName: ThemeMode;
  toggleTheme: () => void;
  open: boolean;
  numberDisciplines: number;
  feedBack: FeedBackProps;
  studentData: StudentsDataProps[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setFeedBack: React.Dispatch<React.SetStateAction<FeedBackProps>>;
  setNumberDisciplines: React.Dispatch<React.SetStateAction<number>>;
  setStudentData: React.Dispatch<React.SetStateAction<StudentsDataProps[]>>;
}

export const GlobalContext = createContext<GlobalProps | null>(null);

export const GlobalStorage = ({ children }: GlobalStorageProps) => {
  const [open, setOpen] = useState(false);
  const [numberDisciplines, setNumberDisciplines] = useState(0);
  const [studentData, setStudentData] = useState<StudentsDataProps[]>([]);
  const [feedBack, setFeedBack] = useState<FeedBackProps>({
    kind: "error",
    message: "",
  });
  const [themeName, setThemeName] = usePersistedStorage<ThemeMode>(
    "theme",
    "light"
  );
  console.log(feedBack);
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
        feedBack,
        toggleTheme,
        open,
        numberDisciplines,
        studentData,
        setStudentData,
        setOpen,
        setNumberDisciplines,
        setFeedBack,
      }}
    >
      <GlobalTheme theme={theme}>
        <CssBaseline />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </GlobalTheme>
    </GlobalContext.Provider>
  );
};
