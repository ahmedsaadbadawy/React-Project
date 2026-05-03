import { RouterProvider } from "react-router";
import { Routing } from "./routes/routes";

export default function App() {
  return (
    <>
      <RouterProvider router={Routing} />
    </>
  );
}
