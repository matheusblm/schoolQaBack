import { VStack } from "@chakra-ui/react";
import { Menu } from "../components/Menu";
import { MenuProfessor } from "../components/MenuProfessor";

type LayoutProps = {
  children: React.ReactNode;
  menuOff?: boolean;
  student?: boolean;
};

export const Layout = ({
  children,
  menuOff = false,
  student = true,
}: LayoutProps) => {
  return (
    <VStack w="100vw" h="97vh" bg="gray.100">
      {!menuOff && student && <Menu />}
      {!menuOff && !student && <MenuProfessor />}
      <VStack maxW="1400px" h="100%" w="100%" bg="white" borderRadius="10px">
        {children}
      </VStack>
    </VStack>
  );
};
