import React from "react";
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import { Link } from "react-router-dom";

import heroBackground from "../images/background33.webp";
import pdf from "../cv/Gianfranco_Montivero_CV.pdf";
import { profile } from "../data/portfolioData";

export default function Hero1() {
  return (
    <Box
      component="section"
      sx={{
        minHeight: "100vh",
        pt: { xs: 14, md: 16 },
        pb: { xs: 8, md: 10 },
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        backgroundImage: `linear-gradient(90deg, rgba(8,16,15,0.98) 0%, rgba(8,16,15,0.9) 50%, rgba(8,16,15,0.56) 100%), url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        "&::after": {
          content: '""',
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          right: -160,
          bottom: -220,
          bgcolor: "primary.main",
          opacity: 0.09,
          filter: "blur(60px)",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={8}>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap mb={3}>
              <Chip label="React" size="small" />
              <Chip label="Node.js" size="small" />
              <Chip label="MongoDB" size="small" />
              <Chip label="APIs REST" size="small" />
            </Stack>

            <Typography
              component="p"
              color="primary.main"
              fontWeight={800}
              sx={{ mb: 1.5, letterSpacing: "0.08em", textTransform: "uppercase" }}
            >
              {profile.role}
            </Typography>

            <Typography
              component="h1"
              variant="h1"
              sx={{
                fontSize: { xs: "2.65rem", sm: "3.6rem", md: "5rem" },
                lineHeight: 0.98,
                maxWidth: 900,
              }}
            >
              Desarrollo productos digitales que resuelven trabajo real.
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                mt: 3,
                fontSize: { xs: "1.05rem", md: "1.25rem" },
                lineHeight: 1.75,
                maxWidth: 760,
              }}
            >
              Soy Gianfranco Montivero. Construyo frontend, backend y bases de datos para
              sistemas administrativos, plataformas SaaS y herramientas de operación.
              Trabajo desde el relevamiento del problema hasta el despliegue, soporte y mejora continua.
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} mt={4}>
              <Button
                component={Link}
                to="/projects"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardRoundedIcon />}
              >
                Ver casos reales
              </Button>
              <Button
                href={pdf}
                download="Gianfranco_Montivero_CV.pdf"
                variant="outlined"
                size="large"
                startIcon={<DownloadRoundedIcon />}
              >
                Descargar CV
              </Button>
            </Stack>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1.2, sm: 3 }}
              mt={4}
              color="text.secondary"
            >
              <Stack direction="row" spacing={1} alignItems="center">
                <LocationOnOutlinedIcon color="primary" fontSize="small" />
                <Typography variant="body2">{profile.location}</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <WorkOutlineRoundedIcon color="primary" fontSize="small" />
                <Typography variant="body2">{profile.availability}</Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
