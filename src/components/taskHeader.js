import { ThemeProvider } from "@emotion/react";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function TaskHeader({ theme }) {
  const styles = {
    headerStyle: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "40%",
      margin: `${theme.spacing(1)} auto`,
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <Box component={"div"} sx={styles.headerStyle}>
        <Typography component={"h6"}>Name</Typography>
        <Typography component={"h6"}>Description</Typography>
        <Typography component={"h6"}>Due Date</Typography>
      </Box>
      
    </ThemeProvider>
  );
}
