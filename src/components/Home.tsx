import { ThemeProvider } from "@mui/material";
import usePersistedStorage from "../hooks/usePersistedStorage";
import { dark } from "../styles/Dark";
import { light } from "../styles/Light";
import { GlobalStyle, Section } from "../styles/MyStyles";
import { ThemeMode } from "../styles/Styles";
import { lightTheme } from "../themes/ThemeLight";
import Head from "./Head";

const Home = () => {
  const [theme, setTheme] = usePersistedStorage<ThemeMode>("theme", "light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Section>
        <Head toggleTheme={toggleTheme} />
      </Section>
    </ThemeProvider>
  );
};

export default Home;
