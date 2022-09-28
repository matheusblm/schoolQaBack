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
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useSubmitAnswer } from "../../hooks/useSubmitAnswer";
import { AskType } from "../../services/queries/Ask/types";
import { Answers } from "../Answers";

type AskAndAnswerBlockProps = {
  askData?: AskType;
};

export const AskAndAnswerBlock = ({ askData }: AskAndAnswerBlockProps) => {
  const [selectedAnswers, setSelectedAnswers] = useState("");
  const toast = useToast();
  const submitAnswer = useSubmitAnswer();

  const handleSubmitAnswer = () => {
    try {
      submitAnswer.mutateAsync({
        asksId: askData?.id || "",
        title: askData?.id || "",
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
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
          <Text>P: {askData?.title}</Text>
        </Stack>

        <Box px={6}>
          <List spacing={3} py={8}>
            {askData?.answers.map((item, index) => (
              <ListItem key={item.id}>
                <Answers
                  id={item.id}
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
