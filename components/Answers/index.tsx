import { Button, HStack, Text, VStack } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

type indexProps = {
  title: string;
  id: string;
  index: number;
  selectedAnswers: string;
  setSelectedAnswers: Dispatch<SetStateAction<string>>;
};

export const Answers = ({
  title,
  id,
  index,
  selectedAnswers,
  setSelectedAnswers,
}: indexProps) => {
  const letters = ["a", "b", "c", "d", "e", "f", "g"];

  return (
    <Button
      value={id}
      colorScheme={selectedAnswers === id ? "blue" : "orange"}
      onClick={() => setSelectedAnswers(id)}
      minW="100px"
      wordBreak="break-all"
      whiteSpace="normal"
      h="auto"
      minH="50px"
    >
      <HStack>
        <Text>{letters[index]}.</Text>

        <Text wordBreak="break-word" fontSize="sm">
          {title}
        </Text>
      </HStack>
    </Button>
  );
};
