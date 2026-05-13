import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import NotesFormLayer from "@/components/notes/NotesFormLayer";
import { useEffect } from "react";
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Sun01Icon, Moon02Icon } from "@hugeicons/core-free-icons";
import { useNotesPageStore } from "@/store/NotesPageStore";
import { useShallow } from "zustand/shallow";

const NotesPage = () => {
  // const { notes, theme,deleteNote, changeTheme } = useNotesPageStore(
  //   useShallow((state) => ({
  //     notes: state.notes,
  //     theme: state.theme,
  //     deleteNote: state.deleteNote,
  //     changeTheme: state.changeTheme,
  //   })),
  // );
  const { notes, theme, deleteNote, changeTheme, showForm, toggleForm } =
    useNotesPageStore(useShallow((state) => ({ ...state })));

  // to check if the component(Notes) is mounted(from the database)
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div>Loading notes...</div>;
  return (
    <div className="container mx-auto mt-8 relative">
      <div className="header mb-4 flex justify-center">
        <Badge className="text-lg px-3 py-4 ">Notes</Badge>
      </div>
      <div className="notes-group grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {notes.map((note, index) => (
          <Card key={index} size="sm" className="mx-auto w-full max-w-sm">
            <CardHeader>
              <CardTitle>{note.noteTitle}</CardTitle>
              <CardDescription>{note.noteSub}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-2">{note.noteContent}</p>
            </CardContent>
            <CardFooter>
              <Button
                variant="destructive"
                size="sm"
                className="w-full"
                onClick={() => deleteNote(note.id)}>
                Delete
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="floating-buttons fixed bottom-4 right-4 flex flex-col gap-2">
        <Button size="sm" variant="outline" onClick={() => changeTheme()}>
          {theme === "dark" ? (
            <HugeiconsIcon icon={Sun01Icon} size={16} />
          ) : (
            <HugeiconsIcon icon={Moon02Icon} size={16} />
          )}
        </Button>
        <Button size="icon-lg" className="" onClick={() => toggleForm()}>
          +
        </Button>
      </div>
      {showForm && <NotesFormLayer />}
    </div>
  );
};

export default NotesPage;
