import React from "react";
import { Field, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRef } from "react";
import { useNotesPageStore } from "@/store/NotesPageStore";

const NotesFormLayer = () => {
  const notesFormLayer = useRef(null);
  const noteTitleRef = useRef(null);
  const noteSubRef = useRef(null);
  const noteContentRef = useRef(null);
  
  const addNote = useNotesPageStore((state) => state.addNote);
  const toggleForm = useNotesPageStore((state) => state.toggleForm);

  function handleAddNote(e) {
    e.preventDefault();
    const note = {
      noteTitle: noteTitleRef.current.value,
      noteSub: noteSubRef.current.value,
      noteContent: noteContentRef.current.value,
      id: new Date().toLocaleString(),
    };
    addNote(note);
    toggleForm();
  }
  return (
    <div
      ref={notesFormLayer}
      className="notes-form-layer fixed top-12 left-0  w-full h-full bg-muted/50 flex items-center justify-center">
      <div className="form-container bg-white p-6 w-4/5 md:w-1/2 rounded-2xl shadow-lg">
        <form onSubmit={(e) => handleAddNote(e)}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="noteTitle">Note Title</FieldLabel>
              <Input
                id="noteTitle"
                ref={noteTitleRef}
                placeholder="Rabbit"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="noteSub">Note Sub</FieldLabel>
              <Input
                id="noteSub"
                ref={noteSubRef}
                placeholder="The running rabbit"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="noteDescribtion">
                Note Describtion
              </FieldLabel>
              <Input
                id="noteDescribtion"
                ref={noteContentRef}
                placeholder="Note Describtion"
                required
              />
            </Field>
          </FieldGroup>
          <br />
          <Field orientation="horizontal" className="justify-end">
            <Button variant="outline" type="button" onClick={() => toggleForm()}>
              Cancel
            </Button>
            <Button type="submit">Submit</Button>
          </Field>
        </form>
      </div>
    </div>
  );
};

export default NotesFormLayer;
