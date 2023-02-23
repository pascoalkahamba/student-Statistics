import { Box, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Box sx={{ width: "100%", marginTop: "80px", padding: ".5rem" }}>
      <Typography variant="h6" gutterBottom>
        Erro: 404 - Página não Encontrada
      </Typography>
    </Box>
  );
};

export default NotFound;
