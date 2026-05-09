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
import { useContext } from "react";
import { notesPageContext } from "@/hooks/NotesPageHook";
import NotesFormLayer from "@/components/notes/NotesFormLayer";
import { useEffect } from "react";
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Sun01Icon, Moon02Icon } from "@hugeicons/core-free-icons";

const NotesPage = () => {
  const { state, dispatch } = useContext(notesPageContext);
  const [notes, setNotes] = useState([]);
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
    console.log(storedNotes);
  }, [state]);
  return (
    <div className="container mx-auto mt-8 relative">
      <div className="header mb-4 flex justify-center">
        <Badge
          className="text-lg px-3 py-4 ">
          Notes
        </Badge>
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
                onClick={() =>
                  dispatch({ type: "deleteNote", payload: note.id })
                }>
                Delete
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="floating-buttons fixed bottom-4 right-4 flex flex-col gap-2">
        <Button
          size="sm"
          variant="outline"
          onClick={() => dispatch({ type: "changeTheme" })}>
          {
            state.theme === "dark" ? (
              <HugeiconsIcon icon={Sun01Icon} size={16} /> 
            ) : (
              <HugeiconsIcon icon={Moon02Icon} size={16} />
            ) 
          }
        </Button>
        <Button
          size="icon-lg"
          className=""
          onClick={() => setShowForm(true)}>
          +
        </Button>
      </div>
      {showForm && <NotesFormLayer onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default NotesPage;
