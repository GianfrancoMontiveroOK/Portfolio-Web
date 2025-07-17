import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment"; // Kaio
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome"; // Mystic
import BoltIcon from "@mui/icons-material/Bolt"; // Ultra Instinct
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople"; // Base

import { GlobalStateContext } from "../App";

export default function Navbar() {
  const { power, setPower } = useContext(GlobalStateContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const powers = [
    {
      id: "kaio",
      icon: <LocalFireDepartmentIcon />,
      label: "Kaio",
      color: "#ff4d00",
    },
    {
      id: "mystic",
      icon: <AutoAwesomeIcon />,
      label: "Místico",
      color: "#8a2be2",
    },
    {
      id: "ultraInstinct",
      icon: <BoltIcon />,
      label: "Ultra Instinct",
      color: "#00e5ff",
    },
    {
      id: "base",
      icon: <EmojiPeopleIcon />,
      label: "Base",
      color: "#00FFC8",
    },
  ];

  const handleSelect = (id) => {
    setPower(id);
    setDrawerOpen(false); // cierra drawer al cambiar
  };

  const drawerContent = (
    <Box sx={{ width: 240 }} role="presentation">
      <List>
        {["Inicio", "Proyectos", "Contacto", "Activos"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              component="a"
              href={["#", "#projects", "#contact", "#activos"][index]}
              onClick={() => setDrawerOpen(false)}
            >
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1,
          p: 2,
        }}
      >
        {powers.map((p) => (
          <IconButton
            key={p.id}
            size="small"
            onClick={() => handleSelect(p.id)}
            sx={{
              color: power === p.id ? p.color : "#888",
              transform: power === p.id ? "scale(1.3)" : "scale(1)",
              transition: "all 0.3s ease",
              "&:hover": {
                color: p.color,
                filter: "drop-shadow(0 0 6px rgba(255,255,255,0.3))",
              },
            }}
          >
            {p.icon}
          </IconButton>
        ))}
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={4}
        sx={{
          backgroundColor: "#121212dd",
          backdropFilter: "blur(8px)",
          transition: "background 0.3s",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" fontWeight={700}>
            Gianfranco Montivero
          </Typography>

          {isMobile ? (
            <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Button color="inherit" href="#">
                Inicio
              </Button>
              <Button color="inherit" href="#activos">
                Activos
              </Button>
              <Button color="inherit" href="#projects">
                Proyectos
              </Button>
              <Button color="inherit" href="#contact">
                Contacto
              </Button>

              <Box
                sx={{
                  display: "flex",
                  borderRadius: 4,
                  px: 1,
                  py: 0.5,
                  bgcolor: "#222",
                  gap: 1,
                }}
              >
                {powers.map((p) => (
                  <IconButton
                    key={p.id}
                    size="small"
                    onClick={() => handleSelect(p.id)}
                    sx={{
                      color: power === p.id ? p.color : "#888",
                      transform: power === p.id ? "scale(1.3)" : "scale(1)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: p.color,
                        filter: "drop-shadow(0 0 6px rgba(255,255,255,0.3))",
                      },
                    }}
                  >
                    {p.icon}
                  </IconButton>
                ))}
              </Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
