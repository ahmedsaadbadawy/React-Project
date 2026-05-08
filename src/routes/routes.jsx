import Advice from "@/hooks/advice";
import NotesPageProvider from "@/hooks/NotesPageHook";
import { LoginPage } from "@/modules/auth/pages/loginPage";
import AppLayout from "@/modules/layout/AppLayout";
import { GuardAuth } from "@/modules/layout/guardAuth";
import { AboutPage } from "@/pages/About";
import { HomePage } from "@/pages/Home";
import NotesPage from "@/pages/Notes";
import { createBrowserRouter } from "react-router";

export const Routing = createBrowserRouter([
  {
    path: "/",
    element: (
      <GuardAuth>
        <AppLayout />
      </GuardAuth>
    ),
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/advice",
        element: <Advice />,
      },
      {
        path: "/notes",
        element: (
          <NotesPageProvider>
            <NotesPage />
          </NotesPageProvider>
        ),
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
  {
    path: "/auth/login",
    element: <LoginPage />,
  },
]);
