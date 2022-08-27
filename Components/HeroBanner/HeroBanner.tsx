import React from "react";
import { Box } from "@mui/material";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { ForestFirstLayer } from "./forestFirstLayer";
import { ForestSecondLayer } from "./forestSecondLayer";

export const HeroBanner = () => {
  return (
    <Box>
      <Parallax pages={6}>
        <ParallaxLayer offset={0} speed={0.5}>
          <ForestFirstLayer />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.25}>
          <ForestSecondLayer />
        </ParallaxLayer>
        <ParallaxLayer offset={2}></ParallaxLayer>
        <ParallaxLayer offset={3}></ParallaxLayer>
        <ParallaxLayer offset={4}></ParallaxLayer>
        <ParallaxLayer offset={5}></ParallaxLayer>
      </Parallax>
    </Box>
  );
};
