import React from "react";
import { Box } from "@mui/material";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { ForestFirstLayer } from "./forestFirstLayer";
import { ForestSecondLayer } from "./forestSecondLayer";
import { ForestThirdLayer } from "./forestThirdLayer";
import { ForestFourthLayer } from "./forestFourthLayer";
import { ForestFifthLayer } from "./forestFifthLayer";
import { ForestSixthLayer } from "./forestSixthLayer";

export const HeroBanner = () => {
  return (
    <Box>
      <Parallax pages={2}>
        <ParallaxLayer offset={0} speed={0}>
          <ForestSixthLayer />
        </ParallaxLayer>
        <ParallaxLayer offset={0.1} speed={1.5}>
          <ForestFifthLayer />
        </ParallaxLayer>
        <ParallaxLayer offset={0.2} speed={2} >
          <ForestFourthLayer />
        </ParallaxLayer>
        <ParallaxLayer offset={0.25} speed={3}>
          <ForestThirdLayer />
        </ParallaxLayer>
        <ParallaxLayer speed={4} offset={0.3}>
          <ForestSecondLayer />
        </ParallaxLayer>
        <ParallaxLayer offset={0.32} speed={5}>
          <ForestFirstLayer />
        </ParallaxLayer>
      </Parallax>
    </Box>
  );
};
