import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function DataPicker() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs} style={theme.spacing(1)}>
        <DatePicker label="Due Date" disablePast={true}  />
      </LocalizationProvider>
    </ThemeProvider>
  );
}
