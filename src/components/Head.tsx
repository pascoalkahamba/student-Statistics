import { Button, Switch, useTheme } from "@mui/material";

import useGlobalStarage from "../hooks/useGlobalStarage";
import { ButtonTwo, Header } from "../themes/MyStyles";

const Head = () => {
  const {
    global: { toggleTheme },
  } = useGlobalStarage();
  const {
    palette: { mode },
  } = useTheme();
  return (
    <Header>
      <h3>Pascoal Kahamba</h3>
      <Switch onClick={toggleTheme} checked={mode === "dark"} />
    </Header>
  );
};

export default Head;
