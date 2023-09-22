import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box borderRadius="md" bg="white" w="100%" h="100%" p={4} color="black">
      <VStack spacing={8} align="left">
        <Image src={imageSrc} />
        <Heading>{title}</Heading>
        <Text>{description}</Text>
        <Text>
          See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </Text>
      </VStack>
    </Box>
  );
};

export default Card;
