import {
  Input as ChakraInput,
  FormControl,
  FormLabel,
  InputProps as ChakraInputProps,
  FormErrorMessage,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
  mask?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error, mask, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && (
        <FormLabel htmlFor={name} color="gray.500">
          {label}
        </FormLabel>
      )}
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="blue.500"
        bgColor="gray.100"
        variant="filled"
        color="gray.500"
        _hover={{
          bgColor: "gray.200",
        }}
        ref={ref}
        size="lg"
        mask={mask}
        {...rest}
      />

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
