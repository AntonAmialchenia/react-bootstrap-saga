import axios from "axios";
import { User } from "../types";

export const getUserApi = async (id: number) => {
  return await axios.get<User>(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );
};
