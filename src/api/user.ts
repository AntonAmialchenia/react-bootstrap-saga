import axios from "axios";

export const getUserApi = async (id: number) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );
  return data;
};
