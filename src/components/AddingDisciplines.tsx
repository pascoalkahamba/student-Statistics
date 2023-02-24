import { useState } from "react";
import { Box, Typography, useTheme, TextField, Button } from "@mui/material";
import CustomizedSnackbars from "./CustomizedSnackbars";
import useGlobalStarage from "../hooks/useGlobalStarage";

type ChangeProps =
  | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  | undefined;

type addDisciplinesProps =
  | React.MouseEventHandler<HTMLButtonElement>
  | undefined;

interface ValidateProps {
  name: string;
  number: number | string;
}

const AddingDisciplines = () => {
  const [input, setInput] = useState({ name: "", number: 0 });
  const [nameError, setNameError] = useState(false);
  const [numberError, setNumberError] = useState(false);

  const {
    global: { setErrorMessage, setOpen, open },
  } = useGlobalStarage();
  const {
    palette: {
      primary: { dark },
    },
  } = useTheme();

  const handleChange: ChangeProps = ({ target }) => {
    setInput({ ...input, [target.id]: +target.value });
  };

  function isNotEmpty({ name, number }: ValidateProps) {
    if (name === "") {
      setNameError(true);
    }

    if (number < 0 || number > 20 || number === "") {
      setNumberError(true);
    }

    if (name === "" || number < 0 || number > 20) {
      setErrorMessage(
        "O campo NOME DA DISCIPLINA não pode estar vazio, e a nota tem estar entre 0 e 20"
      );

      return true;
    }
  }

  const addDisciplines: addDisciplinesProps = () => {
    if (isNotEmpty(input)) setOpen(true);
    else {
      alert("Ok");
    }
  };
  console.log(nameError);
  console.log(numberError);
  console.log(open);
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
        Disciplina
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
            error={nameError}
            onChange={handleChange}
            defaultValue={input.name}
            id="name"
            label="Nome da disciplina"
            variant="outlined"
            helperText={nameError && "Valor Inválido"}
          />
          <TextField
            error={numberError}
            onChange={handleChange}
            defaultValue={+input.number}
            type="number"
            id="number"
            label="Nota da disciplina"
            variant="outlined"
            helperText={numberError && "Valor Inválido"}
          />
        </Box>
        <Button variant="contained" size="large" onClick={addDisciplines}>
          Adicionar
        </Button>
      </Box>
      <CustomizedSnackbars
        setNumberError={setNumberError}
        setNameError={setNameError}
      />
    </Box>
  );
};

export default AddingDisciplines;
