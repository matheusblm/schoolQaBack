import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import { Input } from "../Input";

export const ModalCreateTopic = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [topicTitle, setTopicTitle] = useState("");
  return (
    <>
      <Button onClick={onOpen} colorScheme="orange">
        Criar novo Topico
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Criando um novo topico</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading size="md">Nome do Topico</Heading>
            <Input
              value={topicTitle}
              onBlur={(event: any) => setTopicTitle(event.target.value)}
              placeHolder="Ex: Geografia"
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="orange">Criar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
