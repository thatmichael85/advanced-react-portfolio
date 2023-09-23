import React from "react";
import { Box, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box position="fixed" bottom={0} left={0} right={0} backgroundColor="#18181b">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={12}
        >
          <p>Michael • © 2023</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
