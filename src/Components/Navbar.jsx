import { Box } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const naviagate = useNavigate()
  return (
    <Box
      w={"100%"}
      h={"80px"}
      display={"flex"}
      bg={"blue.400"}
      color={'white'}
      fontWeight={500}
      justifyContent={'space-evenly'}
      alignItems={'center'}
      fontSize={'23px'}
      boxShadow={'2xl'}
    >
        <Box cursor={'pointer'} onClick={()=> naviagate('/')} >Product</Box>
        <Box cursor={'pointer'} onClick={()=> naviagate('/wishlist')}>Wishlist</Box>
    </Box>
  );
}
