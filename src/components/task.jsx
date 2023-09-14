// Task.js
import React from "react";
import { Box, Typography, ThemeProvider} from "@mui/material";
import ControlledCheckbox from "./controls/checkBox";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";



export default function Task({
  id,
  title,
  description,
  status,
  isLate,
  dueDate,
  onDeleteClick,
  onEditClick,
  theme,
  matches
}) {
  const handleDeleteClick = () => {
    onDeleteClick();
  };
  const handleEditClick=()=>{
    onEditClick();
  }
  const styles = {
    taskBody: {
      backgroundColor:isLate?theme.palette.error.main: theme.palette.primary.main,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      color: "#FFF",
      marginBottom: `${theme.spacing(2)}`,
      border: "1px solid transparent",
      borderRadius: "14px",
      padding: "1rem",
      width:matches?"95%":"60%"
    },
    lateTask:{
        backgroundColor: theme.palette.error.main,
    },
    fontStyles: {
      color: "#FFF",
      fontSize: "18px",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <Box component={"div"} sx={styles.taskBody}>
        <ControlledCheckbox style={{ color: "#fff" }} />
        <Typography
          variant="p"
          component="div"
          style={styles.fontStyles}
          sx={{
            flexGrow: 1,
          }}>
          {title}
        </Typography>
        <Typography
          variant="p"
          component="div"
          sx={{
            flexGrow: 1,
          }}
          style={styles.fontStyles}>
          {description}
        </Typography>
        <Typography
          variant="p"
          component="div"
          sx={{
            flexGrow: 1,
          }}
          style={styles.fontStyles}>
          {dueDate}
        </Typography>
        <EditIcon onClick={handleEditClick} />
        <DeleteIcon onClick={handleDeleteClick} />
      </Box>
    </ThemeProvider>
  );
}
