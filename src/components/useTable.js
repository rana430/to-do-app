import * as React from "react";

import { Box, ThemeProvider } from "@mui/material";
import Task from "./task";
import PopUp from "./popUp";
import TaskForm from "../Tasks/taskForm";
import { getAllTasks ,deleteTask} from "../utils/api";

export default function UseTable({ theme, matches ,tasks,setTasks}) {
  const styles = {
    taskBody: {
      border: "1px solid transparent",
      borderRadius: "14px",
      width: "100%",
      margin: `${theme.spacing(2)} auto`,
      marginTop: "5%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
  };
  
  const [openPopup, setOpenPopup] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [taskId, setTaskId] = React.useState([]);
  React.useEffect(() => {
    getAllTasks(setTasks);
  }, []);
 
  const onDeleteClick = (taskId) => {
    deleteTask({taskId,setTasks});
  };

  const onEditClick = (taskId) => {
    setEdit(true);
    setOpenPopup(true);
    setTaskId(taskId);
    console.log(taskId);
  };
  return (
    <ThemeProvider theme={theme}>
      <Box component={"div"} style={styles.taskBody}>
        {tasks.map((row) => {
          const dueDate = new Date(row.dueDate);

          // Get day, month, and year components
          const day = dueDate.getDate();
          const month = dueDate.getMonth() + 1; // Month is zero-based, so add 1
          const year = dueDate.getFullYear();

          // Format the date as "dd/mm/yyyy"
          const formattedDueDate = `${day}/${month}/${year}`;
          return (
            <Task
              key={row._id}
              id={row._id}
              title={row.title}
              description={row.description}
              isLate={row.isLate}
              dueDate={formattedDueDate}
              status={row.status}
              onDeleteClick={() => onDeleteClick(row._id)}
              onEditClick={() => onEditClick(row._id)}
              theme={theme}
              matches={matches}
            />
          );
        })}
        <PopUp
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
          title={"Edit Task"}>
          <TaskForm
            theme={theme}
            edit={edit}
            setEdit={setEdit}
            taskId={taskId}
            setTask={setTasks}
          />
        </PopUp>
      </Box>
    </ThemeProvider>
  );
}
