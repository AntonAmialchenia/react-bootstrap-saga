import axios from "axios";
import { Post } from "../types";

export const getPostsApi = async () => {
  const { data } = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts",
  );
  return data;
};
