import { Box, Heading, HStack, Icon, VStack } from "@chakra-ui/react";
import { MdSettings, MdOutlineLibraryBooks } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { IconType } from "react-icons";
import Link from "next/link";
import { useRouter } from "next/router";

type OptionsType = {
  title: string;
  link: string;
  icon: IconType;
};

export const MenuProfessor = () => {
  const options: OptionsType[] = [
    {
      title: "Aula",
      link: "/professor/aula",
      icon: MdOutlineLibraryBooks,
    },
    {
      title: "Turma",
      link: "/professor/turma",
      icon: FaUserFriends,
    },
    {
      title: "Configurações",
      link: "/configuracoes",
      icon: MdSettings,
    },
  ];
  const { pathname } = useRouter();
  console.log(pathname);
  return (
    <HStack
      justifyContent="space-around"
      borderRadius="10px"
      height="70px"
      width="300px"
      padding="10px"
      shadow="md"
      bg="white"
    >
      {options.map((option) => (
        <Link href={option.link} key={option.link}>
          <VStack
            _hover={{ opacity: "0.5", cursor: "pointer" }}
            width="80"
            transitionDuration="0.75s"
            color={pathname === option.link ? "blue.600" : "gray.600"}
          >
            <Icon as={option.icon} fontSize="3xl" />
            <Heading fontSize="sm" fontWeight="semibold">
              {option.title}
            </Heading>
          </VStack>
        </Link>
      ))}
    </HStack>
  );
};
