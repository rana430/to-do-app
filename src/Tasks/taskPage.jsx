import React, { useState } from "react";
import UseTable from "../components/useTable";
import TaskForm from "./taskForm";
import PopUp from "../components/popUp";
import {
  Button,
  ThemeProvider,
  createTheme,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import Header from "../components/header";
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";


//page theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#C08261",
      dark: "#e9a4a4",
      light: "#e6121d",
    },
    secondary:{
      main:"#C08261"
    },
    error:{
      main:"#9A3B3B"
    }
  },
});


export default function TaskPage() {

  //useSates 
  const mini = useMediaQuery('(max-width:700px)');
  const [openPopup, setOpenPopup] = useState(false);
  const [tasks, setTasks] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [title, setTitle] = React.useState();
  const [description, setDescription] = React.useState();
  const [dueDate, setDueDate] = React.useState();
  


  //page styles
  const styles = {
    dialogStyle: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
     
      margin: `${theme.spacing(1)} auto`,
      
    },
    headerStyle:{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width:"80%",
      margin: `${theme.spacing(1)} auto`,
    },
    appBarStyle: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: mini ? "60%" : "50%",
      margin: `${theme.spacing(1)} auto`,
    },


  };

  //filter function
  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase())

  );
  

  //search styles
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
      <Header theme={theme}/>
      <Box
        component="div"
        style={{
          
          width: "100%",
          height: "100vh",
          margin: `${theme.spacing(2)} auto`,
        }}>
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
          <PopUp
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
          title={"Add Task"}
          theme={theme}>
          <TaskForm theme={theme} setTask={setTasks} setTitle={setTitle} setDescription={setDescription} title={title} description={description} dueDate={dueDate} setDueDate={setDueDate}/>
        </PopUp>
        </Box>
        
        
        <Box
          component={"div"}
          style={{ width: "80%", margin: `${theme.spacing(2)} auto` }}>
          <UseTable theme={theme} matches={mini} tasks={filteredTasks} setTasks={setTasks} description={description} setDescription={setDescription} title={title} dueDate={dueDate} setDueDate={setDueDate} setTitle={setTitle}/>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
