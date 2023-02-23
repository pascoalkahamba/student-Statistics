import { useState } from "react";
import { Box, Typography, useTheme, TextField, Button } from "@mui/material";
import CustomizedSnackbars from "./CustomizedSnackbars";

type ChangeProps =
  | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  | undefined;

type addDisciplinesProps =
  | React.MouseEventHandler<HTMLButtonElement>
  | undefined;

interface ValidateProps {
  name: string;
  number: number;
}

const AddingDisciplines = () => {
  const [input, setInput] = useState({ name: "", number: 0 });
  const {
    palette: {
      primary: { dark },
    },
  } = useTheme();

  const handleChange: ChangeProps = ({ target }) => {
    setInput({ ...input, [target.id]: target.value });
  };

  function isNotEmpty({ name, number }: ValidateProps) {}

  const addDisciplines: addDisciplinesProps = () => {};

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
            onChange={handleChange}
            defaultValue={input.name}
            id="name"
            label="Nome da disciplina"
            variant="outlined"
          />
          <TextField
            onChange={handleChange}
            defaultValue={input.number}
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
      <CustomizedSnackbars />
    </Box>
  );
};

export default AddingDisciplines;
