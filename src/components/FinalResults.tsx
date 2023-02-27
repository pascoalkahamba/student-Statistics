import {
  Box,
  Stack,
  Typography,
  useTheme,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import useGlobalStarage from "../hooks/useGlobalStarage";
import { Item } from "../themes/MyStyles";

const FinalResults = () => {
  const {
    global: { studentData },
  } = useGlobalStarage();

  const {
    palette: {
      primary: { dark },
    },
  } = useTheme();

  return (
    <Box sx={{ width: "100%", marginTop: "60px", padding: ".5rem" }}>
      <Stack spacing={2}>
        <Typography
          variant="h4"
          gutterBottom
          sx={() => ({
            backgroundColor: dark,
            textAlign: "center",
            borderRadius: ".3rem",
          })}
        >
          Resultados da Análise
        </Typography>
        {studentData.map(({ discipline, note }) => (
          <Item
            key={discipline}
            sx={{ border: `2px solid ${note > 9 ? "#57a773" : "#bf4342"}` }}
          >
            <Typography variant="inherit" gutterBottom>
              {discipline}
            </Typography>
            <Typography
              variant="inherit"
              sx={{ color: `${note > 9 ? "#57a773" : "#bf4342"}` }}
              gutterBottom
            >
              {`${note} Valores`}
            </Typography>
          </Item>
        ))}
      </Stack>{" "}
    </Box>
  );
};

export default FinalResults;
