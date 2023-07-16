import axios from "axios";
import { NewPost, Post } from "../types/types";

export const getPostsApi = async () => {
  return await axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
};

export const deletePostApi = async (id: number) => {
  return await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
};

export const createPostApi = async (post: NewPost) => {
  return await axios.post<Post>(
    `https://jsonplaceholder.typicode.com/posts`,
    post,
  );
};

export const updatePostApi = async (post: Post) => {
  return await axios.put<Post>(
    `https://jsonplaceholder.typicode.com/posts/${post.id}`,
    post,
  );
};
