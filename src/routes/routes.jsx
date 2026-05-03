import { LoginPage } from "@/modules/auth/pages/loginPage";
import AppLayout from "@/modules/layout/AppLayout";
import { GuardAuth } from "@/modules/layout/guardAuth";
import { AboutPage } from "@/pages/About";
import { HomePage } from "@/pages/Home";
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
