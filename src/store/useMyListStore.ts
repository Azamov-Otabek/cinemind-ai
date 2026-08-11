import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { MediaCardProps } from "../components/MediaCard/MediaCard";

type MyListStore = {
  items: MediaCardProps[];
  toggleItem: (item: MediaCardProps) => void;
};

export const useMyListStore = create<MyListStore>()(
  persist(
    (set) => ({
      items: [],

      toggleItem: (item) =>
        set((state) => {
          const exists = state.items.some(
            (savedItem) => savedItem.id === item.id,
          );

          return {
            items: exists
              ? state.items.filter((savedItem) => savedItem.id !== item.id)
              : [...state.items, item],
          };
        }),
    }),
    {
      name: "cinemind-my-list",
    },
  ),
);
