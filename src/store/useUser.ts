import { create } from "zustand";
import { getUserApi } from "../api/user";
import { User } from "../types";

interface userState {
  user: User;
  isLoading: boolean;
  error: null | string;
  fetchUser: (id: number) => void;
}

export const useUser = create<userState>((set) => ({
  user: {} as User,
  isLoading: false,
  error: null,
  fetchUser: async (id) => {
    set({ isLoading: true });
    try {
      const data = await getUserApi(id);
      if (!data) throw new Error("Failed to fetch. Try again.");
      set({ user: data, error: null });
    } catch (error) {
      if (error instanceof Error) {
        set({ error: error.message });
      }
    } finally {
      set({ isLoading: false });
    }
  },
}));
