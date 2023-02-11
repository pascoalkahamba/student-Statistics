import { useContext } from "react";
import { Switch } from "@mui/material";
import { ThemeContext } from "styled-components";
import { Header } from "../styles/MyStyles";
import { GlobalContext, GlobalProps } from "./GlobalContext";

interface HeadProps {
  toggleTheme: () => void;
}
const Head = ({ toggleTheme }: HeadProps) => {
  const context = useContext(GlobalContext) as GlobalProps;
  const { name } = context;

  const { title } = useContext(ThemeContext);
  console.log(name);
  return (
    <Header>
      <h3>Pascoal Kahamba</h3>
      <Switch onClick={toggleTheme} checked={title === "dark"} />
    </Header>
  );
};

export default Head;
