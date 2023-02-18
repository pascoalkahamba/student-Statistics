import { Box, Switch, Typography, useTheme } from "@mui/material";

import useGlobalStarage from "../hooks/useGlobalStarage";
import { Header } from "../themes/MyStyles";

const Head = () => {
  const {
    global: { toggleTheme },
  } = useGlobalStarage();
  const theme = useTheme();
  const {
    palette: {
      mode,
      primary: { light, dark },
    },
  } = theme;

  return (
    <Box
      sx={() => ({
        header: { backgroundColor: dark },
      })}
    >
      <Header>
        <Typography variant="h6" display="block" gutterBottom>
          Pascoal Kahamba
        </Typography>
        <Switch onClick={toggleTheme} checked={mode === "dark"} />
      </Header>
    </Box>
  );
};

export default Head;
