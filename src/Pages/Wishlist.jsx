import { Box, Grid, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import Cards from "../Components/Cards";
import Navbar from "../Components/Navbar";

export default function Wishlist() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("swishlist")) || []
  );
  const breakpoints = {
    sm: "repeat(2, 1fr)",
    md: "repeat(3, 1fr)",
    lg: "repeat(4, 1fr)",
  };
  return (
    <Box>
      <Navbar />
      {data.length === 0 ? (
        <Text mt={"10px"}> No Wishlist Item Added...</Text>
      ) : null}
      <Grid
        w={"100%"}
        p={"50px"}
        templateColumns={breakpoints}
        gap={"100px"}
      >
        {data.map((e, i) => (
          <Cards wishlist={"wishlist"} {...e} key={i} />
        ))}
      </Grid>
    </Box>
  );
}
