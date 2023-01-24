import { Box, Button, Flex, Grid, Select, Text } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { useState } from "react";
import Cards from "../Components/Cards";

export default function Product() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [order,setOrder] = useState('') 
  const breakpoints = {
    sm: "repeat(2, 1fr)",
    md: "repeat(3, 1fr)",
    lg: "repeat(4, 1fr)",
  };
  useEffect(() => {
    axios
      .get(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=${12}${order}`
      )
      .then((response) => setData(response.data.data))
      .catch((e) => console.log(e));
  }, [page,order]);
  return (
    <Box>
      <Navbar />
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        gap={5}
        mt={"50px"}
        height={"70px"}
      >
        <Select onClick={(e)=>setOrder(e.target.value)} w={"20%"} placeholder="Sort By Price">
          <option value="&sort=price&order=asc">Low To High</option>
          <option value="&sort=price&order=desc">High To Low</option>
        </Select>
      </Flex>
      <Grid
        w={"100%"}
        p={"50px"}
        templateColumns={breakpoints}
        gap={"100px"}
      >
        {data.map((e, i) => (
          <Cards {...e} key={i} />
        ))}
      </Grid>
      <Box w={"100%"}>
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          gap={"20px"}
          padding={"30px"}
        >
          {page === 1 ? null : (
            <Button
              colorScheme={"blue"}
              disabled={true}
              onClick={() => {
                setPage(page - 1);
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
              }}
            >
              -
            </Button>
          )}
          <Text>{page}</Text>
          {data.length !== 12 ? null : (
            <Button
              colorScheme={"blue"}
              onClick={() => {
                setPage(page + 1);
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
              }}
            >
              +
            </Button>
          )}
        </Flex>
      </Box>
    </Box>
  );
}
