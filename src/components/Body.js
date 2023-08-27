import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import Signup from "./Signup";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/browser",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
