"use client";
import {
  Image,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  useColorMode,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { head, Letter, Textanime } from "./components/motion";

const Mains = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Container mb={"50px"} variants={Textanime} as={motion.div} mt={"100px"}>
        {" "}
        <Heading textAlign={"center"}>Program In The NutShell</Heading>
        <Box
          mt={"30px"}
          maxW={"container.md"}
          as={motion.h1}
          variants={Letter}
          initial="hidden"
          whileInView={"visible"}
          backgroundColor={colorMode === "light" ? "#EDEEF3" : "#282b2e"}
        >
          <Box p={"20px"}>
            <Heading
              as={motion.h1}
              variants={Letter}
              initial="hidden"
              whileInView={"visible"}
              textAlign={"center"}
              color={"#11ad8e"}
            >
              Earn While You Learn
            </Heading>
            <Text
              as={motion.h1}
              variants={Letter}
              initial="hidden"
              whileInView={"visible"}
              textAlign={"center"}
            >
              In this brand-new type of curriculum, students will learn how to
              make money and boost exports in the classroom and will begin doing
              so within six months of the programs beginning. It resembles a
              cross between a corporate venture and an educational project.
            </Text>
          </Box>
        </Box>
      </Container>

      <Heading textAlign={"center"}>Panaverse Courses</Heading>
      <Container
        maxW={"container.lg"}
        mt={"50px"}
        as={motion.div}
        variants={Textanime}
      >
        <Text
          as={motion.p}
          variants={head}
          whileInView={"Show"}
          initial={"hidden"}
          color={"#11ad8e"}
          fontWeight={"bold"}
        >
          Program Of Studies
        </Text>
        <Heading
          as={motion.h1}
          variants={head}
          whileInView={"Show"}
          initial={"hidden"}
        >
          Core Courses <Text>(Common In All Specialization)</Text>
        </Heading>
        <Text
          as={motion.p}
          variants={head}
          whileInView={"Show"}
          initial={"hidden"}
        >
          Every participant of the program will start by completing the
          following three core courses.
        </Text>
      </Container>

      <Flex direction={["column", "column", "column", "row"]}>
        <Image
          as={motion.img}
          variants={head}
          whileInView={"Show"}
          initial={"hidden"}
          mt={["50px", "50px", "150px"]}
          alt="s"
          src="/gg.webp"
          h={["350px", "600px", "800px", "560px"]}
        />
        <Flex
          mt={["20px", "20px", "20px", "80px"]}
          as={motion.div}
          variants={Textanime}
          justify={"space-between"}
          direction={["column", "column", "column"]}
        >
          <Container
            p={"50px"}
            whileHover={{ scale: 0.9 }}
            as={motion.div}
            variants={Letter}
            whileInView={"visible"}
            initial={"hidden"}
            borderRadius={"10px"}
            _hover={{
              transform: "scale(1.1)",
            }}
            m={["", "", "", "20px"]}
            maxW={"container.sm"}
            backgroundColor={colorMode === "light" ? "#EDEEF3" : "#282b2e"}
          >
            {" "}
            <Heading textAlign={"center"} color={"#11ad8e"}>
              Quater 1
            </Heading>{" "}
            <Text textAlign={"center"}>
              CS-101: Object-Oriented Programming using TypeScript
            </Text>
          </Container>
          <Container
            p={"50px"}
            whileHover={{ scale: 0.9 }}
            as={motion.div}
            variants={Letter}
            whileInView={"visible"}
            initial={"hidden"}
            _hover={{
              transform: "scale(1.1)",
            }}
            m={["", "", "", "20px"]}
            mt={["20px", "10px", "20px", ""]}
            borderRadius={"10px"}
            maxW={"container.sm"}
            backgroundColor={colorMode === "light" ? "#EDEEF3" : "#282b2e"}
          >
            {" "}
            <Heading textAlign={"center"} color={"#11ad8e"}>
              Quater 2
            </Heading>
            <Text textAlign={"center"}>
              W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud
              Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for
              Terraform
            </Text>
          </Container>

          <Container
            p={"50px"}
            whileHover={{ scale: 0.9 }}
            as={motion.div}
            variants={Letter}
            whileInView={"visible"}
            initial={"hidden"}
            _hover={{
              transform: "scale(1.1)",
            }}
            m={["", "", "", "20px"]}
            mt={["20px", "10px", "20px", ""]}
            maxW={"container.sm"}
            borderRadius={"10px"}
            backgroundColor={colorMode === "light" ? "#EDEEF3" : "#282b2e"}
          >
            {" "}
            <Heading textAlign={"center"} color={"#11ad8e"}>
              Quater 3
            </Heading>
            <Text textAlign={"center"}>
              $-101: Dollar Making Bootcamp - Full-Stack Template and API
              Product Development
            </Text>
          </Container>
        </Flex>
      </Flex>

      <Container
        maxW={"container.lg"}
        mt={["100px", "100px"]}
        as={motion.div}
        variants={Textanime}
      >
        <Heading
          as={motion.p}
          variants={head}
          whileInView={"Show"}
          initial={"hidden"}
          color={"#11ad8e"}
        >
          Specialized Tracks
        </Heading>
        <Text
          as={motion.p}
          variants={head}
          whileInView={"Show"}
          initial={"hidden"}
        >
          After completing the first two quarters the participants will select
          one or more specializations consisting of two courses each:
        </Text>
      </Container>
      <Box mt={"80px"} as={motion.div} variants={Textanime}>
        <Heading
          textAlign={"center"}
          color={"#11ad8e"}
          as={motion.p}
          variants={head}
          whileInView={"Show"}
          initial={"hidden"}
        >
          Web 3.0 (Blockchain) and Metaverse Specialization
        </Heading>
        <Text
          textAlign={"center"}
          as={motion.p}
          variants={head}
          whileInView={"Show"}
          initial={"hidden"}
        >
          This Web 3.0 and Metaverse specialization focuses on developing
          full-stack Web 3.0 and Metaverse experiences for the next generation
          of the internet by specializing in building worlds that merge the best
          of cutting-edge decentralized distributed blockchains with 3D
          metaverse client experiences.
        </Text>
        <Flex direction={["column", "column", "column", "row"]} mt={"80px"}>
          <Image
            as={motion.img}
            variants={head}
            initial={"hidden"}
            whileInView={"Show"}
            alt="s"
            src="/ll.png"
            height={["300px", "300px", "600px", "500px"]}
          />
          <Flex direction={"column"} as={motion.div} variants={Textanime}>
            <Container
              p={"50px"}
              whileHover={{ scale: 0.9 }}
              border={"2px"}
              borderColor={"#11ad8e"}
              as={motion.div}
              variants={Letter}
              whileInView={"visible"}
              initial={"hidden"}
              m={["", "", "", "20px"]}
              mt={["20px", "10px", "20px", ""]}
              maxW={"container.sm"}
              borderRadius={"10px"}
              backgroundColor={colorMode === "light" ? "#EDEEF3" : "#282b2e"}
            >
              {" "}
              <Heading color={"#11ad8e"} textAlign={"center"}>
                Quater IV
              </Heading>
              <Text textAlign={"center"}>
                W3-351: Developing Smart Contracts and Planet-Scale Web 3.0
                Dapps
              </Text>{" "}
            </Container>
            <Container
              p={"50px"}
              whileHover={{ scale: 0.9 }}
              border={"2px"}
              borderColor={"#11ad8e"}
              as={motion.div}
              variants={Letter}
              whileInView={"visible"}
              initial={"hidden"}
              m={["", "", "", "20px"]}
              mt={["20px", "10px", "20px", ""]}
              maxW={"container.sm"}
              backgroundColor={colorMode === "light" ? "#EDEEF3" : "#282b2e"}
              borderRadius={"10px"}
            >
              {" "}
              <Heading color={"#11ad8e"} textAlign={"center"}>
                Quater V
              </Heading>
              <Text textAlign={"center"}>
                MV-361: Developing Planet-Scale Open Virtual and Augmented
                Metaverse Experiences
              </Text>{" "}
            </Container>
          </Flex>
        </Flex>
      </Box>

      <Box mt={"80px"} as={motion.div} variants={Textanime}>
        <Heading
          textAlign={"center"}
          color={"#11ad8e"}
          as={motion.p}
          variants={head}
          whileInView={"Show"}
          initial={"hidden"}
        >
          Artificial Intelligence (AI) and Deep Learning Specialization
        </Heading>
        <Text
          textAlign={"center"}
          as={motion.p}
          variants={head}
          whileInView={"Show"}
          initial={"hidden"}
        >
          The AI and Deep Learning specialization focuses on building and
          deploying intelligent APIs using OpenAI models and building custom
          Deep Learning Tensorflow models.
        </Text>
        <Flex direction={["column", "column", "column", "row"]} mt={"80px"}>
          <Image
            as={motion.img}
            variants={head}
            initial={"hidden"}
            whileInView={"Show"}
            alt="s"
            src="/AI.png"
            height={["400px", "400px", "500px", "560px"]}
          />
          <Flex direction={"column"} as={motion.div} variants={Textanime}>
            <Container
              border={"2px"}
              borderColor={"#11ad8e"}
              boxShadow={"lg"}
              p={"50px"}
              whileHover={{ scale: 0.9 }}
              as={motion.div}
              variants={Letter}
              whileInView={"visible"}
              initial={"hidden"}
              m={["", "", "", "20px"]}
              mt={["20px", "10px", "20px", ""]}
              maxW={"container.sm"}
              borderRadius={"10px"}
              backgroundColor={colorMode === "light" ? "#EDEEF3" : "#282b2e"}
            >
              {" "}
              <Heading color={"#11ad8e"} textAlign={"center"}>
                Quater IV
              </Heading>
              <Text textAlign={"center"}>
                AI-351: Developing Planet-Scale Intelligent APIs and Python
                Programming
              </Text>{" "}
            </Container>
            <Container
              border={"2px"}
              borderColor={"#11ad8e"}
              boxShadow={"lg"}
              p={"50px"}
              whileHover={{ scale: 0.9 }}
              as={motion.div}
              variants={Letter}
              whileInView={"visible"}
              initial={"hidden"}
              m={["", "", "", "20px"]}
              mt={["20px", "10px", "20px", ""]}
              maxW={"container.sm"}
              backgroundColor={colorMode === "light" ? "#EDEEF3" : "#282b2e"}
              borderRadius={"10px"}
            >
              {" "}
              <Heading color={"#11ad8e"} textAlign={"center"}>
                Quater V
              </Heading>
              <Text textAlign={"center"}>AI-361: Deep Learning and MLOps</Text>{" "}
            </Container>
          </Flex>
        </Flex>
      </Box>
      <Box mt={"80px"} as={motion.div} variants={Textanime}>
        <Heading
          textAlign={"center"}
          color={"#11ad8e"}
          as={motion.p}
          variants={head}
          whileInView={"Show"}
          initial={"hidden"}
        >
          Cloud-Native Computing Specialization
        </Heading>
        <Text
          textAlign={"center"}
          as={motion.p}
          variants={head}
          whileInView={"Show"}
          initial={"hidden"}
        >
          The Cloud-Native Computing Specialization focuses on Containers,
          Kubernetes, and CDK for Kubernetes
        </Text>
        <Flex
          direction={["column", "column", "column", "row"]}
          mt={["20px", "20px", "20px", "80px"]}
        >
          <Image
            as={motion.img}
            variants={head}
            initial={"hidden"}
            whileInView={"Show"}
            alt="s"
            src="/CL.png"
            height={["300px", "300px", "500px", "500px"]}
          />
          <Flex direction={"column"} as={motion.div} variants={Textanime}>
            <Container
              border={"2px"}
              borderColor={"#11ad8e"}
              boxShadow={"lg"}
              p={"50px"}
              whileHover={{ scale: 0.9 }}
              as={motion.div}
              variants={Letter}
              whileInView={"visible"}
              initial={"hidden"}
              m={["", "", "", "20px"]}
              mt={["20px", "10px", "20px", ""]}
              maxW={"container.sm"}
              borderRadius={"10px"}
              backgroundColor={colorMode === "light" ? "#EDEEF3" : "#282b2e"}
            >
              {" "}
              <Heading color={"#11ad8e"} textAlign={"center"}>
                Quater IV
              </Heading>
              <Text textAlign={"center"}>
                CN-351: Certified Kubernetes Application Developer (CKAD)
              </Text>{" "}
            </Container>
            <Container
              border={"2px"}
              borderColor={"#11ad8e"}
              boxShadow={"lg"}
              p={"50px"}
              whileHover={{ scale: 0.9 }}
              as={motion.div}
              variants={Letter}
              whileInView={"visible"}
              initial={"hidden"}
              m={["", "", "", "20px"]}
              mt={["20px", "10px", "20px", ""]}
              maxW={"container.sm"}
              backgroundColor={colorMode === "light" ? "#EDEEF3" : "#282b2e"}
              borderRadius={"10px"}
            >
              {" "}
              <Heading color={"#11ad8e"} textAlign={"center"}>
                Quater V
              </Heading>
              <Text textAlign={"center"}>
                CN-361: Developing Multi-Cloud APIs using CDK for Terraform
              </Text>{" "}
            </Container>
          </Flex>
        </Flex>
      </Box>
      <Box mt={"80px"} as={motion.div} variants={Textanime}>
        <Heading
          textAlign={"center"}
          color={"#11ad8e"}
          as={motion.p}
          variants={head}
          whileInView={"Show"}
          initial={"hidden"}
        >
          Ambient Computing and IoT Specialization
        </Heading>
        <Text
          textAlign={"center"}
          as={motion.p}
          variants={head}
          whileInView={"Show"}
          initial={"hidden"}
        >
          The Ambient Computing and IoT Specialization focuses on building Smart
          Homes, Offices, Factories, and Cities using Voice computing, Matter,
          and Embedded Devices.
        </Text>
        <Flex direction={["column", "column", "column", "row"]} mt={"80px"}>
          <Image
            as={motion.img}
            variants={head}
            initial={"hidden"}
            whileInView={"Show"}
            alt="s"
            src="/AM.png"
            height={["300px", "300px", "450px", "450px"]}
          />
          <Flex direction={"column"} as={motion.div} variants={Textanime}>
            <Container
              border={"2px"}
              borderColor={"#11ad8e"}
              boxShadow={"lg"}
              p={"50px"}
              whileHover={{ scale: 0.9 }}
              as={motion.div}
              variants={Letter}
              whileInView={"visible"}
              initial={"hidden"}
              m={["", "", "", "20px"]}
              mt={["20px", "10px", "20px", ""]}
              maxW={"container.sm"}
              borderRadius={"10px"}
              backgroundColor={colorMode === "light" ? "#EDEEF3" : "#282b2e"}
            >
              {" "}
              <Heading color={"#11ad8e"} textAlign={"center"}>
                Quater IV
              </Heading>
              <Text textAlign={"center"}>
                AC-351: Ambient Computing with Voice Assistants and Matter
                Devices
              </Text>{" "}
            </Container>
            <Container
              border={"2px"}
              borderColor={"#11ad8e"}
              boxShadow={"lg"}
              p={"50px"}
              whileHover={{ scale: 0.9 }}
              as={motion.div}
              variants={Letter}
              whileInView={"visible"}
              initial={"hidden"}
              m={["", "", "", "20px"]}
              mt={["20px", "10px", "20px", ""]}
              maxW={"container.sm"}
              backgroundColor={colorMode === "light" ? "#EDEEF3" : "#282b2e"}
              borderRadius={"10px"}
            >
              {" "}
              <Heading color={"#11ad8e"} textAlign={"center"}>
                Quater V
              </Heading>
              <Text textAlign={"center"}>
                AC-361: Embedded Programming using C and Rust
              </Text>{" "}
            </Container>
          </Flex>
        </Flex>
      </Box>

      <Container
        p={"50px"}
        mb={"100px"}
        mt={"100px"}
        as={motion.div}
        variants={Letter}
        initial={"hidden"}
        whileInView={"visible"}
        borderRadius={"10px"}
        border={"2px"}
        borderColor={"#11ad8e"}
        backgroundColor={colorMode === "light" ? "#EDEEF3" : "#282b2e"}
        maxW={"container.lg"}
      >
        <Heading
          as={motion.h1}
          variants={Letter}
          initial={"hidden"}
          whileInView={"visible"}
          textAlign={"center"}
          color={"#11ad8e"}
        >
          OutCome For Students
        </Heading>
        <Text
          as={motion.h1}
          variants={Letter}
          initial={"hidden"}
          whileInView={"visible"}
        >
          The graduates of this program will own products (Full-Stack App
          Templates, AR and VR Experiences, and APIs) that are marketed globally
          by the Panaverse DAO and, if they like, will also be able to start off
          by offering services at a rate of $50 per hour ($96,000 per year).
          This would give Pakistani professionals and students a fantastic
          opportunity to better their financial situation while also giving the
          economy a much-needed boost by expanding software exports.
        </Text>
      </Container>
    </>
  );
};

export default Mains;
