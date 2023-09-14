import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import { addTask } from "../../utils/api";

export default function DataPicker({setDueDate,dueDate}) {
  const theme = createTheme();
  const datePickerStyles = {
    width: "225px",
  };

  return (
    <ThemeProvider theme={theme}>
      <Box component={"div"} style={datePickerStyles}>
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          style={theme.spacing(1)}>
          <DatePicker
            label="Due Date"
            disablePast={true}
            onChange={(newValue) => setDueDate(newValue)}
          />
        </LocalizationProvider>
      </Box>
    </ThemeProvider>
  );
}
