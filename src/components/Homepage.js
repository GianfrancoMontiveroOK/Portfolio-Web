import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

import lay1 from "../images/background33.jpg";
import lay2 from "../images/Bannerwe.png";
import lay3 from "../images/background1111.png";

import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import TerminalIcon from "@mui/icons-material/Terminal";

import "../styles/Home.css";

export default function Homepage() {
  return (
    <div>
      <Grid
        spacing={1}
        container
        className="hero1"
        style={{ backgroundImage: `url(${lay1})` }}
      >
        <Grid item xs={12} sm={10} mb={6}>
          <br></br>
          <Box  className="hero1item">
            <Typography align="center" variant="h3">
              ¡Hola! Soy Gianfranco
            </Typography>
            <Typography align="center" variant="body1">
              Desarrollador Full-Stack en formación con una pasión por construir
              aplicaciones web dinámicas y funcionales.

              Aunque aún estoy en proceso de aprendizaje, estoy emocionado de enfrentar nuevos desafíos y expandir mis conocimientos en el mundo del desarrollo web. Estoy comprometido a seguir mejorando mis habilidades y aprender nuevas tecnologías para convertirme en un desarrollador Full Stack sólido y competente.

Estoy ansioso por compartir algunos de mis proyectos contigo y por recibir cualquier comentario o sugerencia que puedas tener. ¡Gracias por tomarte el tiempo de revisar mi portfolio!
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "center", marginTop: 4 }}
            >
              <Button
                sx={{ marginRight: 2 }}
                variant="contained"
                color="secondary"
              >
                Resume
              </Button>
              <Button variant="contained" color="secondary">
                <FileDownloadOutlinedIcon
                  color="primary"
                  fontSize="medium"
                ></FileDownloadOutlinedIcon>
                <Typography>CV</Typography>
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box className="hero2" style={{ backgroundImage: `url(${lay3})` }}>
        <Grid container spacing={1}>
          <Grid item xs={12} sx={12} md={12}>
            <Box
              sx={{ flexGrow: 1 }}
              className="banner"
              style={{ backgroundImage: `url(${lay2})` }}
            ></Box>
          </Grid>
          <Grid item xs={12} sm={6} mb={6}>
            <br></br>
            <Box border={1} className="cardskills">
              <Typography variant="h1">
                Techs
                <TerminalIcon color="primary" fontSize="medium"></TerminalIcon>
              </Typography>

              <Box className="contentskills" >
                <Typography
                  className="contentskills"
                  color={"primary"}
                  variant="h5"
                >
                  Frontend
                </Typography>
                <Typography className="contentskills" variant="h6">
                  React , JavaScript, Html, Css
                </Typography>
                <Typography
                  className="contentskills"
                  color={"primary"}
                  variant="h6"
                >
                  Backend
                </Typography>
                <Typography variant="h6">
                  NodeJS , Express , Python, JavaScript
                </Typography>
                <Typography
                  className="contentskills"
                  color={"primary"}
                  variant="h6"
                >
                  Frameworks
                </Typography>
                <Typography className="contentskills" variant="h6">
                  Material UI
                </Typography>
                <Typography
                  className="contentskills"
                  color={"primary"}
                  variant="h6"
                >
                  DataBase
                </Typography>
                <Typography className="contentskills" variant="h6">
                  PostgreSQL , FireBase
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
