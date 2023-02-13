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
    <Section>
      <GlobalStyle />
      <Head toggleTheme={toggleTheme} />
    </Section>
  );
};

export default Home;
