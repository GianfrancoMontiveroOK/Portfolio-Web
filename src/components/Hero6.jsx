import React from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Link } from "react-router-dom";

import { profile } from "../data/portfolioData";

export default function Hero6() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}>
      <Container maxWidth="md">
        <Paper
          sx={{
            p: { xs: 3, sm: 5, md: 7 },
            textAlign: "center",
            border: "1px solid rgba(255,255,255,0.09)",
            background:
              "radial-gradient(circle at top, rgba(55,230,176,0.12), transparent 52%), #101A18",
          }}
        >
          <Typography color="primary.main" fontWeight={800} variant="overline">
            Disponible para oportunidades
          </Typography>
          <Typography component="h2" variant="h3" sx={{ mt: 1, fontSize: { xs: "2rem", md: "3rem" } }}>
            Busco sumarme a un equipo donde pueda construir y mejorar producto.
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 2, lineHeight: 1.75, maxWidth: 680, mx: "auto" }}>
            Me interesan posiciones Full Stack JavaScript, Frontend React o Backend Node.js
            donde pueda aportar experiencia práctica, autonomía y conocimiento del ciclo completo de desarrollo.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} justifyContent="center" mt={4}>
            <Button component={Link} to="/contact" variant="contained" endIcon={<ArrowForwardRoundedIcon />}>
              Contactarme
            </Button>
            <Button href={`mailto:${profile.email}`} variant="outlined" startIcon={<EmailOutlinedIcon />}>
              {profile.email}
            </Button>
          </Stack>
          <Stack direction="row" spacing={1} justifyContent="center" mt={3}>
            <Tooltip title="WhatsApp">
              <IconButton href={profile.whatsapp} target="_blank" rel="noopener noreferrer" color="primary">
                <WhatsAppIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="LinkedIn">
              <IconButton href={profile.linkedin} target="_blank" rel="noopener noreferrer" color="primary">
                <LinkedInIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="GitHub">
              <IconButton href={profile.github} target="_blank" rel="noopener noreferrer" color="primary">
                <GitHubIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
