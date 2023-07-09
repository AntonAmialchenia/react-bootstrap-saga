import axios from "axios";
import { Comment } from "../types/types";

export const getCommentsAll = async (id: number) => {
  return await axios.get<Comment[]>(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
  );
};
