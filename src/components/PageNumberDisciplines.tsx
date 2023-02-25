import { Box, Typography, useTheme, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalStarage from "../hooks/useGlobalStarage";

import CustomizedSnackbars from "./CustomizedSnackbars";

type AnalysisProps = React.MouseEventHandler<HTMLButtonElement> | undefined;

const PageNumberDisciplines = () => {
  const navigate = useNavigate();
  const {
    global: { setOpen, open, setErrorMessage, value, setValue },
  } = useGlobalStarage();

  const {
    palette: {
      primary: { dark },
    },
  } = useTheme();

  const startAnalysis: AnalysisProps = () => {
    if (value < 2) {
      setOpen(true);
      setErrorMessage("O numero de disciplinas tem de ser maior ou igual a 2");
    } else {
      setOpen(false);
      navigate("/adding-diciplines");
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
        Estatísticas de notas
      </Typography>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "100" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
            id="outlined-basic"
            label="Seu Nome"
            variant="outlined"
            helperText="Campo não obrigatorio"
          />
          <TextField
            required
            error={open}
            type="number"
            id="outlined-basic"
            label="Numero-de-Disciplinas"
            variant="outlined"
            onChange={({ target }) => setValue(+target.value)}
            defaultValue={value}
            helperText={open && "Valor Inválido"}
          />
        </Box>
        <Button variant="contained" size="large" onClick={startAnalysis}>
          Começar
        </Button>
      </Box>
      <CustomizedSnackbars />
    </Box>
  );
};

export default PageNumberDisciplines;
