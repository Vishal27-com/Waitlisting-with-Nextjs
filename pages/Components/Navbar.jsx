import React from "react";
import Link from "next/link";
import { Box, Flex, Heading,Text } from "@chakra-ui/react";
const Navbar = () => {
  return (
    <Box>
      <Flex
        p="20px"
        align="center"
        justify="space-between"
        color="#fff"
        fontSize="20px"
        fontWeight="600"
      >
        <Link href={`/`}><Text _hover={{color:"red"}}>Movie App</Text></Link>
        <Link href={`/whislist`}><Text  _hover={{color:"red"}}>Whislist</Text></Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
