import { Box, Typography, useTheme, TextField, Button } from "@mui/material";

const PageNumberDisciplines = () => {
  const {
    palette: {
      primary: { dark, main, light },
    },
  } = useTheme();

  return (
    <Box sx={{ width: "100%", marginTop: "50px", padding: ".5rem" }}>
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
            gap: "5rem",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Seu Nome"
            variant="outlined"
            helperText="Campo não obrigatorio"
          />
          <TextField
            type="number"
            id="outlined-basic"
            label="Numero-Disciplinas"
            variant="outlined"
          />
        </Box>
        <Button variant="contained" size="large">
          Começar
        </Button>
      </Box>
    </Box>
  );
};

export default PageNumberDisciplines;
