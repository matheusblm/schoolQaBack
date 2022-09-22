import { HStack } from "@chakra-ui/react";

type OptionsType = {
  title: string;
  link: string;
  icon: any;
};

export const Menu = () => {
  const options: OptionsType[] = [
    {
      title: "string",
      link: "string",
      icon: "any",
    },
  ];

  return <HStack></HStack>;
};
