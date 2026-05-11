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
        minHeight: { xs: "auto", md: "80vh" },
        bgcolor: theme.palette.background.paper,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        px: { xs: 2, sm: 4 },
        py: { xs: 8, sm: 10 },
        borderTop: `1px solid ${theme.palette.divider}`,
        "&::before": {
          content: '""',
          position: "absolute",
          width: { xs: 260, sm: 360 },
          height: { xs: 260, sm: 360 },
          borderRadius: "50%",
          top: { xs: -120, sm: -160 },
          left: "50%",
          transform: "translateX(-50%)",
          background: `${theme.palette.primary.main}14`,
          filter: "blur(18px)",
          pointerEvents: "none",
        },
      }}
    >
      <Stack
        spacing={{ xs: 3, sm: 4 }}
        alignItems="center"
        textAlign="center"
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: 860,
          mx: "auto",
        }}
      >
        <Chip
          icon={!isMobile ? <WorkOutlineRoundedIcon /> : undefined}
          label={
            isMobile
              ? "Disponible para roles técnicos"
              : "Disponible para roles técnicos, producto y liderazgo"
          }
          color="primary"
          sx={{
            maxWidth: "100%",
            height: "auto",
            fontWeight: 700,
            px: { xs: 0.5, sm: 1 },
            py: { xs: 0.8, sm: 0 },
            "& .MuiChip-label": {
              whiteSpace: "normal",
              textAlign: "center",
              lineHeight: 1.3,
              px: { xs: 1.2, sm: 1.5 },
            },
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
            lineHeight: 1.12,
            maxWidth: 760,
            mx: "auto",
            fontSize: {
              xs: "2rem",
              sm: "2.5rem",
              md: "3rem",
            },
          }}
        >
          ¿Construimos sistemas que puedan crecer con orden?
        </Typography>

        <Typography
          color="text.secondary"
          sx={{
            width: "100%",
            maxWidth: 720,
            fontSize: { xs: "0.98rem", sm: "1.12rem" },
            lineHeight: { xs: 1.65, sm: 1.8 },
            px: { xs: 0.5, sm: 0 },
          }}
        >
          Me interesa sumarme a equipos donde pueda aportar desarrollo full
          stack, criterio de producto, estructura operativa y visión de escala.
          Especialmente en contextos donde negocio e ingeniería necesitan
          trabajar más conectados.
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          alignItems="center"
          justifyContent="center"
          sx={{
            width: "100%",
            maxWidth: { xs: 340, sm: "none" },
          }}
        >
          <Button
            variant="contained"
            color="primary"
            href="https://wa.me/542604206967"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<WhatsAppIcon />}
            sx={{
              width: { xs: "100%", sm: "auto" },
              px: { xs: 3, sm: 4 },
              py: 1.5,
              borderRadius: "30px",
              fontWeight: 700,
              textTransform: "none",
              whiteSpace: "nowrap",
              boxShadow: `0 10px 22px ${theme.palette.primary.main}33`,
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: `0 14px 28px ${theme.palette.primary.main}44`,
              },
            }}
          >
            WhatsApp
          </Button>

          <Button
            variant="outlined"
            color="primary"
            href="mailto:montiverogianfranco2709@gmail.com"
            startIcon={<EmailIcon />}
            sx={{
              width: { xs: "100%", sm: "auto" },
              px: { xs: 3, sm: 4 },
              py: 1.5,
              borderRadius: "30px",
              fontWeight: 700,
              textTransform: "none",
              whiteSpace: "nowrap",
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
            px: { xs: 2.5, sm: 4 },
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

        <Stack direction="row" spacing={2} justifyContent="center">
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
              <GitHubIcon fontSize={isMobile ? "medium" : "large"} />
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
              <LinkedInIcon fontSize={isMobile ? "medium" : "large"} />
            </IconButton>
          </Tooltip>
        </Stack>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            width: "100%",
            maxWidth: 680,
            lineHeight: 1.7,
            fontSize: { xs: "0.82rem", sm: "0.875rem" },
            wordBreak: "break-word",
            px: { xs: 1, sm: 0 },
          }}
        >
          Email: montiverogianfranco2709@gmail.com
          <Box component="span" sx={{ display: { xs: "block", sm: "inline" } }}>
            {" "}
            · Argentina · GitHub activo
          </Box>
          <Box component="span" sx={{ display: { xs: "block", sm: "inline" } }}>
            {" "}
            · Portfolio orientado a producto, ingeniería y operación
          </Box>
        </Typography>
      </Stack>
    </Box>
  );
}
