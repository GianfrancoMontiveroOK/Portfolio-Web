import React, { useState } from "react";
import { Box, Button, Typography, Snackbar } from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import "../styles/Footer.css";

export default function Footer() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const email = "montiverogianfranco2709@gmail.com";

  const handleLinkedInButtonClick = () => {
    window.location.href =
      "https://www.linkedin.com/in/gianfranco-montivero-37058821b/";
  };

  const handleGitHubButtonClick = () => {
    window.location.href = "https://github.com/GianfrancoMontiveroOK";
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const handleCopyButtonClick = () => {
    setOpenSnackbar(true);
  };

  return (
    <div>
      <Box id="footer" className="footer">
        <Box className="footeremail">
          <CopyToClipboard text={email}>
            <Button onClick={handleCopyButtonClick}>
              <ContentCopyIcon fontSize="large" color="primary" />
              Copy
            </Button>
          </CopyToClipboard>
          <Typography>{email}</Typography>
        </Box>
        <Box className="footerlinks">
          <Button onClick={handleLinkedInButtonClick}>
            <LinkedInIcon fontSize="large" color="primary" />
            LinkedIn
          </Button>
          <Button onClick={handleGitHubButtonClick}>
            <GitHubIcon fontSize="large" color="primary" />
            GitHub
          </Button>
        </Box>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message="Email copiado, Espero tu mensaje"
      />
    </div>
  );
}
