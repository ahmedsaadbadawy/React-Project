import React from "react";
import { createContext } from "react";
import { useReducer } from "react";

export const notesPageContext = createContext();
export function NotesPageProvider({ children }) {
  const initialState = {
    noteTitle: null,
    noteSub: null,
    noteContent: null,
    notes: [],
    theme: "light",
  };

  function reducer(state, action) {
    switch (action.type) {
      case "addNoteTitle":
        return {
          ...state,
          noteTitle: action.payload,
        };
      case "addNoteSub":
        return {
          ...state,
          noteSub: action.payload,
        };
      case "addNoteContent":
        return {
          ...state,
          noteContent: action.payload,
        };
      case "addNote":
        const newNotes = [...state.notes, action.payload];
        localStorage.setItem("notes", JSON.stringify(newNotes));
        return {
          ...state,
          notes: newNotes,
        };
      case "deleteNote":
        const updatedNotes = state.notes.filter(
          (note) => note.noteTitle !== action.payload,
        );
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
        return {
          ...state,
          notes: updatedNotes,
        };
      case "changeTheme":
        const newTheme = state.theme === "light" ? "dark" : "light";
        localStorage.setItem("theme", JSON.stringify(newTheme));
        return {
          ...state,
          theme: newTheme,
        };

      default:
        break;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <notesPageContext.Provider value={{ state, dispatch }}>
      {children}
    </notesPageContext.Provider>
  );
}

export default NotesPageProvider;
