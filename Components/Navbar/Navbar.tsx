import { Box, Grid, Link } from "@mui/material";
import React from "react";
import { DrawerMenu } from "./DrawerMenu";

/* Responsive navigation bar */
export const Navbar: React.FC = () => {
  return (
    <Box
      style={{
        height: 50,
        display: "flex",
        flexDirection: "row",
        border: "1px solid black"
      }}
    >
      <Grid container alignItems="center">
        <Grid item xs>
          <Link
            href="/"
            className="font-semibold text-3xl"
            underline="none"
            color="#000"
          >
            {"<Joseph/>"}
          </Link>
        </Grid>
        <Grid item xs={4.5} sm={9} md={5} lg={7.3}></Grid>
        <Grid item xs>
          <Box
            component="div"
            sx={{
              display: {
                xs: "none",
                md: "block"
              }
            }}
          >
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
          </Box>
          <Box
            component="div"
            sx={{
              display: {
                xs: "block",
                md: "none"
              }
            }}
          >
            <Grid item xs>
              <DrawerMenu />
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
