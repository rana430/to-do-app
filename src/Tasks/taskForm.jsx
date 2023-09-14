import React, { useState } from "react";
import ButtonControl from "../components/controls/buttonControl";
import DataPicker from "../components/controls/dataPicker";
import Input from "../components/controls/input";
import axios from "axios";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material";
import { addTask, updateTask } from "../utils/api";


export default function TaskForm({ theme, edit, setEdit, taskId,setTasks }) {
  
  const [title, setTitle] = useState("");
  const [describtion, setDescribtion] = useState("");
  const [dueDate, setDueDate] = React.useState(new Date());
  
  const styles = {
    dialogStyle: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      margin: "auto",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <Box
        component={"div"}
        sx={{
          flexGrow: 1,
        }}
        style={styles.dialogStyle}
        maxWidth={"md"}>
        <Input
          name={"Title"}
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type={"text"}
        />
        <Input name={"Describtion"} type={"text"}  onChange={(e)=>setDescribtion(e.target.value)} value={describtion} />
        <DataPicker name="date" setDueDate={setDueDate} dueDate={dueDate} />
        <ButtonControl
          text={"Submit"}
          type="submit"
          onClick={
            !edit
              ? () =>
                  addTask(
                    setTasks,
                    setTitle,
                    title,
                    describtion,
                    setDescribtion,
                    dueDate,
                    setDueDate
                  )
              : updateTask(
                  taskId,
                  setTasks,
                  setTitle,
                  title,
                  describtion,
                  setDescribtion,
                  dueDate,
                  setDueDate,
                  setEdit
                )
          }
          theme={theme}
        />
      </Box>
    </ThemeProvider>
  );
}
