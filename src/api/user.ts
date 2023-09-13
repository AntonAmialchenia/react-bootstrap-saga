import axios from "axios";
import { User } from "../types";

export const getUserApi = async (id: number) => {
  const { data } = await axios.get<User>(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );
  return data;
};
