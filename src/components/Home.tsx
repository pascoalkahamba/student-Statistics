import { ThemeProvider } from "styled-components";
import usePersistedStorage from "../hooks/usePersistedStorage";
import { dark } from "../styles/Dark";
import { light } from "../styles/Light";
import { GlobalStyle, Section } from "../styles/MyStyles";
import { ThemeMode } from "../styles/Styles";
import Head from "./Head";

const Home = () => {
  const [theme, setTheme] = usePersistedStorage<ThemeMode>("theme", "light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? dark : light}>
      <GlobalStyle />
      <Section>
        <Head toggleTheme={toggleTheme} />
      </Section>
    </ThemeProvider>
  );
};

export default Home;
