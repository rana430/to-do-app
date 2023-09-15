import React, { useState } from "react";
import ButtonControl from "../components/controls/buttonControl";
import DataPicker from "../components/controls/dataPicker";
import Input from "../components/controls/input";
import axios from "axios";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material";
import { addTask, updateTask } from "../utils/api";

export default function TaskForm({
  theme,
  edit,
  setEdit,
  taskId,
  setTask,
  setDueDate,
  setTitle,
  setDescription,
  dueDate,
  title,
  description,
  status,
}) {
  /* const [tasks,setTasks]=useState(); */

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
        <Input
          name={"Describtion"}
          type={"text"}
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <DataPicker name="date" setDueDate={setDueDate} dueDate={dueDate} />
        <ButtonControl
          text={"Submit"}
          type="submit"
          onClick={
            !edit
              ? () =>
                  addTask(
                    setTask,
                    setTitle,
                    title,
                    description,
                    setDescription,
                    dueDate,
                    setDueDate
                  )
              : updateTask(
                  taskId,
                  setTask,
                  title,
                  description,
                  dueDate,
                  setEdit
                )
          }
          theme={theme}
        />
      </Box>
    </ThemeProvider>
  );
}
