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
  Text,
  useDisclosure,
} from "@chakra-ui/react";

export const ModalAskCreate = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} colorScheme="orange" zIndex={999}>
        Criar Nova Pergunta
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {" "}
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
                <Text>P</Text>
              </Stack>

              <Box px={6}>
                <List spacing={3} py={8}>
                  <ListItem></ListItem>
                </List>

                <Button mt={10} w="full" colorScheme="blue" rounded="xl">
                  Enviar
                </Button>
              </Box>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
