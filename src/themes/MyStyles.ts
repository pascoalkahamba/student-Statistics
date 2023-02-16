import styled, { createGlobalStyle } from "styled-components";
import { Button } from "@mui/material";

export const GlobalStyles = createGlobalStyle`
 
body{
 font-family: 'Poppins', sans-serif;
 font-size: 1.5rem;
 
}
`;

export const Header = styled.header`
  position: fixed;
  width: 100%;
  padding: 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Section = styled.section`
  background-color: initial;
`;

export const ButtonTwo = styled(Button)`
  background-color: yellow;
`;
