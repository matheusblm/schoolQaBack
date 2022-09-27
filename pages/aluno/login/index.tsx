import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  IconProps,
  Icon,
} from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../../components/Input";
import { Layout } from "../../../Layout";

export const Login = () => {
  return (
    <Layout menuOff>
      <Box position={"relative"}>
        <Container
          as={SimpleGrid}
          maxW={"7xl"}
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, lg: 32 }}
          py={{ base: 10, sm: 20, lg: 32 }}
        >
          <Stack spacing={{ base: 10, md: 20 }}>
            <Heading lineHeight={1.1} fontSize={["5xl", "6xl"]}>
              Alunos
              <Text bg="blue.400" bgClip="text">
                &
              </Text>{" "}
              Educação
            </Heading>
          </Stack>
          <Stack
            bg={"gray.50"}
            rounded={"xl"}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: "lg" }}
          >
            <Stack spacing={4}>
              <Heading color={"blue.400"} lineHeight={1.1}>
                Login
              </Heading>
              <Text color={"gray.500"}>
                Entre para participar de aulas e questionarios!
              </Text>
            </Stack>
            <Box as={"form"} mt={10}>
              <Stack spacing={4}>
                <Input placeholder="email@email.com" />
                <Input placeholder="senha" />
              </Stack>
              <Link href={"/aluno/register"}>Registrar</Link>
              <Button mt={8} w={"full"}>
                Entrar
              </Button>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Layout>
  );
};

export default Login;
