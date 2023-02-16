import { Theme } from "@mui/material";
import styled from "styled-components";
import { ThemeMode } from "./components/GlobalContext";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    palette: {
      mode: ThemeMode;
      primary: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
      };
      secondary: {};
      background: {
        default: string;
        paper: string;
      };
    };
  }
}
