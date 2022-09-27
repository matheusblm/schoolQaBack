import { Box, Center } from "@chakra-ui/react";
import Image from "next/image";
import ellipse from "../../assets/Ellipse1.png";
import ellipse2 from "../../assets/Ellipse2.png";

export const EllipseBlock = () => {
  return (
    <Center position="absolute" top="50%" right="50%">
      <Box>
        <Image src={ellipse} alt="ellipse" />
      </Box>
      <Box position="absolute" top="50%" right="-10%">
        <Image src={ellipse2} alt="ellipse2" />
      </Box>
    </Center>
  );
};
