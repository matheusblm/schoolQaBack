import { useQuery } from "@tanstack/react-query";
import { getAsk } from "../services/queries/Ask/getAsk";
import { getStudentTopics } from "../services/queries/Student/getStudentTopics";

export const useAsk = () => {
  return useQuery(["lastAsk"], () => getAsk());
};
