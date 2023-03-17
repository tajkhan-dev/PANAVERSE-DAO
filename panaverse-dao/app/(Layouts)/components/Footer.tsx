"use client";
import React from "react";
import {
  Flex,
  Box,
  Text,
  Heading,
  Container,
  Image,
  ListItem,
  UnorderedList,
  useColorMode,
} from "@chakra-ui/react";
const Footers = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Flex
        backgroundColor={colorMode === "light" ? "#EDEEF3" : "#282b2e"}
        direction={["column", "column", "row"]}
      >
        <Container>
          <Image height={["80px", "80px", "100px"]} alt="piaic" src="/p1.png" />
          <Text mt={"10px"}>
            The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
            Panaverse DAO is a movement to spread these technolgies globally. It
            is community of Web 3 and Metaverse developers, designers, trainers,
            startup founders and service providers.
          </Text>
        </Container>
        <Container mt={["30px", "30px", "30px"]}>
          <Text color={"#11ad8e"} fontWeight={"bold"}>
            Programs Of studies
          </Text>
          <UnorderedList>
            <ListItem>Web 3.0 and Metaverse Developer</ListItem>

            <ListItem>Artificial Intelligence</ListItem>
            <ListItem>Cloud-Native Computing</ListItem>
            <ListItem>Ambient Computing and IoT</ListItem>
          </UnorderedList>
        </Container>
        <Container mt={["30px", "30px", "30px"]}>
          <Text color={"#11ad8e"} fontWeight={"bold"}>
            Support
          </Text>
          <UnorderedList>
            <ListItem>Help Center</ListItem>

            <ListItem>Terms Of Service</ListItem>
            <ListItem>Legal</ListItem>
            <ListItem>Privacy Policy</ListItem>
          </UnorderedList>
        </Container>
      </Flex>
    </>
  );
};

export default Footers;
