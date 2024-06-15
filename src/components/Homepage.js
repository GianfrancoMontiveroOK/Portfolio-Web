import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

import lay1 from "../images/background33.jpg";
import lay2 from "../images/Bannerwe.png";
import lay3 from "../images/background1111.png";

import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import TerminalIcon from "@mui/icons-material/Terminal";

import pdf from "../cv/Gianfranco_Montivero_CV.pdf";

import "../styles/Home.css";

export default function Homepage() {
  const handleResumeButtonClick = () => {
    const resume = document.getElementById("resume");
    resume.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Grid
        spacing={1}
        container
        className="hero1"
        style={{ backgroundImage: `url(${lay1})` }}
      >
        <Grid item xs={12} sm={10} mb={8}>
          <br></br>
          <Box className="hero1item">
            <Typography
              sx={{ typography: { xs: "h4", sm: "h4", md: "h2" } }}
              align="center"
            >
              &lt;Hi, im Gianfranco&gt;
            </Typography>
            <Typography color={"primary"} align="center" variant="h4">
              Full-Stack Dev
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "center", marginTop: 4 }}
            >
              <Button
                onClick={handleResumeButtonClick}
                sx={{ marginRight: 2 }}
                variant="contained"
                color="secondary"
              >
                Resume
              </Button>
              <Button
                href={pdf}
                target="_blank"
                rel="noopener noreferrer"
                download="Gianfranco_Montivero_CV.pdf"
                variant="contained"
                color="secondary"
              >
                <FileDownloadOutlinedIcon
                  color="primary"
                  fontSize="medium"
                ></FileDownloadOutlinedIcon>
                <Typography>CV</Typography>
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box className="hero2" style={{ backgroundImage: `url(${lay3})` }}>
        <Grid container spacing={1}>
          <Grid item xs={12} sx={12} md={12}>
            <Box
              id="resume"
              sx={{ flexGrow: 1 }}
              className="banner"
              style={{ backgroundImage: `url(${lay2})` }}
            ></Box>
          </Grid>
          <Grid item xs={12} sm={12} mb={8} lg={6} xl={6}>
            <br></br>
            <Box border={1} className="cardskills">
              <Typography variant="h1">
                Techs
                <TerminalIcon color="primary" fontSize="medium"></TerminalIcon>
              </Typography>

              <Box className="contentskills">
                <Typography
                  className="contentskills"
                  color={"primary"}
                  variant="h4"
                >
                  Frontend
                </Typography>
                <Typography className="contentskills" variant="h7">
                  React , JavaScript, Html, Css
                </Typography>
                <Typography
                  className="contentskills"
                  color={"primary"}
                  variant="h4"
                >
                  Backend
                </Typography>
                <Typography variant="h7">
                  NodeJS , Express , Python, JavaScript
                </Typography>
                <Typography
                  className="contentskills"
                  color={"primary"}
                  variant="h4"
                >
                  Frameworks
                </Typography>
                <Typography className="contentskills" variant="h6">
                  Material UI
                </Typography>
                <Typography
                  className="contentskills"
                  color={"primary"}
                  variant="h4"
                >
                  DataBase
                </Typography>
                <Typography className="contentskills" variant="h7">
                  PostgreSQL , FireBase , Mongo DB
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
