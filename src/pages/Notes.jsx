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

const NotesPage = () => {
  const { state, dispatch } = useContext(notesPageContext);
  return (
    <div className="container mx-auto mt-8">
      <Badge variant="secondary" className="mb-4 text-lg px-3 py-4 ">
        Notes
      </Badge>
      <div className="notes-group grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Card size="sm" className="mx-auto w-full max-w-sm">
          <CardHeader>
            <CardTitle>Small Card</CardTitle>
            <CardDescription>
              This card uses the small size variant.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              The card component supports a size prop that can be set to
              &quot;sm&quot; for a more compact appearance.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="destructive" size="sm" className="w-full">
              Delete
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default NotesPage;
