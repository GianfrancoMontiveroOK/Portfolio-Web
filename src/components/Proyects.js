import {
  Box,
  Card,
  Grid,
  Typography,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import React from "react";

import GitHubIcon from "@mui/icons-material/GitHub";

import proyect2Image from "../images/Telegram Bot.PNG";
import proyect1Image from "../images/PernImage.PNG";
import "../styles/Proyects.css";

export default function Proyects() {
  return (
    <Grid spacing={1} className="Proyectpage" container sx={12}>
      <Grid item xs={12}>
        <Box border={1} className="ProyectBox">
        <Card className="ProyectCard" sx={{ maxWidth: 500 }}>
            <CardHeader title="Telegram Bot" subheader="March 20, 2024" />
            <CardMedia
              component="img"
              height="185"
              image={proyect2Image}
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Gestor de Tareas PERN con Material UI
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Este proyecto es un gestor de tareas diseñado para ofrecer una
                experiencia fluida y eficiente en la gestión de tareas.
                Desarrollado con el stack tecnológico PERN (PostgreSQL,
                Express.js, React.js y Node.js), el sistema permite a los
                usuarios listar, guardar, eliminar y editar tareas de manera
                intuitiva y elegante. La integración de Material UI proporciona
                una interfaz de usuario atractiva y altamente funcional,
                asegurando una experiencia de usuario pulida y moderna. Con
                características como la capacidad de editar en línea,
                categorización de tareas y búsqueda rápida, este gestor de
                tareas se convierte en una herramienta indispensable para
                aumentar la productividad y mantenerse organizado en cualquier
                entorno.
              </Typography>
            </CardContent>
            <CardActions>
                <GitHubIcon size="small">Share</GitHubIcon> 
              <Button size="small">
                {" "} Code 
              </Button>
              <Button size="small">Live</Button>
            </CardActions>
          </Card>
          <Card className="ProyectCard" sx={{ maxWidth: 500 }}>
            <CardHeader title="Pern Stack" subheader="March 20, 2024" />
            <CardMedia
              component="img"
              height="185"
              image={proyect1Image}
              alt="PernStackImage"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Gestor de Tareas PERN con Material UI
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Este proyecto es un gestor de tareas diseñado para ofrecer una
                experiencia fluida y eficiente en la gestión de tareas.
                Desarrollado con el stack tecnológico PERN (PostgreSQL,
                Express.js, React.js y Node.js), el sistema permite a los
                usuarios listar, guardar, eliminar y editar tareas de manera
                intuitiva y elegante. La integración de Material UI proporciona
                una interfaz de usuario atractiva y altamente funcional,
                asegurando una experiencia de usuario pulida y moderna. Con
                características como la capacidad de editar en línea,
                categorización de tareas y búsqueda rápida, este gestor de
                tareas se convierte en una herramienta indispensable para
                aumentar la productividad y mantenerse organizado en cualquier
                entorno.
              </Typography>
            </CardContent>
            <CardActions>
                <GitHubIcon size="small">Share</GitHubIcon> 
              <Button size="small">
                {" "} Code 
              </Button>
              <Button size="small">Live</Button>
            </CardActions>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
}
