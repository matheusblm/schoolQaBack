import { AxiosResponse } from "axios";
import { api } from "../../apiClient";
import { TopicType } from "../Topics/types";

export async function getStudentTopics(): Promise<TopicType[]> {
  const { data }: AxiosResponse<TopicType[]> = await api.get(`topic/student`);
  return data;
}
