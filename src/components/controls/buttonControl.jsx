import React from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";

export default function ButtonControl({ text, size, onClick, variant,theme }) {
  return (
    <ThemeProvider theme={theme}>
      <Box component={"div"} >
        <Button
          variant={variant || "contained"}
          size={size || "large"}
          color="primary"
          onClick={onClick}
          style={{ margin: `${theme.spacing(2)}` }}>
          {text}
        </Button>
      </Box>
    </ThemeProvider>
  );
}
