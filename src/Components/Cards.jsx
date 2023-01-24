import { Box, Flex, Image, Text, useToast } from "@chakra-ui/react";
import React from "react";
import { AiTwotoneHeart } from "react-icons/ai";

export default function Cards({
  wishlist,
  title,
  brand,
  image,
  id,
  category,
  price,
}) {
  const toast = useToast();
  function addToWishlistItem(e) {
    let prev = JSON.parse(localStorage.getItem("swishlist")) || [];
    localStorage.setItem("swishlist", JSON.stringify([...prev, e]));
    toast({
      id,
      title: "Successfuly Added To Wishlist Item",
      duration: 1500,
      status: "success",
    });
  }
  return (
    <Box
      boxShadow={"xl"}
      borderRadius={"15px"}
      border={"1px solid black"}
      pb={"20px"}
    >
      <Image borderTopRadius={"15px"} src={image} w={"100%"} />
      <Text mt={"10px"} fontSize={"18px"} fontWeight={500}>
        {title}
      </Text>
      <Flex
        width={"80%"}
        margin={"auto"}
        mt={"10px"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Text fontWeight={600}>Price:- {price}/-</Text>

        {wishlist ? null : (
          <AiTwotoneHeart
            onClick={() =>
              addToWishlistItem({ title, brand, image, id, category, price })
            }
            style={{ cursor: "pointer" }}
            color={"red"}
            size={"22px"}
          />
        )}
      </Flex>
    </Box>
  );
}
