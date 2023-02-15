import styled from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      primary: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
      };
      secondary: {};
    };
  }
}
