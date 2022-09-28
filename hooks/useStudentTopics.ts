import { useQuery } from "@tanstack/react-query";
import { getStudentTopics } from "../services/queries/Student/getStudentTopics";

export const useStudentTopics = () => {
  return useQuery(["studentTopicList"], () => getStudentTopics());
};
