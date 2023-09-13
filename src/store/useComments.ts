import { create } from "zustand";
import { Comment } from "../types";
import { getCommentsApi } from "../api/comments";

interface commentState {
  items: Comment[];
  isLoading: boolean;
  error: null | string;
  fetchComments: (id: number) => void;
}

export const useComments = create<commentState>((set) => ({
  items: [],
  isLoading: false,
  error: null,
  fetchComments: async (id) => {
    set({ isLoading: true });
    try {
      const data = await getCommentsApi(id);
      if (!data.length) throw new Error("Failed to fetch. Try again.");
      set({ items: data, error: null });
    } catch (error) {
      if (error instanceof Error) {
        set({ error: error.message });
      }
    } finally {
      set({ isLoading: false });
    }
  },
}));
