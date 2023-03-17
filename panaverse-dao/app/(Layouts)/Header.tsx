"use client";
import React, { useState } from "react";
import {
  Flex,
  Box,
  Container,
  HStack,
  VStack,
  Image,
  Link,
  Button,
  useColorMode,
  IconButton,
  Divider,
} from "@chakra-ui/react";
import {
  MoonIcon,
  SunIcon,
  BellIcon,
  HamburgerIcon,
  CloseIcon,
} from "@chakra-ui/icons";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [display, changeDisplay] = useState("none");
  return (
    <>
      <Flex
        as={"header"}
        left={0}
        w={"100%"}
        pos={"fixed"}
        overflow={"hidden"}
        top={0}
        boxShadow={"lg"}
        zIndex={10}
        justify={"space-between"}
      >
        <Flex>
          <Image
            ml={["0px", "0px", "0px", "80px", "0px"]}
            height={["50px", "50px", "80px"]}
            alt="piaic"
            src="/p1.png"
          />
        </Flex>

        <Flex
          gap={"50px"}
          marginLeft={["", "", "", "150px", "200px"]}
          display={["none", "none", "none", "flex"]}
          mt={"30px"}
        >
          <Link> Home</Link>
          <Link>About</Link>

          <Link>Contact</Link>

          <Link>courses</Link>
        </Flex>

        <Flex
          marginLeft={["", "", "0px", "300px", "300px"]}
          display={["none", "none", "none", "flex"]}
          mt={"20px"}
        >
          <BellIcon mt={2} boxSize={["20px", "20px", "25px"]} />

          <Button
            background={"none"}
            _hover={{
              background: "none",
            }}
            onClick={toggleColorMode}
          >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>

          <Button display={["none", "none", "flex"]} bgColor={"#11ad8e"}>
            Apply Now
          </Button>
        </Flex>

        <Flex marginLeft={["", "", "", "auto"]}>
          <IconButton
            onClick={() => changeDisplay("flex ")}
            display={["flex", "flex", "flex", "none"]}
            icon={<HamburgerIcon />}
            aria-label={""}
          />
        </Flex>
      </Flex>
      <Flex
        w={"100vw"}
        backgroundColor={colorMode === "light" ? "white" : "#1A202C"}
        zIndex={20}
        h={"100vh"}
        pos={"fixed"}
        top={"0"}
        left={"0"}
        overflow="auto"
        direction={"column"}
        display={display}
      >
        <Flex justify={"flex-end"}>
          <BellIcon mt={2} boxSize={"20px"} />
          <Button
            background={"none"}
            _hover={{
              background: "none",
            }}
            onClick={toggleColorMode}
          >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>{" "}
          <IconButton
            onClick={() => changeDisplay("none")}
            size={"md"}
            icon={<CloseIcon />}
            aria-label={""}
          />{" "}
        </Flex>
        <Flex direction={"column"} align="center" gap={"30px"} mt={"25px"}>
          <Link> Home</Link>
          <Link>About</Link>

          <Link>Contact</Link>

          <Link>courses</Link>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
