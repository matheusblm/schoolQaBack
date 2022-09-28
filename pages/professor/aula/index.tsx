import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { EllipseBlock } from "../../../components/EllipseBlock";
import { ModalAskCreate } from "../../../components/ModalAskCreate";
import { ModalCreateTopic } from "../../../components/ModalCreateTopic";
import { ModalLastAsk } from "../../../components/ModalLastAsk";
import { useTopics } from "../../../hooks/useTopics";
import { Layout } from "../../../Layout";

export const Aula = () => {
  const fakeObj = {
    name: "Matheus",
    aulaIsOn: true,
    isLoading: false,
  };

  const topics = {
    title: "Numeros pares",
    isSelect: true,
  };
  const alunos = ["jorginho", "mumuzinho"];

  const { data: topicsData } = useTopics();

  return (
    <Layout>
      <Box width="100%" height="100%">
        {fakeObj.isLoading ? (
          <Spinner />
        ) : (
          <Box height="100%" width="100%" padding="20px">
            <Heading size="md">Olá Professor {fakeObj.name}</Heading>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              alignContent="center"
              height="100%"
            >
              <VStack w="33%">
                <Heading>Topicos</Heading>
                <p>topico1</p>
                <ModalCreateTopic />
              </VStack>
              <VStack>
                <ModalLastAsk />
                <ModalAskCreate />
              </VStack>

              <VStack w="33%" alignContent="center" alignItems="center">
                <Heading fontSize="md">
                  Alunos que responderam a pergunta
                </Heading>
                {alunos.map((item) => (
                  <Text key={item}>{item}</Text>
                ))}
              </VStack>
            </Flex>
          </Box>
        )}
      </Box>
      <EllipseBlock />
    </Layout>
  );
};

export default Aula;
