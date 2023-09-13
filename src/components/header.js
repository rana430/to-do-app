import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Header() {
  const styles = {
    headerBox: {
      backgroundColor: "#fff",
      color: "#e40808",
    },
    textCenter: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={styles.headerBox}>
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1
            }}
            style={styles.textCenter}>
            ToDo App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
