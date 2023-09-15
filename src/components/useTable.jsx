import * as React from "react";
import { Box, ThemeProvider } from "@mui/material";
import Task from "./task";
import PopUp from "./popUp";
import TaskForm from "../Tasks/taskForm";
import { getAllTasks, deleteTask } from "../utils/api";



export default function UseTable({ theme, matches, tasks, setTasks,setTitle,setDescription,setDueDate,description,title,dueDate}) {
  //page Styles
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

    headerStyle: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "40%",
      margin: `${theme.spacing(1)} auto`,
    },
  };

  //useState and useEfeect
  const [openPopup, setOpenPopup] = React.useState(false);
  const [taskId, setTaskId] = React.useState();
  const [edit, setEdit] = React.useState(false);
  const [status, setStatus] = React.useState();
  React.useEffect(() => {
    getAllTasks(setTasks);
  }, []);

  //handler functions
  const onDeleteClick = (taskId) => {
    deleteTask({ taskId, setTasks });
  };
  const onEditClick = (taskId) => {
    setEdit(true);
    setOpenPopup(true);
    setTaskId(taskId);
  };
  
  
  
  return (
    <ThemeProvider theme={theme}>
      <Box component={"div"} style={styles.taskBody}>
        

        {tasks.map((row) => {
          
          return (
            <Task
              key={row._id}
              id={row._id}
              title={row.title}
              description={row.description}
              isLate={row.isLate}
              dueDate={row.dueDate}
              creationDate={row.creationDate}
              status={row.status}
              onDeleteClick={() => onDeleteClick(row._id)}
              onEditClick={() => onEditClick(row._id)}
              theme={theme}
              matches={matches}
              setTask={setTasks}
              setStatus={setStatus}
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
            setDescription={setDescription}
            setTitle={setTitle}
            setDueDate={setDueDate}
            title={title}
            description={description}
            dueDate={dueDate}
          />
        </PopUp>
      </Box>
    </ThemeProvider>
  );
}
