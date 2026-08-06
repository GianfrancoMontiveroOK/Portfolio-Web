import React from "react";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

import SectionHeading from "./SectionHeading";
import { education, workPrinciples } from "../data/portfolioData";

export default function Hero5() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 7 }}>
          <Grid item xs={12} md={8}>
            <SectionHeading
              eyebrow="Forma de trabajo"
              title="Autonomía para resolver, criterio para colaborar."
              description="Puedo asumir una funcionalidad de punta a punta, documentar decisiones y trabajar sobre feedback. También sé que un producto sostenible requiere comunicación, revisión y prioridades compartidas."
            />
            <Grid container spacing={2.5} sx={{ mt: 3 }}>
              {workPrinciples.map((principle) => (
                <Grid item xs={12} sm={6} key={principle.number}>
                  <Paper
                    variant="outlined"
                    sx={{ p: 3, height: "100%", borderColor: "rgba(255,255,255,0.08)" }}
                  >
                    <Typography color="primary.main" fontWeight={800}>
                      {principle.number}
                    </Typography>
                    <Typography fontWeight={800} fontSize="1.15rem" sx={{ mt: 1 }}>
                      {principle.title}
                    </Typography>
                    <Typography color="text.secondary" variant="body2" sx={{ mt: 1, lineHeight: 1.65 }}>
                      {principle.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 3.5,
                position: { md: "sticky" },
                top: { md: 100 },
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Stack direction="row" spacing={1.5} alignItems="center">
                <SchoolOutlinedIcon color="primary" />
                <Typography variant="h5" fontWeight={800}>
                  Formación
                </Typography>
              </Stack>
              <List sx={{ mt: 1 }}>
                {education.map((item) => (
                  <ListItem key={item} disableGutters alignItems="flex-start">
                    <ListItemIcon sx={{ minWidth: 30, mt: 0.3 }}>
                      <CheckRoundedIcon color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{ color: "text.secondary", lineHeight: 1.6 }}
                    />
                  </ListItem>
                ))}
              </List>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2, lineHeight: 1.7 }}>
                Inglés básico conversacional. Español nativo.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
