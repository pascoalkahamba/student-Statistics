import { Container, Box } from "@mui/material";
import { useContext, useEffect } from "react";
import { Header, Section } from "../themes/MyStyles";
import Head from "./Head";
import { ThemeContext } from "styled-components";

const Home = () => {
 
 
  return (
    <Section>
      <Head />
    </Section>
  );
};

export default Home;
