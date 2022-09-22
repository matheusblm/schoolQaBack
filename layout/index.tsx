import { VStack } from "@chakra-ui/react";
import { Menu } from "../components/menu";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <VStack w="100vw" h="97vh" bg="gray.100">
      <Menu />
      <VStack maxW="1400px" h="100%" w="100%" bg="white" borderRadius="10px">
        {children}
      </VStack>
    </VStack>
  );
};
