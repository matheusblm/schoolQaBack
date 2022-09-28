import { useQuery } from "@tanstack/react-query";
import { getTopics } from "../services/queries/Topics/getTopics";

export const useTopics = () => {
  return useQuery(["topicsList"], () => getTopics());
};
