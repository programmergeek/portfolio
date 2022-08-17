import { Box, Grid, Link } from "@mui/material";
import React from "react";

/* Responsive navigation bar */
export const Navbar: React.FC = () => {
  return (
    <Box
      style={{
        height: 50,
        display: "flex",
        flexDirection: "row"
      }}
    >
      <Grid container alignItems="center">
        <Grid item lg={2}>
          <Link
            href="/"
            className="font-semibold text-3xl"
            underline="none"
            color="#000"
          >
            {"<Joseph/>"}
          </Link>
        </Grid>
        <Grid item md={7} lg={7}></Grid>
        <Grid item lg={2}>
          <Grid item>
            <Link
              href="#about"
              underline="none"
              className="px-3 font-roboto text-lg"
              color="#000"
            >
              About
            </Link>
            <Link
              href="#skils"
              underline="none"
              className="px-3 font-roboto text-lg"
              color="#000"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              underline="none"
              className="px-3 font-roboto text-lg"
              color="#000"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              underline="none"
              className="px-3 font-roboto text-lg"
              color="#000"
            >
              Contact
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
