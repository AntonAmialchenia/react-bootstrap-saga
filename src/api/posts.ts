import axios from "axios";

export const getPostsApi = async () => {
  return await axios.get("https://jsonplaceholder.typicode.com/posts");
};
