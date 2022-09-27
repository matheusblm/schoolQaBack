import {
  Box,
  Button,
  Center,
  CheckboxIcon,
  Heading,
  HStack,
  List,
  ListIcon,
  ListItem,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useRadioGroup,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Answers } from "../Answers";

export const AskAndAnswerBlock = () => {
  const [selectedAnswers, setSelectedAnswers] = useState("");

  const perguntaErespost = {
    pergunta:
      "Normalmente, quantos litros de sangue uma pessoa tem? Em média, quantos são retirados numa doação de sangue?",
    respostas: [
      {
        title: "Tem entre 2 a 4 litros. São retirados 450 mililitros",
      },
      {
        title: "3",
      },
      {
        title: "6",
      },
      {
        title: "7",
      },
      {
        title: "8",
      },
    ],
  };
  return (
    <Center zIndex={999}>
      <Box
        maxW="350px"
        w="full"
        boxShadow="2xl"
        rounded="md"
        overflow="hidden"
        bg="gray.50"
        py={8}
      >
        <Stack textAlign={"center"} align={"center"}>
          <Heading bg="blue.400" bgClip="text">
            Pergunta e Resposta
          </Heading>
        </Stack>
        <Stack textAlign={"center"} p={6} align={"center"}>
          <Text>P: {perguntaErespost.pergunta}</Text>
        </Stack>

        <Box px={6}>
          <List spacing={3} py={8}>
            {perguntaErespost.respostas.map((item, index) => (
              <ListItem key={item.title}>
                <Answers
                  id={item.title}
                  index={index}
                  title={item.title}
                  selectedAnswers={selectedAnswers}
                  setSelectedAnswers={setSelectedAnswers}
                />
              </ListItem>
            ))}
          </List>

          <Button mt={10} w="full" colorScheme="blue" rounded="xl">
            Enviar
          </Button>
        </Box>
      </Box>
    </Center>
  );
};
