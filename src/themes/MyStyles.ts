import styled, { createGlobalStyle } from "styled-components";
import { styled as styles } from "@mui/material";
import Paper from "@mui/material/Paper";

export const GlobalStyles = createGlobalStyle`

 .title{
  background-color: blue;
 }
 
 
`;

export const Header = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  padding: 0.2rem;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Section = styled.section`
  display: block;
  margin: 0 auto;
  width: 95%;
`;

export const Div = styles("div")(({ theme }) => ({
  background: theme.palette.background.paper,
}));

export const Span = styled.span`
  color: red;
  margin-right: 5px;
`;

export const FatherButton = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
`;

export const Item = styles(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#ddd",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  color: theme.palette.text.secondary,
}));

export const Table = styled.table`
  margin-top: 2rem;
  border: 2px solid #ccc;
  border-collapse: collapse;
  text-align: center;

  td {
    padding: 0.4rem;
  }
`;

export const Thead = styled.thead`
  th {
    padding: 0.4rem;
  }
`;
