import {
  Box,
  Button,
  Heading,
  HStack,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Input } from "../Input";

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
          <ModalHeader>Criando Nova Pergunta</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <VStack gridGap="5" alignItems="start">
                <Heading size="md">Pergunta</Heading>
                <Input name="pergunta" placeholder="titulo da pergunta" />
                {[1, 2, 3, 4, 5].map((item) => (
                  <VStack gridGap="5" alignItems="start" key={item} w="full">
                    <Heading size="md">{item} Resposta</Heading>
                    <Input name="pergunta" placeholder="titulo da resposta" />
                    <RadioGroup>
                      <Stack direction="row">
                        <Radio value="1">Errada</Radio>
                        <Radio value="2">Correta</Radio>
                      </Stack>
                    </RadioGroup>
                  </VStack>
                ))}
              </VStack>

              {}
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="orange">Criar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
