import { Box, Stack, Typography } from "@mui/material";
import useGlobalStarage from "../hooks/useGlobalStarage";
import { Item } from "../themes/MyStyles";

const FinalResults = () => {
  const {
    global: { value, studentData },
  } = useGlobalStarage();

  return (
    <Box sx={{ width: "100%", marginTop: "60px", padding: ".5rem" }}>
      <Stack spacing={2}>
        {studentData.map(({ discipline, note }) => (
          <Item key={discipline}>
            <Typography variant="inherit" gutterBottom>
              {discipline}
            </Typography>
            <Typography variant="inherit" gutterBottom>
              {`${note} Valores`}
            </Typography>
          </Item>
        ))}
      </Stack>{" "}
    </Box>
  );
};

export default FinalResults;
