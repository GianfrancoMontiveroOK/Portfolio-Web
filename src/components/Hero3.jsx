import React from "react";
import { Box, Chip, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import ApiRoundedIcon from "@mui/icons-material/ApiRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";

import SectionHeading from "./SectionHeading";
import { technologyGroups } from "../data/portfolioData";

const icons = [<CodeRoundedIcon />, <ApiRoundedIcon />, <StorageRoundedIcon />];

export default function Hero3() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Stack técnico"
          title="Tecnologías conectadas a responsabilidades concretas."
          description="Presento las herramientas por el tipo de problema que resuelvo, no como una lista aislada de palabras clave."
        />

        <Grid container spacing={3} sx={{ mt: 4 }}>
          {technologyGroups.map((group, index) => (
            <Grid item xs={12} md={4} key={group.title}>
              <Paper
                elevation={0}
                sx={{
                  p: 3.5,
                  height: "100%",
                  border: "1px solid rgba(255,255,255,0.08)",
                  bgcolor: "rgba(255,255,255,0.02)",
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 3,
                    display: "grid",
                    placeItems: "center",
                    color: "primary.main",
                    bgcolor: "rgba(55,230,176,0.08)",
                    mb: 2.5,
                  }}
                >
                  {icons[index]}
                </Box>
                <Typography variant="h5" fontWeight={800}>
                  {group.title}
                </Typography>
                <Typography color="text.secondary" sx={{ mt: 1, lineHeight: 1.65 }}>
                  {group.description}
                </Typography>
                <Stack direction="row" gap={1} flexWrap="wrap" sx={{ mt: 2.5 }}>
                  {group.items.map((item) => (
                    <Chip key={item} label={item} size="small" variant="outlined" />
                  ))}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
