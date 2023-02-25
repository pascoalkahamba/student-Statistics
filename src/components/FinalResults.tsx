import { Box } from "@mui/material";
import useGlobalStarage from "../hooks/useGlobalStarage";

const FinalResults = () => {
  const {
    global: { value },
  } = useGlobalStarage();

  return (
    <Box sx={{ width: "100%", marginTop: "80px", padding: ".5rem" }}>
      Resultado Final
    </Box>
  );
};

export default FinalResults;
