import { useContext } from "react";
import { Switch } from "@mui/material";
import { ThemeContext } from "styled-components";
import { Header } from "../styles/MyStyles";

interface HeadProps {
  toggleTheme: () => void;
}
const Head = ({ toggleTheme }: HeadProps) => {
  const { title } = useContext(ThemeContext);

  return (
    <Header>
      <h3>Pascoal Kahamba</h3>
      <Switch onClick={toggleTheme} checked={title === "dark"} />
    </Header>
  );
};

export default Head;
