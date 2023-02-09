import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
margin: 0;
padding: 0;
box-sizing: border-box;

body{
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text} ;
    background-color: ${({ theme }) => theme.colors.second};
}
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.second};
`;
