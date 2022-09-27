import { Box, Center, Flex, Heading, Spinner } from "@chakra-ui/react";
import { AskAndAnswerBlock } from "../../../components/AskAndAnswerBlock";
import { EllipseBlock } from "../../../components/EllipseBlock";
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

  return (
    <Layout student={false}>
      <Box width="100%">
        {fakeObj.isLoading ? (
          <Spinner />
        ) : (
          <Box height="100%" width="100%" padding="20px">
            <Heading size="md">Olá {fakeObj.name}</Heading>
            <Flex
              justifyContent="center"
              alignItems="center"
              alignContent="center"
            >
              <AskAndAnswerBlock />
            </Flex>
          </Box>
        )}
      </Box>
      <EllipseBlock />
    </Layout>
  );
};

export default Aula;
