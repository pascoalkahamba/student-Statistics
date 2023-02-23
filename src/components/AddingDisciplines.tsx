import { Box, Typography, useTheme, TextField, Button } from "@mui/material";
import CustomizedSnackbars from "./CustomizedSnackbars";

const AddingDisciplines = () => {
  const {
    palette: {
      primary: { dark },
    },
  } = useTheme();

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
            gap: "5rem",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Nome da disciplina"
            variant="outlined"
          />
          <TextField
            type="number"
            id="outlined-basic"
            label="Nota da disciplina"
            variant="outlined"
          />
        </Box>
        <Button variant="contained" size="large">
          Adicionar
        </Button>
      </Box>
      <CustomizedSnackbars />
    </Box>
  );
};

export default AddingDisciplines;
