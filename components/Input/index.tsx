import { Input as ChakraInput } from "@chakra-ui/react";

export const Input = ({ ...rest }) => {
  return (
    <ChakraInput
      bg={"gray.100"}
      border={0}
      color={"gray.500"}
      _placeholder={{
        color: "gray.500",
      }}
      {...rest}
    />
  );
};
