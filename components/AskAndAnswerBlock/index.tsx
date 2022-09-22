import {
  Box,
  Button,
  Heading,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";

export const AskAndAnswerBlock = () => {
  const perguntaErespost = {
    pergunta: "Qual desses e par?",
    respostas: [
      {
        tittle: "1",
      },
      {
        tittle: "3",
      },
      {
        tittle: "6",
      },
      {
        tittle: "7",
      },
      {
        tittle: "8",
      },
    ],
  };
  return (
    <Box>
      <Heading fontSize="md">{perguntaErespost.pergunta}</Heading>
      <RadioGroup defaultValue="1">
        <Stack>
          {perguntaErespost.respostas.map((item) => (
            <Radio key={item.tittle} value={item.tittle}>
              {item.tittle}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
      <Button colorScheme="blue">Enviar</Button>
    </Box>
  );
};
