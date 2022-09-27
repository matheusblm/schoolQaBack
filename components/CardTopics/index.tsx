import { Box, VStack, Icon, Text, HStack } from "@chakra-ui/react";
import { BsCircleFill } from "react-icons/bs";
type CardTopicsProps = {
  title: string;
  isSelect: boolean;
};

export const CardTopics = ({ title, isSelect }: CardTopicsProps) => {
  return (
    <Box
      w="200px"
      borderRadius="10px"
      bg="gray.200"
      padding="20px"
      border="2px solid"
      borderColor={isSelect ? "blue.500" : "white"}
    >
      <HStack justifyContent="space-between">
        <Icon as={BsCircleFill} color="blue.600" fontSize="20px" />
        <Text>{title}</Text>
      </HStack>
    </Box>
  );
};
