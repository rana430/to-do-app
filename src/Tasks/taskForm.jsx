import React, { useState } from "react";
import ButtonControl from "../components/controls/buttonControl";
import DataPicker from "../components/controls/dataPicker";
import Input from "../components/controls/input";
import axios from "axios";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { addTask } from "../utils/api";

export default function TaskForm({ styles, theme }) {
  const [task, setTask] = useState();
  const [title, setTitle] = useState("");
  const [describtion, setDescribtion] = useState("");
  const [dueDate, setDueDate] = React.useState([]);
  const handleSubmit = () => {
    axios
      .post("http://localhost:5000", { task })
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
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
          onChange={(e) => setTask(e.target.value)}
          value={title}
        />
        <Input name={"Describtion"} value={describtion} />
        <DataPicker onChange={(date) => setDueDate(date)} />

        <ButtonControl
          text={"Submit"}
          type="submit"
          onClick={() =>
            addTask(
              setTask,
              setTitle,
              title,
              describtion,
              setDescribtion,
              dueDate
            )
          }
          theme={theme}
        />
      </Box>
    </ThemeProvider>
  );
}
