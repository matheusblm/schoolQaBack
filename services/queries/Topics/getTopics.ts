import { AxiosResponse } from "axios";
import { api } from "../../apiClient";
import { TopicType } from "./types";

export async function getTopics(): Promise<TopicType[]> {
  const { data }: AxiosResponse<TopicType[]> = await api.get(`/topic`);
  return data;
}
