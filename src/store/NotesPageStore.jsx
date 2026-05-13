import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useNotesPageStore = create(
  persist(
    (set) => ({
      notes: [],
      theme: "light",
      showForm: false,
      addNote: (note) => set((state) => ({ notes: [...state.notes, note] })),
      deleteNote: (id) =>
        set((state) => ({
          notes: state.notes.filter((note) => note.id !== id),
        })),
      changeTheme: () =>
        set((state) => {
          const newTheme = state.theme === "light" ? "dark" : "light";
          document.documentElement.className = newTheme;
          return { theme: newTheme };
        }),
      toggleForm: () => set((state) => ({ showForm: !state.showForm })),
    }),
    {
      name: "notes-page-storage",
      partialize: (state) => ({
        notes: state.notes,
        theme: state.theme,
      }),
    },
  ),
);
