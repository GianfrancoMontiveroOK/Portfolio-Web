import * as React from "react";
import ListIcon from "@mui/icons-material/List";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Button,
  Drawer,
} from "@mui/material";
import IntegrationInstructionsOutlinedIcon from "@mui/icons-material/IntegrationInstructionsOutlined";
import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleContactButtonClick = () => {
    const footer = document.getElementById("footer");
    footer.scrollIntoView({ behavior: "smooth" });
  };
  const drawer = (
    <Box  onClick={handleDrawerToggle}>
      <Typography
        sx={{ ml: 5 , mt:4 }}
        variant="h6"
        style={{ flexGrow: 1, alignItems: "center" }}
      >
        Portfolio
        <IntegrationInstructionsOutlinedIcon
          fontSize="small"
          color="primary"
        ></IntegrationInstructionsOutlinedIcon>
      </Typography>
      <ul className="mobile-navigation">
        <li>
          <Button
            variant="text"
            onClick={() => navigate("/")}
            color="secondary"
          >
            Home
          </Button>
        </li>
        <li>
          <Button onClick={() => navigate("about")} color="secondary">
            About me
          </Button>
        </li>
        <li>
          <Button onClick={() => navigate("proyects")} color="secondary">
            Proyects
          </Button>
        </li>
        <li>
          <Button color="secondary">Contact</Button>
        </li>
      </ul>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        className="appbar"
        position="fixed"
        color="transparent"
        elevation={1}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
            onClick={handleDrawerToggle}
          >
            <ListIcon fontSize="large" color="primary"></ListIcon>
          </IconButton>
          <IntegrationInstructionsOutlinedIcon
            fontSize="large"
            color="primary"
            sx={{ display: { xs: "none", sm: "flex" } }}
          ></IntegrationInstructionsOutlinedIcon>

          <Typography
            sx={{ mr: 2 }}
            variant="h6"
            style={{ flexGrow: 1, alignItems: "center" }}
            color={"white"}
          >
            Portfolio
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ul className="navigation-menu">
              <li>
                <Button
                  variant="text"
                  onClick={() => navigate("/")}
                  color="success"
                >
                  Home
                </Button>
              </li>
              <li>
                <Button variant="text" onClick={() => navigate("about")} color="success">
                  About me
                </Button>
              </li>
              <li>
                <Button variant="text" onClick={() => navigate("proyects")} color="success">
                  Proyects
                </Button>
              </li>
              <li>
                <Button onClick={handleContactButtonClick} variant="text" color="success">Contact</Button>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: "170px" },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
