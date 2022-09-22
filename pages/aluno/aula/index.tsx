import { Box, Heading, Spinner } from "@chakra-ui/react";
import { Layout } from "../../../layout";

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
    <Layout>
      {fakeObj.isLoading ? (
        <Spinner />
      ) : (
        <Box height="100%" width="100%" padding="20px">
          <Heading size="md">Olá {fakeObj.name}</Heading>
        </Box>
      )}
    </Layout>
  );
};

export default Aula;
