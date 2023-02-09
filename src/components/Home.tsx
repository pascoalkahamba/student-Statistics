import { useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { dark } from "../styles/Dark";
import { light } from "../styles/Light";
import { GlobalStyle, Section } from "../styles/MyStyles";
import Head from "./Head";

const Home = () => {
  const [theme, setTheme] = useState<DefaultTheme>(light);

  const toggleTheme = () => {
    setTheme(theme === light ? dark : light);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Section>
        <Head toggleTheme={toggleTheme} />
      </Section>
    </ThemeProvider>
  );
};

export default Home;
