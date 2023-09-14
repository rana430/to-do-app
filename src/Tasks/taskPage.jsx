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

import Header from "../components/header";
import useMediaQuery from '@mui/material/useMediaQuery';




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

  const mini = useMediaQuery('(max-width:700px)');
  const [openPopup, setOpenPopup] = useState(false);
  const [tasks, setTasks] = React.useState([]);
  
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


  };
  


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
        
        <PopUp
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
          title={"Add Task"}
          theme={theme}>
          <TaskForm theme={theme} setTask={setTasks}/>
        </PopUp>
        
        <Box
          component={"div"}
          style={{ width: "80%", margin: `${theme.spacing(2)} auto` }}>
          <UseTable theme={theme} matches={mini} tasks={tasks} setTasks={setTasks}/>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
