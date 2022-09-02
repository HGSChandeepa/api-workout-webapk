import React, { useState } from "react";
import { Box } from "@mui/material";
import Herobanner from "../components/Herobanner";
import SearchExercise from "../components/SearchExercise";
import Exercise from "../components/Exercise";

function Home() {
  return (
    <Box>
      <Herobanner />
      <SearchExercise />
      <Exercise />
    </Box>
  );
}

export default Home;
