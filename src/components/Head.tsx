import { Switch } from "@mui/material";

import useGlobalStarage from "../hooks/useGlobalStarage";
import { Header } from "../themes/MyStyles";

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
