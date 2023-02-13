import { Switch } from "@mui/material";
import { Header } from "../styles/MyStyles";
import useGlobalStarage from "../hooks/useGlobalStarage";

const Head = () => {
  const {
    global: { themeName, toggleTheme },
  } = useGlobalStarage();

  return (
    <Header>
      <h3>Pascoal Kahamba</h3>
      <Switch onClick={toggleTheme} checked={themeName === "dark"} />
    </Header>
  );
};

export default Head;
