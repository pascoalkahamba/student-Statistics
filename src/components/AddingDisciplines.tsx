import { useState, useEffect, useRef } from "react";
import { Box, Typography, useTheme, TextField, Button } from "@mui/material";
import useGlobalStarage from "../hooks/useGlobalStarage";
import { Navigate } from "react-router-dom";

type ChangeProps =
  | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  | undefined;

type addDisciplinesProps =
  | React.MouseEventHandler<HTMLButtonElement>
  | undefined;

const funSubjectName = (subjectName: string) => {
  if (subjectName === "") {
    return "O campo nome da disciplina não pode estar vazio.";
  }
  if (!Number.isNaN(+subjectName)) {
    return "O nome da disciplina não pode ser um número";
  }
  return false;
};

const funSubjectPoint = (subjectPoint: number | string) => {
  return (
    (subjectPoint < 0 || subjectPoint > 20 || subjectPoint === "") &&
    "A nota da disciplina tem que estar entre 0 e 20"
  );
};

const AddingDisciplines = () => {
  const [input, setInput] = useState({ name: "", number: 0 });
  const inputName = useRef<HTMLInputElement>(null);

  const nameError = funSubjectName(input.name);
  const numberError = funSubjectPoint(input.number);

  const {
    global: {
      setFeedBack,
      setOpen,
      numberDisciplines,
      open,
      setStudentData,
      studentData,
    },
  } = useGlobalStarage();
  const {
    palette: {
      primary: { dark },
    },
  } = useTheme();

  const handleChange: ChangeProps = ({ target }) => {
    setInput({ ...input, [target.id]: target.value });
  };

  function hasError() {
    if (nameError) {
      setFeedBack({
        kind: "error",
        message: nameError,
      });
      return true;
    } else if (numberError) {
      setFeedBack({
        kind: "error",
        message: numberError,
      });
      return true;
    }
    return false;
  }
  useEffect(() => {
    if (studentData.length === numberDisciplines && numberDisciplines !== 0) {
      setOpen(true);
      setFeedBack({
        kind: "success",
        message: "Ultimo registo realizado com sucesso",
      });
    }
  }, [studentData]);

  if (studentData.length === numberDisciplines && numberDisciplines !== 0) {
    return <Navigate to="/final-results" />;
  }

  function isThereDisciplineExists(discipline: boolean) {
    if (discipline) {
      setOpen(true);
      setFeedBack({
        kind: "warning",
        message: `A disciplina ${input.name} já foi adicionada`,
      });
    } else {
      setStudentData([
        ...studentData,
        {
          discipline: input.name,
          note: input.number,
        },
      ]);
      setInput({ name: "", number: 0 });
      inputName.current?.focus();
    }
  }

  const addDisciplines: addDisciplinesProps = () => {
    if (hasError()) setOpen(true);
    else {
      if (studentData.length < numberDisciplines) {
        const alreadyExists = studentData.some(
          ({ discipline }) => discipline === input.name
        );

        isThereDisciplineExists(alreadyExists);
      }
    }
  };

  return (
    <Box sx={{ width: "100%", marginTop: "80px", padding: ".5rem" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={() => ({
          backgroundColor: dark,
          textAlign: "center",
          borderRadius: ".3rem",
        })}
      >
        Disciplina {studentData.length + 1}
      </Typography>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "100" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          flexDirection: "column",
        }}
        noValidate
        autoComplete="off"
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            gap: "4rem",
          }}
        >
          <TextField
            required
            error={
              (numberError === false && nameError && open) ||
              (numberError && nameError && open)
            }
            inputRef={inputName}
            onChange={handleChange}
            value={input.name}
            id="name"
            label="Nome da disciplina"
            variant="outlined"
          />
          <TextField
            required
            error={
              (nameError === false && numberError && open) ||
              (nameError && numberError && open)
            }
            onChange={handleChange}
            value={input.number}
            type="number"
            id="number"
            label="Nota da disciplina"
            variant="outlined"
          />
        </Box>
        <Button variant="contained" size="large" onClick={addDisciplines}>
          Adicionar
        </Button>
      </Box>
    </Box>
  );
};

export default AddingDisciplines;
