import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Input({ name, type, value, onChange }) {
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
        type={type}
        label={name}
        value={value}
        onChange={onChange}
        multiline
        maxRows={4}
      />
    </Box>
  );
}
