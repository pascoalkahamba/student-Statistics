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
import { useState, useEffect } from "react";
import { StudentsDataProps } from "./GlobalContext";

type SearchDisciplineOrNoteProps =
  | React.FormEventHandler<HTMLFormElement>
  | undefined;

const FinalResults = () => {
  const [kindSearch, setKindSearch] = useState(" ");
  const [searchValue, setSearchValue] = useState<string | number>("");
  const [foundResults, setFoundResults] = useState<StudentsDataProps[]>([]);
  const {
    global: { studentData, setOpen, open, setFeedBack },
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

  useEffect(() => {
    if (
      (foundResults.length === 0 && kindSearch === "discipline") ||
      (foundResults.length === 0 && kindSearch === "note")
    )
      theDisciplineOrNoteExists();
  }, [foundResults]);

  function foundDisciplineOrNote() {
    if (kindSearch === "discipline") {
      const foundDiscipline = studentData.filter(
        ({ discipline }) => discipline === searchValue
      );
      console.log(foundDiscipline);
      setFoundResults(foundDiscipline);
    } else {
      const foundNote = studentData.filter(
        ({ note }) => +note === +searchValue
      );
      console.log(foundNote);
      setFoundResults(foundNote);
    }
  }

  function theDisciplineOrNoteExists() {
    setOpen(true);
    setFeedBack({
      kind: "error",
      message: `Está ${
        kindSearch === "discipline" ? "Disciplina" : "Nota"
      } não existe na sua pauta`,
    });
  }

  const searchDisciplineOrNote: SearchDisciplineOrNoteProps = (event) => {
    event.preventDefault();
    console.log(searchValue);
    if (searchValue === "") {
      setOpen(true);
      setFeedBack({
        kind: "error",
        message: "O campo de pesquisa não pode estar vazio",
      });
    } else {
      foundDisciplineOrNote();
    }
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
          onChange={({ target }) => {
            setKindSearch(target.value);
            setSearchValue("");
          }}
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="discipline"
            control={<Radio />}
            label="Disciplina"
          />
          <FormControlLabel value="note" control={<Radio />} label="Nota" />
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
          error={
            (open && kindSearch === "discipline") ||
            (open && kindSearch === "note")
          }
          id="outlined-basic"
          label={kindSearch === "discipline" ? "Disciplina" : "Nota"}
          variant="outlined"
          value={searchValue}
          onChange={({ target }) => setSearchValue(target.value)}
        />
        <Button variant="contained" size="small" type="submit">
          Procurar
        </Button>
      </Box>
      {foundResults.map((disc) => (
        <div key={disc.discipline}>
          <div>{disc.discipline}</div>
          <span>{disc.note}</span>
        </div>
      ))}
    </Box>
  );
};

export default FinalResults;
