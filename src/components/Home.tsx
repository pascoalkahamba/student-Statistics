import { Container, Box, Typography, useTheme } from "@mui/material";
import { useContext, useEffect } from "react";
import { Div, Header } from "../themes/MyStyles";
import Head from "./Head";
import { ThemeContext } from "styled-components";

const Home = () => {
  const {
    palette: {
      primary: { light, dark },
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
      <Typography variant="body1" gutterBottom>
        5.5.5 Escrever um programa para fazer estatísticas de notas de um aluno.
        O programa oferece opções de: entrar com nomes de disciplinas e
        respectivas notas, achar a maior nota, achar a menor nota e calcular a
        média das notas. Quando mostra algum resultado, o programa espera ser
        teclado algo para oferecer novamente o menu. Sugestões para
        modularização: Mostrar o menu ler e retornar a opção (função) Ler os
        valores das notas, disciplinas e retornar a quantidade (procedimento)
        Identificar a posição do menor (função) Identificar a posição do maior
        (função) Calcular a média (função)
      </Typography>

      <Typography
        variant="h4"
        gutterBottom
        sx={() => ({
          backgroundColor: dark,
          textAlign: "center",
          borderRadius: ".3rem",
        })}
      >
        Estatísticas de notas 2
      </Typography>
      <Div>Ola</Div>
    </Box>
  );
};

export default Home;
