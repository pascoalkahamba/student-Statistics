import { useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { light } from "../styles/Light";
import { Section } from "../styles/MyStyles";
import Head from "./Head";

const Home = () => {
  const [theme, setTheme] = useState<DefaultTheme>(light);

  return (
    <ThemeProvider theme={theme}>
      <Section>
        <Head />
      </Section>
    </ThemeProvider>
  );
};

export default Home;
