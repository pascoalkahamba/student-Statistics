import styled from "styled-components";

export type ThemeMode = "light" | "dark";

declare module "styled-components" {
  export interface DefaultTheme {
    title: ThemeMode;

    colors: {
      backgroundColor: string;
      text: string;
      primary: string;
      second: string;
    };
  }
}
