import axios from "axios";
import { Post } from "../types/types";

export const getPostsApi = async () => {
  return await axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
};

export const deletePostApi = async (id: number) => {
  return await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
};
