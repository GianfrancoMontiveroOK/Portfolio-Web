import React from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  useTheme,
  useMediaQuery,
  IconButton,
  Tooltip,
  Chip,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import pdf from "../cv/Gianfranco_Montivero_CV.pdf";

export default function Hero6() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: "80vh",
        bgcolor: theme.palette.background.paper,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        px: { xs: 2, sm: 4 },
        py: 10,
        scrollSnapAlign: "start",
        borderTop: `1px solid ${theme.palette.divider}`,
        "&::before": {
          content: '""',
          position: "absolute",
          width: 360,
          height: 360,
          borderRadius: "50%",
          top: -160,
          left: "50%",
          transform: "translateX(-50%)",
          background: `${theme.palette.primary.main}14`,
          filter: "blur(18px)",
          pointerEvents: "none",
        },
      }}
    >
      <Stack
        spacing={4}
        alignItems="center"
        textAlign="center"
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: 860,
          mx: "auto",
        }}
      >
        <Chip
          icon={<WorkOutlineRoundedIcon />}
          label="Disponible para roles técnicos, producto y liderazgo"
          color="primary"
          sx={{
            fontWeight: 700,
            px: 1,
            "& .MuiChip-icon": {
              color: "#fff",
            },
          }}
        />

        <Typography
          variant={isMobile ? "h4" : "h3"}
          fontWeight="bold"
          color="primary"
          sx={{
            fontFamily: "'Red Hat Display', sans-serif",
            lineHeight: 1.1,
          }}
        >
          ¿Construimos sistemas que puedan crecer con orden?
        </Typography>

        <Typography
          color="text.secondary"
          sx={{
            maxWidth: 720,
            fontSize: { xs: "1rem", sm: "1.12rem" },
            lineHeight: 1.8,
          }}
        >
          Me interesa sumarme a equipos donde pueda aportar desarrollo full
          stack, criterio de producto, estructura operativa y visión de escala.
          Especialmente en contextos donde negocio e ingeniería necesitan
          trabajar más conectados.
        </Typography>

        <Stack
          direction={isMobile ? "column" : "row"}
          spacing={2}
          alignItems="center"
          justifyContent="center"
          sx={{ width: "100%" }}
        >
          <Button
            variant="contained"
            color="primary"
            href="https://wa.me/542604206967"
            target="_blank"
            startIcon={<WhatsAppIcon />}
            sx={{
              width: isMobile ? "100%" : "auto",
              maxWidth: isMobile ? 320 : "none",
              px: 4,
              py: 1.5,
              borderRadius: "30px",
              fontWeight: 700,
              textTransform: "none",
              boxShadow: `0 10px 22px ${theme.palette.primary.main}33`,
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: `0 14px 28px ${theme.palette.primary.main}44`,
              },
            }}
          >
            Escribirme por WhatsApp
          </Button>

          <Button
            variant="outlined"
            color="primary"
            href="mailto:montiverogianfranco2709@gmail.com"
            startIcon={<EmailIcon />}
            sx={{
              width: isMobile ? "100%" : "auto",
              maxWidth: isMobile ? 320 : "none",
              px: 4,
              py: 1.5,
              borderRadius: "30px",
              fontWeight: 700,
              textTransform: "none",
            }}
          >
            Enviar email
          </Button>
        </Stack>

        <Button
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          download="Gianfranco_Montivero_CV.pdf"
          variant="text"
          color="primary"
          startIcon={<FileDownloadOutlinedIcon />}
          sx={{
            px: 4,
            py: 1.3,
            fontWeight: 700,
            borderRadius: "30px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: `${theme.palette.primary.main}14`,
            },
          }}
        >
          Descargar CV
        </Button>

        <Stack direction="row" spacing={2}>
          <Tooltip title="GitHub">
            <IconButton
              color="primary"
              href="https://github.com/GianfrancoMontiveroOK"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                border: `1px solid ${theme.palette.primary.main}22`,
                "&:hover": {
                  backgroundColor: `${theme.palette.primary.main}12`,
                },
              }}
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
          </Tooltip>

          <Tooltip title="LinkedIn">
            <IconButton
              color="primary"
              href="https://www.linkedin.com/in/gianfranco-montivero-37058821b/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                border: `1px solid ${theme.palette.primary.main}22`,
                "&:hover": {
                  backgroundColor: `${theme.palette.primary.main}12`,
                },
              }}
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </Stack>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            lineHeight: 1.7,
          }}
        >
          Email: montiverogianfranco2709@gmail.com · Argentina · GitHub activo ·
          Portfolio orientado a producto, ingeniería y operación
        </Typography>
      </Stack>
    </Box>
  );
}
