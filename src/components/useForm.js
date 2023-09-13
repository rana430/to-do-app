import React from "react";
import ButtonControl from "./controls/buttonControl";
import DataPicker from "./controls/dataPicker";
import Input from "./controls/input";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
export default function UseForm() {
    const handleSubmit=()=>{
        console.log("submitted");
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <Input name={"Title"} />
          <Input name={"Describtion"} />
          <DataPicker />
        </Grid>

        <Grid item xs={8}> 
          <ButtonControl text={"Submit"} type="submit" onClick={handleSubmit} />
        </Grid>
      </Grid>
    </Box>
  );
}
