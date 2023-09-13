import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Input({name}) {
  
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off">
      <TextField
        id="outlined-multiline-flexible"
        label={name}
        multiline
        maxRows={4}
      />
    </Box>
  );
}
