import { useState } from "react";
import { Box, Typography, useTheme, TextField, Button } from "@mui/material";
import CustomizedSnackbars from "./CustomizedSnackbars";
import useGlobalStarage from "../hooks/useGlobalStarage";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();
  const handleChange: ChangeProps = ({ target }) => {
    setInput({ ...input, [target.id]: target.value });
  };

  function isNotEmpty({ name, number }: ValidateProps) {
    if (name === "") {
      setNameError(true);
    }

    if (number < 0 || number > 20 || number === "") {
      setNumberError(true);
    }

    if (name === "" || number < 0 || number > 20 || number === "") {
      setErrorMessage(
        "O campo NOME DA DISCIPLINA não pode estar vazio, e a nota tem estar entre 0 e 20"
      );

      return true;
    }
  }

  const addDisciplines: addDisciplinesProps = () => {
    if (isNotEmpty(input)) setOpen(true);
    else {
      navigate("/final-results");
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
            required
            error={nameError}
            onChange={handleChange}
            defaultValue={input.name}
            id="name"
            label="Nome da disciplina"
            variant="outlined"
            helperText={nameError && "Valor Inválido"}
          />
          <TextField
            required
            error={numberError}
            onChange={handleChange}
            defaultValue={input.number}
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
