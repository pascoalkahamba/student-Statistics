import { Box, Stack, Typography, useTheme } from "@mui/material";
import useGlobalStarage from "../hooks/useGlobalStarage";
import { Item, Table, Thead } from "../themes/MyStyles";
import { red, green } from "@mui/material/colors";

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
            sx={{ border: `2px solid ${note > 9 ? green[500] : red[500]}` }}
          >
            <Typography variant="inherit" gutterBottom>
              {discipline}
            </Typography>
            <Typography
              variant="inherit"
              sx={{ color: `${note > 9 ? green[500] : red[500]}` }}
              gutterBottom
            >
              {`${note} Valores`}
            </Typography>
          </Item>
        ))}
      </Stack>{" "}
      <Table>
        <Thead>
          <tr>
            <th>Maior nota</th>
            <th>Menor nota</th>
            <th>Média das notas</th>
          </tr>
        </Thead>

        <tbody>
          <tr>
            <td>15</td>
            <td>9</td>
            <td>10</td>
          </tr>
        </tbody>
      </Table>
    </Box>
  );
};

export default FinalResults;
