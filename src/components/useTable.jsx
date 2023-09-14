import * as React from "react";
import { Box, Button, ThemeProvider, Typography } from "@mui/material";
import Task from "./task";
import PopUp from "./popUp";
import TaskForm from "../Tasks/taskForm";
import { getAllTasks, deleteTask } from "../utils/api";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";


export default function UseTable({ theme, matches, tasks, setTasks }) {
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
    appBarStyle: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: matches ? "60%" : "50%",
      margin: `${theme.spacing(1)} auto`,
    },
  };

  const [openPopup, setOpenPopup] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [taskId, setTaskId] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState("");
  React.useEffect(() => {
    getAllTasks(setTasks);
  }, []);

  const onDeleteClick = (taskId) => {
    deleteTask({ taskId, setTasks });
  };

  const onEditClick = (taskId) => {
    setEdit(true);
    setOpenPopup(true);
    setTaskId(taskId);
    console.log(taskId);
  };

  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase())||(task.title!=='')||(task.description!=='')
  );

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),

      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
  return (
    <ThemeProvider theme={theme}>
      <Box component={"div"} style={styles.taskBody}>
        <Box component={"div"} style={styles.appBarStyle}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Search>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            color="primary"
            onClick={() => {
              setOpenPopup(true);
            }}>
            Add
          </Button>
        </Box>

        {filteredTasks.map((row) => {
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