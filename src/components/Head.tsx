import { useContext } from "react";
import { Switch } from "@mui/material";
import { ThemeContext } from "styled-components";
import { Header } from "../styles/MyStyles";

import useGlobalStarage from "../hooks/useGlobalStarage";

interface HeadProps {
  toggleTheme: () => void;
}
const Head = ({ toggleTheme }: HeadProps) => {
  const { title } = useContext(ThemeContext);
  const {
    global: { name },
  } = useGlobalStarage();

  console.log(name);
  return (
    <Header>
      <h3>Pascoal Kahamba</h3>
      <Switch onClick={toggleTheme} checked={title === "dark"} />
    </Header>
  );
};

export default Head;
