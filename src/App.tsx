// React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Pages
import {
  ErrorPage,
  HomePage,
  PostDetailsPage,
  ProfilePage,
  ExplorePage,
  PeoplePage,
  SavedPostsPage,
  CreatePostPage,
} from "./pages";
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
        path: "/explore",
        element: <ExplorePage />,
      },
      {
        path: "/people",
        element: <PeoplePage />,
      },
      {
        path: "/post/:id",
        element: <PostDetailsPage />,
      },
      {
        path: "/saved",
        element: <SavedPostsPage />,
      },
      {
        path: "/create",
        element: <CreatePostPage />,
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
