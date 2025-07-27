import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./components/Layout/AppLayout";

import "./App.css";
import Home from "./components/Home";
import KeyFeatures from "./components/KeyFeatures";
import ApplyAsTutor from "./components/ApplyAsTutor";
import FAQ from "./components/FAQ";
import Olympiad202025 from "./components/Olympiad202025";
import XceleratorInternship from "./components/XceleratorInternship";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/KeyFeatures",
        element: <KeyFeatures />,
      },
      {
        path: "/ApplyAsTutor",
        element: <ApplyAsTutor />,
      },
      {
        path: "/FAQ",
        element: <FAQ />,
      },
      {
        path: "/Olympiad202025",
        element: <Olympiad202025 />,
      },
      {
        path: "/XceleratorInternship",
        element: <XceleratorInternship />,
      },
    ],
  },
], {
  basename: "/Talking_New_Design_CICD_Github"
});

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;