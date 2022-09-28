import { AxiosResponse } from "axios";
import { api } from "../../apiClient";
import { TopicType } from "../Topics/types";
import { AskType } from "./types";

export async function getAsk(): Promise<AskType> {
  const { data }: AxiosResponse<AskType> = await api.get(`ask/last`);
  return data;
}
