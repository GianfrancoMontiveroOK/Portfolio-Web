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

import proyect1Image from "../images/PernImage.PNG";
import proyect2Image from "../images/Telegram Bot.PNG";
import proyect3Image from "../images/debug.bmp";
import proyect4Image from "../images/skilss.jpg";
import "../styles/Proyects.css";

export default function Proyects() {
  const handleCodeButtonClick1 = () => {
    window.location.href =
      "https://github.com/GianfrancoMontiveroOK/PERN-CRUD-Stack";
  };
  const handleCodeButtonClick2 = () => {
    window.location.href =
      "https://github.com/GianfrancoMontiveroOK/BotTelegram";
  };
  const handleCodeButtonClick3 = () => {
    window.location.href = "https://github.com/GianfrancoMontiveroOK/AutoCopy";
  };
  const handleCodeButtonClick4 = () => {
    window.location.href =
      "https://github.com/GianfrancoMontiveroOK/Portfolio-Web";
  };
  return (
    <Grid className="Proyectpage" container sx={12}>
      <Grid item xs={12} sx={4} mb={3}>
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
                Bot Telegram con Python y Openpyxlsx
              </Typography>
              <Typography variant="body2" color="text.secondary">
                He creado un bot de Telegram para un cliente que tiene la
                capacidad de guardar datos en hojas de cálculo de Excel.
                Utilizando Python y mi experiencia en diversas bibliotecas, he
                desarrollado esta herramienta para simplificar el proceso de
                almacenamiento de datos. El bot es fácil de usar y puede manejar
                una variedad de tipos de datos, lo que lo convierte en una
                solución práctica para cualquier persona que necesite organizar
                información de manera eficiente.
              </Typography>
              <br></br>
              <Button
                sx={{ ml: 1, mr: 1 }}
                color="secondary"
                size="small"
                variant="text"
              >
                Python
              </Button>

              <Button
                sx={{ ml: 1, mr: 1 }}
                color="secondary"
                size="small"
                variant="text"
              >
                Openpyxlsx
              </Button>
            </CardContent>
            <CardActions>
              <GitHubIcon size="small">Share</GitHubIcon>
              <Button
                variant="outlined"
                onClick={handleCodeButtonClick2}
                size="small"
              >
                {" "}
                Code
              </Button>
              <Button variant="outlined" size="small">
                Live
              </Button>
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
              <br></br>

              <Button
                sx={{ ml: 1, mr: 1 }}
                color="secondary"
                size="small"
                variant="text"
              >
                React
              </Button>
              <Button
                sx={{ ml: 1, mr: 1 }}
                color="secondary"
                size="small"
                variant="text"
              >
                Express
              </Button>
              <Button
                sx={{ ml: 1, mr: 1 }}
                color="secondary"
                size="small"
                variant="text"
              >
                PostgreSQL
              </Button>
              <Button
                sx={{ ml: 1, mr: 1 }}
                color="secondary"
                size="small"
                variant="text"
              >
                Javascript
              </Button>
            </CardContent>
            <CardActions>
              <GitHubIcon size="small">Share</GitHubIcon>
              <Button
                variant="outlined"
                onClick={handleCodeButtonClick1}
                size="small"
              >
                {" "}
                Code
              </Button>
              <Button variant="outlined" size="small">
                Live
              </Button>
            </CardActions>
          </Card>
        </Box>
        <Box border={1} className="ProyectBox">
          <Card className="ProyectCard" sx={{ maxWidth: 500 }}>
            <CardHeader title="AutoCopy" subheader="September 10, 2021" />
            <CardMedia
              component="img"
              height="185"
              image={proyect3Image}
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bot de Trading Inteligente: Captura y Análisis de Pantallas para
                Operaciones Financieras Automatizadas
              </Typography>
              <Typography variant="body2" color="text.secondary">
                El Bot de Trading Inteligente representa una combinación única
                de tecnologías avanzadas que ofrecen una solución innovadora
                para el trading automatizado, con el potencial de revolucionar
                la forma en que se realizan las operaciones financieras en los
                mercados globales.
              </Typography>
              <br></br>
              <Button sx={{ml:1,mr:1}} color="secondary"  size="small" variant="text">Python</Button>
              <Button sx={{ml:1,mr:1}} color="secondary"  size="small" variant="text">Cv2</Button>
              <Button sx={{ml:1,mr:1}} color="secondary"  size="small" variant="text">Pandas</Button>
              <Button sx={{ml:1,mr:1}} color="secondary"  size="small" variant="text">Numpy</Button>
              <Button sx={{ml:1,mr:1}} color="secondary"  size="small" variant="text">Mathplotlib</Button>



            </CardContent>
            <CardActions>
              <GitHubIcon size="small">Share</GitHubIcon>
              <Button variant="outlined" onClick={handleCodeButtonClick3} size="small">
                {" "}
                Code
              </Button>
              <Button variant="outlined" size="small">Live</Button>
            </CardActions>
          </Card>
          <Card className="ProyectCard" sx={{ maxWidth: 500 }}>
            <CardHeader title="Portfolio" subheader="March 20, 2024" />
            <CardMedia
              component="img"
              height="185"
              image={proyect4Image}
              alt="PernStackImage"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Portfolio Web Personal
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Mi Portafolio es un proyecto personal diseñado y desarrollado
                utilizando React y Material UI para crear una experiencia de
                usuario moderna y dinámica. Este sitio web no solo presenta mi
                trabajo y experiencia de manera atractiva, sino que también
                demuestra mis habilidades en el desarrollo web frontend y mi
                capacidad para crear interfaces de usuario intuitivas y
                agradables. Mi Portafolio es más que solo un sitio web; es una
                expresión de mi pasión por el desarrollo web frontend y mi
                compromiso con la excelencia en la creación de experiencias
                digitales memorables.
              </Typography>
              <br></br>
              <Button sx={{ml:1,mr:1}} color="secondary"  size="small" variant="text">React</Button>
              <Button sx={{ml:1,mr:1}} color="secondary"  size="small" variant="text">Material-UI</Button>
              <Button sx={{ml:1,mr:1}} color="secondary"  size="small" variant="text">CSS</Button>
              <Button sx={{ml:1,mr:1}} color="secondary"  size="small" variant="text">Javascript</Button>
              <Button sx={{ml:1,mr:1}} color="secondary"  size="small" variant="text">HTML</Button>


            </CardContent>
            <CardActions>
              <GitHubIcon size="small">Share</GitHubIcon>
              <Button variant="outlined" onClick={handleCodeButtonClick4} size="small">
                {" "}
                Code
              </Button>
              <Button variant="outlined" size="small">Live</Button>
            </CardActions>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
}
