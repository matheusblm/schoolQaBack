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
  HStack,
} from "@chakra-ui/react";
import Link from "next/link";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Layout } from "../../Layout";
import { Input } from "../Input";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

type SignInFormData = {
  email: string;
  password: string;
  name: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema),
  });
  const { signIn } = useContext(AuthContext);

  const handleSignin = (values: SignInFormData) => {
    signIn(values);
  };
  return (
    <Layout menuOff>
      <Box
        position={"relative"}
        as="form"
        onSubmit={handleSubmit(handleSignin)}
      >
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
            <Box mt={10}>
              <Stack spacing={4}>
                <Input
                  placeholder="email@email.com"
                  error={errors.email}
                  {...register("email")}
                />

                <Input
                  placeholder="password"
                  error={errors.password}
                  {...register("password")}
                  type="password"
                />
              </Stack>
              <HStack justifyContent="space-between" mt="10" w="70%">
                <Link href={"/aluno/register"}>
                  <Text color="blue.500" _hover={{ cursor: "pointer" }}>
                    Registrar
                  </Text>
                </Link>
                <Link href={"/professor"}>
                  <Text color="blue.500" _hover={{ cursor: "pointer" }}>
                    Professor
                  </Text>
                </Link>
              </HStack>

              <Button
                mt={8}
                w={"full"}
                colorScheme="blue"
                type="submit"
                isLoading={isSubmitting}
              >
                Entrar
              </Button>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Layout>
  );
};
