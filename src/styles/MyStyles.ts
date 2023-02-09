import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
margin: 0;
padding: 0;
box-sizing: border-box;

body{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.5rem;
    color: #000;
    background-color: #ccc;
}
`;
