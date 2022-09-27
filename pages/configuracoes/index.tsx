import { Layout } from "../../Layout";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
  Heading,
  Text,
  Input,
  Flex,
  Button,
} from "@chakra-ui/react";

const Configuracoes = () => {
  return (
    <Layout>
      <Box height="100%" width="100%" padding="20px">
        <Heading size="md">Configuracoes</Heading>
        <Flex justifyContent="center" flexDir="column" gridGap="10px">
          <FormControl width="50%">
            <FormLabel>Altera Nome de usuario</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl width="50%">
            <FormLabel>Altera email</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl width="50%">
            <FormLabel>Altera senha</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl width="50%">
            <FormLabel>Confirmar nova senha</FormLabel>
            <Input type="email" />
          </FormControl>
          <Box>
            <Button>Enviar</Button>
          </Box>
        </Flex>
      </Box>
    </Layout>
  );
};

export default Configuracoes;
