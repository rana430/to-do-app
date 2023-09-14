import React from "react";
import { Button, useTheme, ThemeProvider } from "@mui/material";

export default function ActionButton(props) {
  const theme = useTheme();
  const classes = {
    root: {
      minWidth: 0,
      margin: theme.spacing(0.5),
    },
    secondary: {
      backgroundColor: theme.palette.secondary.light,
      "& .MuiButton-label": {
        color: theme.palette.secondary.main,
      },
    },
    primary: {
      backgroundColor: theme.palette.primary.light,
      "& .MuiButton-label": {
        color: theme.palette.primary.main,
      },
    },
  };

  const { color, children, onClick } = props;

  return (
    <ThemeProvider theme={theme}>
      <Button className={`${classes.root} ${classes[color]}`} onClick={onClick}>
        {children}
      </Button>
    </ThemeProvider>
  );
}
