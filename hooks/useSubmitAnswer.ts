import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { api } from "../services/apiClient";
import { queryClient } from "../services/queryClient";

type ValuesSubmit = {
  title: string;
  asksId: string;
};

const postAnswer = async (values: ValuesSubmit) => {
  await api.post(`student_answers`, {
    values,
  });
};

export const useSubmitAnswer = () => {
  const toast = useToast();
  return useMutation((values: ValuesSubmit) => postAnswer(values), {
    onSuccess: () => {
      queryClient.invalidateQueries(["lastAsk"]);

      toast({
        title: "Enviado com sucesso",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    },
  });
};
