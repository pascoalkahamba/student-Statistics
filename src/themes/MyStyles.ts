import styled, { createGlobalStyle, css } from "styled-components";
import { Button } from "@mui/material";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

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
  background: #828a95;
`;

export const Section = styled.section`
  background-color: initial;
`;

export const ButtonTwo = styled(Button)`
  background-color: yellow;
`;
