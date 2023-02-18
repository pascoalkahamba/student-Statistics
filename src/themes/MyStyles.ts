import styled, { createGlobalStyle } from "styled-components";
import { styled as styles } from "@mui/material";

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
