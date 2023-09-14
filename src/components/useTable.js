import * as React from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import ControlledCheckbox from "./controls/checkBox";
import { useDispatch } from "react-redux";
import { randomCreatedDate } from "@mui/x-data-grid-generator";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import Task from "./task";
import PopUp from "./popUp";
import TaskForm from "../Tasks/taskForm";
import { getAllTasks } from "../utils/api";

/* const rows = [
  {
    id: 1,
    title: "cook",
    description: "cooking with mom",
    dueDate: randomCreatedDate(),
    creationDate: randomCreatedDate(),
    status: "pending",
    isLate: false,
  },
  {
    id: 2,
    title: "cook",
    description: "cooking with mom",
    dueDate: randomCreatedDate(),
    creationDate: randomCreatedDate(),
    status: "done",
    isLate: false,
  },
  {
    id: 3,
    title: "cook",
    description: "cooking with mom",
    dueDate: randomCreatedDate(),
    creationDate: randomCreatedDate(),
    status: "pending",
    isLate: true,
  },
]; */


export default function UseTable({theme,matches}) {
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
      flexDirection:"column"
    },
  };
  const [tasks, setTasks] = React.useState([]);
  const [openPopup, setOpenPopup] = React.useState(false);
  React.useEffect(() => {
    getAllTasks(setTasks);
  }, []);

  const onDeleteClick = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const onEditClick = () => {
    setOpenPopup(true);
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
              key={row.id}
              title={row.title}
              description={row.description}
              isLate={row.isLate}
              dueDate={formattedDueDate}
              status={row.status}
              onDeleteClick={() => onDeleteClick(row.id)}
              onEditClick={() => onEditClick(row.id)}
              theme={theme}
              matches={matches}
            />
          );
        })}
        <PopUp
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
          title={"Edit Task"}>
          <TaskForm />
        </PopUp>
      </Box>
    </ThemeProvider>
  );
}
