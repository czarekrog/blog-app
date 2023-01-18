import { MainLayout } from "./layout/MainLayout";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Home } from "./routes/Home";
import { About } from "./routes/About/About";
import { Contact } from "./routes/Contact/Contact";
import { SignIn } from "./routes/SignIn/SignIn";
import { SignUp } from "./routes/SignUp/SignUp";
import { Post } from "./routes/Post/Post";
import { ForgotPassword } from "./routes/ForgotPassword/ForgotPassword";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "./libs/firebase";
import { useDispatch } from "react-redux";
import { signIn, signOut } from "./features/userSlice";
import getUserData from "./utils/getUserData";
import { Dashboard } from "./routes/Dashboard/Dashboard";
import { DashboardLayout } from "./layout/DashboardLayout";
import { AddNew } from "./routes/Dashboard/AddNew/AddNew";
import { EditPost } from "./routes/Dashboard/EditPost/EditPost";
import { useFetchPosts } from "./hooks/post/useFetchPosts";

const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      { path: "/contact", element: <Contact /> },
      { path: "/sign-in", element: <SignIn /> },
      { path: "/sign-up", element: <SignUp /> },
      { path: "/forgot-password", element: <ForgotPassword /> },
      {
        path: "/post/:id",
        element: <Post />,
      },
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: "add-new", element: <AddNew /> },
          { path: "edit/:id", element: <EditPost /> },
        ],
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  const { fetch } = useFetchPosts();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, async (user) => {
      if (user) {
        const { uid, name, accessLevel } = await getUserData({ uid: user.uid });
        dispatch(signIn({ uid, name, accessLevel }));
      } else {
        dispatch(signOut());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
