import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import heroBannerImage from "../assets/images/banner.png";

function Herobanner() {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#ff2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={"700"}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      >
        Sweat, Smile <br /> and Repeate
      </Typography>
      <Typography fontSize={"22px"} lineHeight={"35px"} mb={3}>
        check out the most effentive exercises
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exerciese"
        sx={{ backgroundColor: "#ff2625", px: "10px" }}
      >
        Explore Exercises
      </Button>
      <img
        src={heroBannerImage}
        alt="heroBannerImage"
        className="hero-banner-img"
      />
      <Typography
        fontWeight={600}
        color="#ff2625"
        fontSize={"200px"}
        zIndex={10}
        sx={{
          opacity: 0.1,
          display: {
            lg: "block",
            xs: "none",
          },
        }}
      >
        Exercise
      </Typography>
    </Box>
  );
}

export default Herobanner;
