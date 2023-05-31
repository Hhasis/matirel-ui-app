import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import { Box } from "./MuiComponents";

const HAppBar = () => {
  return (
    <AppBar position="static" color="neutral" sx={{}}>
      <Toolbar
        variant="dense"
        sx={{ display: "flex", justifyContent: "space-between", padding: 0}}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <IconButton color="white">
            <MenuIcon />
          </IconButton>
          <p style={{ color: "white" }}>MuiApp</p>
        </Box>
        <Avatar />
      </Toolbar>
    </AppBar>
  );
};

export default HAppBar;
