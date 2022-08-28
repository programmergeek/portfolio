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
      <Parallax pages={1}>
        {/* <ParallaxLayer>
          <ForestSixthLayer />
        </ParallaxLayer>
        <ParallaxLayer speed={0.5}>
          <ForestFifthLayer />
        </ParallaxLayer>
        <ParallaxLayer speed={0.65}>
          <ForestFourthLayer />
        </ParallaxLayer> */}
        <ParallaxLayer speed={0.75}>
          <ForestThirdLayer />
        </ParallaxLayer>
        <ParallaxLayer
        speed={0.85}
        >
          <ForestSecondLayer />
        </ParallaxLayer>
        <ParallaxLayer speed={1}>
          <ForestFirstLayer />
        </ParallaxLayer>
      </Parallax>
    </Box>
  );
};
