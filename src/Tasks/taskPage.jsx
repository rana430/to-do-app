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
import AddIcon from "@mui/icons-material/Add";
import SearchBar from "../components/searchBar";
import TaskHeader from "../components/taskHeader";
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
  const [task,setTask]=useState([]);
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
    appBarStyle:{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: mini?"60%": "50%",
      margin: `${theme.spacing(1)} auto`,
    }

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
        <Box component={"div"} style={styles.appBarStyle}>
          <SearchBar />
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
        <PopUp
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
          title={"Add Task"}
          theme={theme}>
          <TaskForm theme={theme} styles={styles}/>
        </PopUp>
        
        <Box
          component={"div"}
          style={{ width: "80%", margin: `${theme.spacing(2)} auto` }}>
          <UseTable theme={theme} matches={mini}/>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
