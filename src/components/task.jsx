// Task.js
import React from "react";
import { Box, Typography, ThemeProvider } from "@mui/material";
import ControlledCheckbox from "./controls/checkBox";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { updateStatus } from "../utils/api";

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
  matches,
  setTask,
  setStatus,
}) {

  // handler functions
  const handleDeleteClick = () => {
    onDeleteClick();
  };
  const handleEditClick = () => {
    onEditClick();
  };
  const handleOnClick = (e) => {
    setChecked(e.target.checked);
    if (e.target.checked) {
      status = "done";
    } else {
      status = "pending";
    }
    updateStatus(setTask, status, id);
  };

  //page styles
  const styles = {
    taskBody: {
      backgroundColor: isLate
        ? theme.palette.error.main
        : theme.palette.primary.main,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      color: "#FFF",
      marginBottom: `${theme.spacing(2)}`,
      border: "1px solid transparent",
      borderRadius: "14px",
      padding: "1rem",
      width: matches ? "95%" : "60%",
    },
    lateTask: {
      backgroundColor: theme.palette.error.main,
    },
    fontStyles: {
      color: "#FFF",
      fontSize: "18px",
    },
  };
  

  //useState
  const [checked, setChecked] = React.useState(status === "done");
  
  const newdueDate = new Date(dueDate);
          const day = newdueDate.getDate();
          const month = newdueDate.getMonth() + 1;
          const year = newdueDate.getFullYear();
          const formattedDueDate = `${day}/${month}/${year}`;
  return (
    <ThemeProvider theme={theme}>
      <Box component={"div"} sx={styles.taskBody}>
        <ControlledCheckbox
          style={{ color: "#fff" }}
          onChange={(e) => handleOnClick(e)}
          checked={checked}
        />
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
          {formattedDueDate}
        </Typography>
        <EditIcon onClick={handleEditClick} />
        <DeleteIcon onClick={handleDeleteClick} />
      </Box>
    </ThemeProvider>
  );
}
