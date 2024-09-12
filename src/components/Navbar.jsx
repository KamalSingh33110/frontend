import React from 'react'
import { IoIosAddCircleOutline, } from "react-icons/io";
import { Link } from "react-router-dom"
import { Container, Flex, Text, HStack, Button, useColorMode, useColorModeValue } from '@chakra-ui/react'

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Container maxW={"1140px"} px={4} bg={useColorModeValue("gray.100", "gray.900")}>
            <Flex h={16} alignItems={"center"} justifyContent={"space=between"}
                flexDir={{
                    base: "column",
                    sm: "row",
                }}
            >
                <Text
                    bgGradient={'linear(to-r, cyan.400, blue.500)'}
                    bgClip={'text'}
                    fontWeight={"bold"}
                    fontSize={{
                        base: "22", sm: "28"
                    }}
                    textTransform="uppercase"

                >

                    <Link to={"/"}>Product Cart</Link>
                </Text>

                <HStack spacing={2} alignItems={"center"}>
                    <Link to={"/create"}>
                        <Button>
                            <IoIosAddCircleOutline fontSize={"20"} />
                        </Button>
                    </Link>
                    <Button spacing={2} alignItems={"center"} onClick={toggleColorMode}>
                        {
                            colorMode === "light" ? "🌑" : "☀️"
                        }
                    </Button>

                </HStack>

            </Flex>

        </Container>
    )
}

export default Navbar