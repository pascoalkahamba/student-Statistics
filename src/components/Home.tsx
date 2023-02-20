import {
  Box,
  Typography,
  useTheme,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
} from "@mui/material";
import { useContext, useEffect } from "react";
import { FatherButton, Header, Span } from "../themes/MyStyles";
import Head from "./Head";
import { ThemeContext } from "styled-components";
import { MdFactCheck } from "react-icons/md";

const Home = () => {
  const listElement = [
    "Mostrar o menu",
    "ler e retornar a opção (função)",
    " Ler os valores das notas, disciplinas e retornar a quantidade (procedimento)",
    "Identificar a posição do menor (função)",
    "Identificar a posição do maior (função)",
    "Calcular a média (função)",
    " Mostrar o conteúdo atual dos vetores de notas e disciplinas",
    "Dada uma disciplina, pesquisar a nota correspondente",
    "Dada uma nota, pesquisar se ela existe no vetor de notas e mostrar a respectiva disciplina",
  ];
  const {
    palette: {
      primary: { light, dark },
    },
  } = useTheme();

  const theme = useTheme();
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
        <Span>5.5.5</Span>
        Escrever um programa para fazer estatísticas de notas de um aluno. O
        programa oferece opções de: entrar com nomes de disciplinas e
        respectivas notas, achar a maior nota, achar a menor nota e calcular a
        média das notas. Quando mostra algum resultado, o programa espera ser
        teclado algo para oferecer novamente o menu. Sugestões para
        modularização: Mostrar o menu ler e retornar a opção (função) Ler os
        valores das notas, disciplinas e retornar a quantidade (procedimento)
        Identificar a posição do menor (função) Identificar a posição do maior
        (função) Calcular a média (função)
      </Typography>
      <List
        sx={() => ({
          backgroundColor: theme.palette.background.default,
        })}
      >
        {listElement.map((element, index) => {
          if (index <= 5)
            return (
              <Typography variant="body2" gutterBottom>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemIcon>
                    <MdFactCheck />
                  </ListItemIcon>
                  <ListItemText primary={element} />
                </ListItem>
              </Typography>
            );
        })}
      </List>

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
      <Typography variant="body1" gutterBottom>
        <Span> 5.5.7</Span> No mesmo programa acima, incluir opções para:
      </Typography>
      <List
        sx={() => ({
          backgroundColor: theme.palette.background.default,
        })}
      >
        {listElement.map((element, index) => {
          if (index >= 6)
            return (
              <Typography variant="body2" gutterBottom>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemIcon>
                    <MdFactCheck className="icon" />
                  </ListItemIcon>
                  <ListItemText primary={element} />
                </ListItem>
              </Typography>
            );
        })}
      </List>
      <FatherButton>
        {" "}
        <Button variant="contained" size="large">
          Começar
        </Button>
      </FatherButton>
    </Box>
  );
};

export default Home;
