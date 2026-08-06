import React, { useContext, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { Link, useLocation } from "react-router-dom";

import { GlobalStateContext } from "../App";
import pdf from "../cv/Gianfranco_Montivero_CV.pdf";

const navigation = [
  { label: "Inicio", path: "/" },
  { label: "Proyectos", path: "/projects" },
  { label: "Experiencia", path: "/activos" },
  { label: "Contacto", path: "/contact" },
];

const accents = [
  { id: "base", label: "Verde", color: "#37E6B0" },
  { id: "kaio", label: "Naranja", color: "#FF7A45" },
  { id: "mystic", label: "Violeta", color: "#A982FF" },
  { id: "ultraInstinct", label: "Celeste", color: "#55D8FF" },
];

export default function Navbar() {
  const { power, setPower } = useContext(GlobalStateContext);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const closeDrawer = () => setDrawerOpen(false);

  const navButton = (item, mobile = false) => (
    <Button
      key={item.path}
      component={Link}
      to={item.path}
      onClick={closeDrawer}
      color={location.pathname === item.path ? "primary" : "inherit"}
      sx={{
        justifyContent: mobile ? "flex-start" : "center",
        width: mobile ? "100%" : "auto",
        color:
          location.pathname === item.path
            ? "primary.main"
            : mobile
              ? "text.primary"
              : "rgba(255,255,255,0.78)",
      }}
    >
      {item.label}
    </Button>
  );

  const accentSelector = (
    <Stack direction="row" spacing={0.5} alignItems="center">
      {accents.map((accent) => (
        <Tooltip title={`Acento ${accent.label}`} key={accent.id}>
          <IconButton
            aria-label={`Usar acento ${accent.label}`}
            size="small"
            onClick={() => setPower(accent.id)}
            sx={{ p: 0.7 }}
          >
            <Box
              sx={{
                width: power === accent.id ? 13 : 10,
                height: power === accent.id ? 13 : 10,
                borderRadius: "50%",
                bgcolor: accent.color,
                boxShadow:
                  power === accent.id ? `0 0 0 4px ${accent.color}22` : "none",
                transition: "all 180ms ease",
              }}
            />
          </IconButton>
        </Tooltip>
      ))}
    </Stack>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: "rgba(8,16,15,0.86)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(16px)",
        }}
      >
        <Toolbar sx={{ maxWidth: 1240, width: "100%", mx: "auto", minHeight: 72 }}>
          <Box component={Link} to="/" sx={{ textDecoration: "none", flexGrow: 1 }}>
            <Typography fontWeight={800} color="text.primary" lineHeight={1.1}>
              Gianfranco Montivero
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Full Stack JavaScript Developer
            </Typography>
          </Box>

          {isMobile ? (
            <IconButton aria-label="Abrir navegación" onClick={() => setDrawerOpen(true)}>
              <MenuRoundedIcon />
            </IconButton>
          ) : (
            <Stack direction="row" spacing={0.5} alignItems="center">
              {navigation.map((item) => navButton(item))}
              <Divider orientation="vertical" flexItem sx={{ mx: 1.5 }} />
              {accentSelector}
              <Button
                href={pdf}
                download="Gianfranco_Montivero_CV.pdf"
                variant="contained"
                startIcon={<DownloadRoundedIcon />}
                sx={{ ml: 1.5 }}
              >
                CV
              </Button>
            </Stack>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={closeDrawer}>
        <Box sx={{ width: 290, p: 2.5, minHeight: "100%", bgcolor: "background.paper" }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography fontWeight={800}>Navegación</Typography>
            <IconButton aria-label="Cerrar navegación" onClick={closeDrawer}>
              <CloseRoundedIcon />
            </IconButton>
          </Stack>
          <List disablePadding>
            {navigation.map((item) => (
              <ListItemButton
                key={item.path}
                component={Link}
                to={item.path}
                selected={location.pathname === item.path}
                onClick={closeDrawer}
                sx={{ borderRadius: 2, mb: 0.5 }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
          <Divider sx={{ my: 2 }} />
          <Typography variant="caption" color="text.secondary">
            Color de acento
          </Typography>
          <Box sx={{ mt: 1 }}>{accentSelector}</Box>
          <Button
            href={pdf}
            download="Gianfranco_Montivero_CV.pdf"
            variant="contained"
            fullWidth
            startIcon={<DownloadRoundedIcon />}
            sx={{ mt: 3 }}
          >
            Descargar CV
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
