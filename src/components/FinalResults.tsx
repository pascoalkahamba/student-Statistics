import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
  useTheme,
  Button,
} from "@mui/material";
import useGlobalStarage from "../hooks/useGlobalStarage";
import { Item, Table, Thead } from "../themes/MyStyles";
import { red, green } from "@mui/material/colors";
import { useState } from "react";

type KindSearchPros =
  | ((event: React.ChangeEvent<HTMLInputElement>, value: string) => void)
  | undefined;

type SearchDisciplineOrNoteProps =
  | React.FormEventHandler<HTMLFormElement>
  | undefined;

const FinalResults = () => {
  const [kindSearch, setKindSearch] = useState("");
  const [searchValue, setSearchValue] = useState<string | number>("");
  const {
    global: { studentData },
  } = useGlobalStarage();

  const {
    palette: {
      primary: { dark },
    },
  } = useTheme();
  let highGrade = 0;
  let lowScore = +studentData[0].note;
  let bestDiscipline = "";
  let badDiscipline = studentData[0].discipline;
  let sumOfNotes = 0;

  studentData.forEach(({ discipline, note }) => {
    highGrade = highGrade;
    lowScore = lowScore;
    sumOfNotes += +note;

    if (+note > highGrade) {
      highGrade = +note;
      bestDiscipline = discipline;
    }
    if (+note < lowScore) {
      lowScore = +note;
      badDiscipline = discipline;
    }
  });

  const clooseTheKindSearch: KindSearchPros = ({ target }) => {
    setKindSearch(target.value);
    console.log(target.value);
  };

  const searchDisciplineOrNote: SearchDisciplineOrNoteProps = (event) => {
    event.preventDefault();
    console.log(searchValue);
  };

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
      <Table
        style={{
          border: `2px solid ${dark}`,
        }}
      >
        <Thead>
          <tr>
            <th
              style={{
                border: `2px solid ${dark}`,
              }}
            >
              Maior nota
            </th>
            <th
              style={{
                border: `2px solid ${dark}`,
              }}
            >
              Menor nota
            </th>
            <th
              style={{
                border: `2px solid ${dark}`,
              }}
            >
              Média das notas
            </th>
          </tr>
        </Thead>

        <tbody>
          <tr>
            <td
              style={{
                backgroundColor: `${highGrade > 9 ? green[500] : red[500]}`,
                border: `2px solid ${dark}`,
              }}
            >
              {highGrade}({bestDiscipline})
            </td>
            <td
              style={{
                backgroundColor: `${lowScore > 9 ? green[500] : red[500]}`,
                border: `2px solid ${dark}`,
              }}
            >
              {lowScore}({badDiscipline})
            </td>
            <td
              style={{
                backgroundColor: `${
                  Math.round(sumOfNotes / studentData.length) > 9
                    ? green[500]
                    : red[500]
                }`,
                border: `2px solid ${dark}`,
              }}
            >
              {Math.round(sumOfNotes / studentData.length)} Valores
            </td>
          </tr>
        </tbody>
      </Table>
      <FormControl sx={{ marginTop: "2rem" }}>
        <FormLabel id="demo-radio-buttons-group-label">
          Escolha o tipo de pesquisa
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          value={kindSearch}
          onChange={clooseTheKindSearch}
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="Disciplina"
          />
          <FormControlLabel value="male" control={<Radio />} label="Nota" />
        </RadioGroup>
      </FormControl>
      <Box
        component="form"
        onSubmit={searchDisciplineOrNote}
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
          marginTop: "1rem",
          display: "flex",
          gap: "2rem",
          justifyItems: "center",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="disciplina"
          variant="outlined"
          value={searchValue}
          onChange={({ target }) => setSearchValue(target.value)}
        />
        <Button variant="contained" size="small" type="submit">
          Procurar
        </Button>
      </Box>
    </Box>
  );
};

export default FinalResults;
