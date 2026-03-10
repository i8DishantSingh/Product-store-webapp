import { Container, Flex, Text, Link, HStack, Button } from '@chakra-ui/react'
import { CiSquarePlus } from "react-icons/ci";
import React from 'react'

function Navbar() {
  return (
    <Container maxW={"1140"} px={4}>  

        <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
            base:"column",
            sm:"row"
        }}
        >
            <Text
             fontSize={{base:"22", sm:"28"}}
             fontWeight={"bold"}
             textTransform={"uppercase"}
             textAlign={"center"}
             bgGradient={"linear(to-r, green.500, blue.500)"}
             bgClip={"text"}

            >
               <Link to={"/"}>Product store</Link>
            </Text> 

            <HStack spacing={2} alignItem={"center"}>
                <Link to={"/create"}>
                    <Button>
                        <CiSquarePlus fontSize={20}/>

                    </Button>
                </Link>
            </HStack>
        </Flex>
    </Container>
  )
}

export default Navbar