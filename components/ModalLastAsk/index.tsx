import {
  Box,
  Button,
  Heading,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";

export const ModalLastAsk = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const alunos = [
    {
      nome: "Matheus",
      resposta: "32",
      acertou: false,
    },
    {
      nome: "Jose",
      resposta: "12",
      acertou: false,
    },
    {
      nome: "DASD",
      resposta: "12",
      acertou: false,
    },
    {
      nome: "Ds",
      resposta: "12",
      acertou: false,
    },
    {
      nome: "DSADAS",
      resposta: "12",
      acertou: true,
    },
  ];

  const formatedAnswer = (title: string) => {
    return title.length > 25 ? title.slice(0, 25) : title;
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="orange" zIndex={999}>
        Ver respostas da ultima pergunta
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Resposta da ultima pergunta</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading size="md">Pergunta: Zezinho impar ou par</Heading>
            <TableContainer mt="30px">
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Nome</Th>
                    <Th>Resposta</Th>
                    <Th>Acertou a questao</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {alunos.map((item) => (
                    <Tr key={item.nome}>
                      <Td>{item.nome}</Td>
                      <Td>
                        <Tooltip label={item.resposta}>
                          {formatedAnswer(item.resposta)}
                        </Tooltip>
                      </Td>
                      <Td>{item.acertou ? "Sim" : "Nao"}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="orange" onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
