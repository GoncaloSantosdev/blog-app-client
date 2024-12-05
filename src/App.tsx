// React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Pages
import { ErrorPage, HomePage, PostDetailsPage, ProfilePage } from "./pages";
// Components
import { MainLayout } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/post/:id",
        element: <PostDetailsPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
