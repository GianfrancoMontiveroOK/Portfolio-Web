import React from "react";

import { Box, Grid, Typography } from "@mui/material";

import "../styles/About.css";
import lay1 from "../images/backabout.jpg";

export default function About() {
  return (
    <Box >
      <Grid style={{ backgroundImage: `url(${lay1})` }} className="container" container>
        <Grid item xs={12} sm={12} mb={12} xl={12}>
          <Box border={1} className="contend">
            <Typography color={"primary"} variant="h2">
              About Me
            </Typography>
            <Typography color={"white"} variant="h6">
              ¡Hola! Soy Gianfranco, un entusiasta desarrollador Full Stack en
              formación con una pasión por construir aplicaciones web dinámicas
              y funcionales. Mi viaje en el mundo del desarrollo comenzó con el
              aprendizaje autodidacta y la exploración de tecnologías
              emocionantes como Visual Studio Code, React, Express, Cors,
              Nodemon, Material UI, Postgres, Node.js y Python con bibliotecas
              como Openpyxl, Pandas y cv2. Aunque aún no tengo experiencia
              laboral formal, he invertido tiempo y esfuerzo en proyectos
              personales donde he aplicado mis habilidades para crear
              aplicaciones web simples pero efectivas. Mi enfoque se centra en
              comprender profundamente cada tecnología con la que trabajo y
              encontrar formas creativas de combinarlas para obtener resultados
              impactantes. En el front-end, disfruto diseñando interfaces de
              usuario atractivas y fáciles de usar utilizando React y Material
              UI, mientras que en el back-end, me siento cómodo trabajando con
              Express y Node.js para crear servidores robustos y escalables.
              Además, tengo experiencia en la manipulación de datos utilizando
              Python y sus bibliotecas para análisis y procesamiento de datos.
              Aunque aún estoy en proceso de aprendizaje, estoy emocionado de
              enfrentar nuevos desafíos y expandir mis conocimientos en el mundo
              del desarrollo web. Estoy comprometido a seguir mejorando mis
              habilidades y aprender nuevas tecnologías para convertirme en un
              desarrollador Full Stack sólido y competente. Estoy ansioso por
              compartir algunos de mis proyectos contigo y por recibir cualquier
              comentario o sugerencia que puedas tener. ¡Gracias por tomarte el
              tiempo de revisar mi portfolio!
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
