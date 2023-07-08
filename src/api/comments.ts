import axios from "axios";
import { Comment } from "../types";

export const getCommentsApi = async (id: number) => {
  const { data } = await axios.get<Comment[]>(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
  );
  return data;
};
