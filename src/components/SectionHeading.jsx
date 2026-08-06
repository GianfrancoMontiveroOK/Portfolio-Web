import React from "react";
import { Box, Chip, Typography } from "@mui/material";

export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <Box sx={{ maxWidth: 780, mx: align === "center" ? "auto" : 0, textAlign: align }}>
      {eyebrow && (
        <Chip
          label={eyebrow}
          color="primary"
          variant="outlined"
          size="small"
          sx={{ mb: 2, fontWeight: 700 }}
        />
      )}
      <Typography
        component="h2"
        variant="h3"
        sx={{ fontSize: { xs: "2rem", md: "3rem" }, lineHeight: 1.08 }}
      >
        {title}
      </Typography>
      {description && (
        <Typography
          color="text.secondary"
          sx={{ mt: 2, fontSize: { xs: "1rem", md: "1.1rem" }, lineHeight: 1.75 }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
}
