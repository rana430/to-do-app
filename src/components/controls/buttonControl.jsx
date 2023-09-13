import React from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from '@mui/material/styles';


// Create a custom theme with color palettes
const theme = createTheme({
  palette: {
    primary: {
      main: "#e6121d",
      dark: "#e9a4a4",
      light: "#e6121d",
    }
  },
  
});

export default function ButtonControl({ text, size, onClick, variant }) {
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant={variant || "contained"}
        size={size || "large"}
        color= "primary"
        onClick={onClick}
        style={{margin:theme.spacing(1)}}
      >
        {text}
      </Button>
    </ThemeProvider >
  );
}
