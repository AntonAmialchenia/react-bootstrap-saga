import axios from "axios";

export const getCommentsAll = async (id: number) => {
  return await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
  );
};
