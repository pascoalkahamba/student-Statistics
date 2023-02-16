import { Box, Switch, useTheme } from "@mui/material";

import useGlobalStarage from "../hooks/useGlobalStarage";
import { Header } from "../themes/MyStyles";

const Head = () => {
  const {
    global: { toggleTheme },
  } = useGlobalStarage();
  const {
    palette: { mode },
  } = useTheme();
  return (
    <Box
      sx={(theme) => ({
        header: { backgroundColor: theme.palette.primary[theme.palette.mode] },
      })}
    >
      <Header>
        <h3>Pascoal Kahamba</h3>
        <Switch onClick={toggleTheme} checked={mode === "dark"} />
      </Header>
    </Box>
  );
};

export default Head;
